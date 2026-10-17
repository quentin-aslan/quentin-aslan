// Live Railora band on the home page. The HTML ships a static version; this only upgrades it.
const MIN = 60e3

/** Network totals, or null when the feed is older than 10 minutes. */
function summarize(stats, now) {
  if (!stats?.rtAsOf || now - Date.parse(stats.rtAsOf) > 10 * MIN) return null
  const live = (stats.sources || []).filter(s => s.runningNow?.status === 'available' && s.runningNow.value > 0)
  if (!live.length) return null
  const measured = live.filter(s => s.delayed?.status === 'available' && s.delayed.value != null)
  return {
    running: live.reduce((n, s) => n + s.runningNow.value, 0),
    // "EU" is Eurostar, not a country.
    countries: new Set(live.map(s => s.country).filter(c => /^[A-Z]{2}$/.test(c) && c !== 'EU')).size,
    delayed: measured.length ? measured.reduce((n, s) => n + s.delayed.value, 0) : null,
    operators: stats.sources.length,
    asOf: Date.parse(stats.rtAsOf),
  }
}

/** A train running now: a fresh, typical delay (10–45 min) if any, else the one closest to mid-journey. */
function pickTrain(entries, now) {
  const start = e => Date.parse(e.estimatedDeparture || e.aimedDeparture)
  const end = e => e.estimatedArrival ? Date.parse(e.estimatedArrival) : Date.parse(e.aimedArrival) + (e.liveDelaySeconds || 0) * 1000
  const fresh = e => e.liveDelaySeconds != null && e.lastUpdated && now - Date.parse(e.lastUpdated) <= 5 * MIN
  const running = (entries || []).filter(e => !e.isCancelled && e.aimedDeparture && e.aimedArrival
    && start(e) <= now - 15 * MIN && end(e) >= now + 15 * MIN && end(e) - start(e) <= 12 * 60 * MIN
    // A measured delay outside the typical range is more likely a glitch than news.
    && !(fresh(e) && (e.liveDelaySeconds < 600 || e.liveDelaySeconds > 2700)))
  if (!running.length) return null
  const delayed = running.filter(fresh)
  let pick
  if (delayed.length) {
    const sorted = delayed.map(e => e.liveDelaySeconds).sort((a, b) => a - b)
    const median = sorted[Math.floor(sorted.length / 2)]
    pick = delayed.reduce((a, b) => Math.abs(b.liveDelaySeconds - median) < Math.abs(a.liveDelaySeconds - median) ? b : a)
  } else {
    const mid = e => Math.abs((now - start(e)) / (end(e) - start(e)) - 0.5)
    pick = running.reduce((a, b) => mid(b) < mid(a) ? b : a)
  }
  return {
    brand: [pick.regionalBrand || pick.operatorBrand?.name, pick.trainNumber].filter(Boolean).join(' '),
    operator: pick.regionalBrand || pick.operatorBrand?.name || '',
    number: pick.trainNumber,
    logo: pick.operatorBrand?.logoAsset || null,
    aimedArr: Date.parse(pick.aimedArrival),
    link: { source: pick.source, tripId: pick.tripId, number: pick.trainNumber, date: pick.serviceDate, destinationUic: pick.destinationRailoraId },
    from: pick.originName,
    to: pick.destinationName,
    dep: start(pick),
    arr: end(pick),
    delayMin: fresh(pick) ? Math.round(pick.liveDelaySeconds / 60) : null,
    progress: Math.min(1, Math.max(0, (now - start(pick)) / (end(pick) - start(pick)))),
  }
}

