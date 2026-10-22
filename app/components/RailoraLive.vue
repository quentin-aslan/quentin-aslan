<script setup lang="ts">
const { profile, t } = useSite()
const live = t.live
const screens = profile.caseStudies.find(c => c.slug === 'railora')?.screens?.slice(0, 2) ?? []
// The largest operators Railora follows; logos are the app's own assets.
const operators = [
  { id: 'sncf', name: 'SNCF', w: 31 }, { id: 'renfe', name: 'Renfe', w: 42 }, { id: 'trenitalia', name: 'Trenitalia', w: 65 },
  { id: 'sbb', name: 'SBB CFF FFS', w: 142 }, { id: 'sncb', name: 'SNCB', w: 25 }, { id: 'eurostar', name: 'Eurostar', w: 70 },
  { id: 'cp', name: 'CP', w: 30 }, { id: 'via-rail', name: 'VIA Rail', w: 36 },
]
// Progressive enhancement: the static band is complete; the script adds live numbers and a running train.
useHead({ script: [{ src: '/railora-live.js', defer: true }] })
</script>

<template>
  <section
    id="live" class="live" aria-labelledby="live-title"
    :data-updated="live.updated" :data-scheduled="live.scheduled" :data-arrives="live.arrivesIn" :data-operators="live.operators"
  >
    <div class="wrap live-grid">
      <div class="live-copy">
        <div class="live-brand">
          <img src="/img/railora-icon.webp" alt="" width="64" height="64">
          <div>
            <h2 id="live-title" class="live-name">Railora</h2>
            <p class="live-by">{{ live.byline }}</p>
          </div>
        </div>
        <p class="live-tagline">{{ live.tagline }}</p>
        <div class="live-stats" data-live="stats" hidden>
          <p class="live-status">
            <span class="live-dot" aria-hidden="true" /><span>{{ live.label }} · <span data-live="updated" /></span>
          </p>
          <dl>
            <div><dt>{{ live.running }}</dt><dd data-live="running" /></div>
            <div><dt>{{ live.countries }}</dt><dd data-live="countries" /></div>
            <div data-live="delayed-stat" hidden><dt>{{ live.delayed }}</dt><dd data-live="delayed" /></div>
          </dl>
        </div>
        <div class="live-ops">
          <p data-live="operators">{{ live.operatorsStatic }}</p>
          <ul>
            <li v-for="o in operators" :key="o.id"><img :src="`/operators/${o.id}.svg`" :alt="o.name" :width="o.w" height="16" loading="lazy"></li>
          </ul>
        </div>
        <p class="live-built">{{ live.built }}</p>
        <p class="live-mcp">
          <a class="live-mcp-url" href="https://mcp.railora.app" target="_blank" rel="noopener">mcp.railora.app <span aria-hidden="true">↗</span></a>
          <span>{{ live.mcpLink }}</span>
        </p>
        <p class="live-links">
          <a class="btn btn-light" href="https://railora.app">{{ live.tryBeta }} <span aria-hidden="true">↗</span></a>
        </p>
      </div>
      <div class="live-visual">
        <!-- Mirrors the app's lock-screen Live Activity (RailoraLiveActivity/TrainLiveActivityWidget.swift). -->
        <div class="la">
          <a class="la-card" data-live="card" href="https://railora.app" target="_blank" rel="noopener" hidden>
            <span class="la-ends">
              <span class="la-time" data-live="dep" />
              <span class="la-chip">
                <img data-live="logo" alt="" height="15" hidden>
                <span data-live="opname" />
                <span class="la-num" data-live="num" />
              </span>
              <span class="la-time la-hero"><s class="la-struck" data-live="struck" hidden /><span data-live="arr" /></span>
            </span>
            <span class="la-stations"><span data-live="from" /><span data-live="to" /></span>
            <span class="la-rail" data-live="bar" aria-hidden="true">
              <span class="la-track" /><span class="la-fill" /><span class="la-origin" /><span class="la-terminus" />
              <svg class="la-train" viewBox="0 0 27 16"><path d="M3 2.5h15.5c3 0 5.4 2.2 7 6.3.5 1.3-.4 2.7-1.8 2.7H3A1.5 1.5 0 0 1 1.5 10V4A1.5 1.5 0 0 1 3 2.5Z" /><path class="la-win" d="M4 4.6h3.2v3H4zm4.6 0h3.2v3H8.6zm4.6 0h3.2v3h-3.2zm4.8 0h1.4c1.1 0 2.4 1.3 3 3H18z" /><circle cx="6" cy="13.6" r="1.6" /><circle cx="18" cy="13.6" r="1.6" /></svg>
            </span>
            <span class="la-action">
              <span class="la-status" data-live="status" />
              <span class="la-context" data-live="context" />
            </span>
            <span class="la-open">{{ live.open }} <span aria-hidden="true">↗</span></span>
          </a>
          <p class="la-caption" data-live="caption" hidden>{{ live.caption }}</p>
        </div>
        <span class="phones" data-live="phones">
          <img v-for="s in screens" :key="s.src" :src="s.src.replace(/\.webp$/, '-320.webp')" alt="" width="500" height="1087" loading="lazy">
        </span>
      </div>
    </div>
  </section>
</template>
