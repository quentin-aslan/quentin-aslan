<script setup lang="ts">
definePageMeta({ translated: false, lang: 'fr' })

const { profile } = useSite()
const { person } = profile

useSeo({ title: `Mentions légales · ${person.name}`, description: `Mentions légales du site ${person.url}.`, path: '/mentions-legales' })
useHead({ meta: [{ name: 'robots', content: 'noindex' }] })
</script>

<template>
  <main id="main" tabindex="-1" class="article">
    <h1>Mentions légales</h1>
    <h2>Éditeur et directeur de la publication</h2>
    <p>
      {{ person.legal.name }}, {{ person.legal.form.toLowerCase() }}<br>
      Siège : {{ person.legal.address }}<br>
      SIRET : {{ person.legal.siret }} · Activité : {{ person.legal.naf }}
    </p>
    <p>E-mail : <a :href="`mailto:${person.email}`">{{ person.email }}</a><br>Téléphone : {{ person.phone }}</p>
    <h2>Hébergement</h2>
    <p>Cloudflare, Inc., 101 Townsend St, San Francisco, CA 94107, États-Unis.</p>
    <h2>Données personnelles et cookies</h2>
    <p>Ce site ne dépose aucun cookie et n'utilise aucun traceur.</p>
  </main>
</template>
