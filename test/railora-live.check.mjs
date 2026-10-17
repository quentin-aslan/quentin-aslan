// Run: node test/railora-live.check.mjs
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import vm from 'node:vm'

const src = readFileSync(new URL('../public/railora-live.js', import.meta.url), 'utf8')
const { pickTrain, summarize } = vm.runInNewContext(`${src};({ pickTrain, summarize })`)

const now = Date.parse('2026-10-15T17:00:00Z')
const at = min => new Date(now + min * 60e3).toISOString()
const train = (n, o) => ({ trainNumber: n, operatorBrand: { name: 'SNCF' }, originName: 'A', destinationName: 'B', aimedDeparture: at(-60), aimedArrival: at(60), isCancelled: false, liveDelaySeconds: null, lastUpdated: null, ...o })

const entries = [
  train('cancelled', { isCancelled: true, liveDelaySeconds: 1200, lastUpdated: at(-1) }),
  train('multiday', { aimedDeparture: at(-4 * 24 * 60), liveDelaySeconds: 1200, lastUpdated: at(-1) }),
  train('arrived', { aimedArrival: at(-120), liveDelaySeconds: 1200, lastUpdated: at(-1) }),
  train('tiny', { liveDelaySeconds: 120, lastUpdated: at(-1) }),
  train('huge', { liveDelaySeconds: 25000, lastUpdated: at(-1) }),
  train('stale', { liveDelaySeconds: 1500, lastUpdated: at(-30) }),
  train('d15', { liveDelaySeconds: 900, lastUpdated: at(-1) }),
  train('d20', { liveDelaySeconds: 1200, lastUpdated: at(-1) }),
  train('d40', { liveDelaySeconds: 2400, lastUpdated: at(-1) }),
]
const pick = pickTrain(entries, now)
assert.equal(pick.brand, 'SNCF d20')
assert.equal(pick.delayMin, 20)
assert.equal(pick.link.number, 'd20')
assert.ok(pick.progress > 0 && pick.progress < 1)

// No measured delay: the train closest to mid-journey, without a delay badge.
const quiet = pickTrain([train('early', { aimedDeparture: at(-20), aimedArrival: at(200) }), train('mid')], now)
assert.equal(quiet.brand, 'SNCF mid')
assert.equal(quiet.delayMin, null)
assert.equal(pickTrain([], now), null)

const src2 = (country, running, delayed) => ({ country, runningNow: { value: running, status: 'available' }, delayed: { value: delayed, status: delayed == null ? 'none' : 'available' } })
const stats = { rtAsOf: at(-2), sources: [src2('FR', 900, 300), src2('FR', 6, null), src2('ES', 300, null), src2('EU', 30, null), src2('KE', 0, null)] }
assert.deepEqual({ ...summarize(stats, now), asOf: 0 }, { running: 1236, countries: 2, delayed: 300, operators: 5, asOf: 0 })
assert.equal(summarize({ ...stats, rtAsOf: at(-11) }, now), null)
assert.equal(summarize({ rtAsOf: at(-1), sources: [src2('FR', 900, null)] }, now).delayed, null)

console.log('railora-live: ok')