if (typeof document !== 'undefined') {
  const band = document.getElementById('live')
  const API = 'https://api.railora.app/public/network'
  const lang = document.documentElement.lang
  const q = sel => band.querySelector(`[data-live="${sel}"]`)
  const fill = (tpl, values) => tpl.replace(/\{(\w+)\}/g, (_, k) => values[k])
  const num = new Intl.NumberFormat(lang)
  const time = new Intl.DateTimeFormat(lang, { hour: '2-digit', minute: '2-digit', hourCycle: 'h23', timeZone: 'Europe/Paris' })
  const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })
  let asOf = 0

  // Count-up and bar fill play once, on first view; final values are always written first.
  const motion = !matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window
  const countUp = el => {
    const to = +el.dataset.n
    const t0 = performance.now()
    el.style.minWidth = `${el.offsetWidth}px` // holds the final width: no layout shift
    const step = t => {
      const k = Math.min(1, (t - t0) / 1000)
      el.textContent = num.format(Math.round(to * (1 - (1 - k) ** 3)))
      if (k < 1) requestAnimationFrame(step)
      else el.style.minWidth = ''
    }
    requestAnimationFrame(step)
  }
  const io = motion && new IntersectionObserver(entries => entries.forEach((e) => {
    if (!e.isIntersecting) return
    io.unobserve(e.target)
    e.target.dataset.seen = ''
    if (e.target === q('stats')) ['running', 'countries', 'delayed'].forEach(k => countUp(q(k)))
    else q('bar').style.setProperty('--p', q('bar').dataset.p)
  }), { rootMargin: '0px 0px -10% 0px' })
  if (io) {
    io.observe(q('stats'))
    io.observe(q('card'))
  }
  const setNum = (key, n) => {
    q(key).dataset.n = n
    q(key).textContent = num.format(n)
  }

  const setLive = on => {
    band.classList.toggle('is-live', on)
    q('stats').hidden = !on
  }
  const ago = () => {
    const s = Math.max(0, Math.round((Date.now() - asOf) / 1000))
    q('updated').textContent = fill(band.dataset.updated, { t: s < 60 ? rtf.format(-s, 'second') : rtf.format(-Math.round(s / 60), 'minute') })
  }
  // Same wording as the app: hours and minutes until arrival.
  const until = ms => {
    const m = Math.max(1, Math.round(ms / MIN))
    return m < 60 ? `${m} min` : `${Math.floor(m / 60)} h ${String(m % 60).padStart(2, '0')}`
  }
  const detailUrl = link => {
    const params = new URLSearchParams(Object.entries(link).filter(([, v]) => v))
    return `https://railora.app${lang === 'fr' ? '/fr' : ''}/trains/detail?${params}`
  }
  const showTrain = (train, now) => {
    const card = q('card')
    card.href = detailUrl(train.link)
    const logo = q('logo')
    logo.hidden = !train.logo
    q('opname').hidden = !!train.logo
    q('opname').textContent = train.operator
    if (train.logo) {
      logo.onerror = () => { logo.hidden = true; q('opname').hidden = false }
      logo.src = `/operators/${train.logo}.${['vnr', 'fgc'].includes(train.logo) ? 'png' : 'svg'}`
      logo.alt = train.operator
    }
    q('num').textContent = train.number
    q('dep').textContent = time.format(train.dep)
    q('arr').textContent = time.format(train.arr)
    q('from').textContent = train.from
    q('to').textContent = train.to
    const late = train.delayMin != null
    card.classList.toggle('is-late', late)
    q('struck').hidden = !late
    q('struck').textContent = time.format(train.aimedArr)
    q('status').textContent = late ? `+${train.delayMin} min` : band.dataset.scheduled
    q('context').textContent = fill(band.dataset.arrives, { d: until(train.arr - now) })
    q('bar').dataset.p = train.progress
    if (!io || 'seen' in card.dataset) q('bar').style.setProperty('--p', train.progress)
  }
  const getJson = url => fetch(url).then(r => r.ok ? r.json() : Promise.reject(new Error(r.status)))

  const tick = async () => {
    if (document.visibilityState !== 'visible') return
    try {
      const [stats, trains] = await Promise.all([
        getJson(`${API}/stats`),
        getJson(`${API}/trains?status=running&country=FR,ES&limit=50`),
      ])
      const now = Date.now()
      const sum = summarize(stats, now)
      if (!sum) return setLive(false)
      asOf = sum.asOf
      setNum('running', sum.running)
      setNum('countries', sum.countries)
      setNum('delayed', sum.delayed ?? 0)
      q('delayed-stat').hidden = !sum.delayed
      q('operators').textContent = fill(band.dataset.operators, { n: num.format(sum.operators) })
      const train = pickTrain(trains.entries, now)
      q('card').hidden = !train
      q('caption').hidden = !train
      q('phones').hidden = !!train
      if (train) showTrain(train, now)
      ago()
      setLive(true)
    } catch {
      // Keep what is shown, unless it is now too old to call live.
      if (Date.now() - asOf > 10 * MIN) setLive(false)
    }
  }

  tick()
  setInterval(tick, 60e3)
  setInterval(() => asOf && ago(), 15e3)
  document.addEventListener('visibilitychange', tick)
}
