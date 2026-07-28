<template>
  <main class="flex min-h-screen items-start justify-center bg-white p-6">
    <Card class="w-[488px] overflow-hidden rounded-xl shadow-sm">
      <template #header>
        <Image
          :src="productArtwork"
          alt="Produkt1"
          imageClass="block h-[172px] w-full object-cover"
        />
      </template>

      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <h2 class="text-lg font-medium text-slate-700">Produkt1</h2>
            <Tag value="Neu" severity="success" class="text-xs" />
          </div>

          <p class="m-0 text-sm leading-6 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inventore sed
            consequuntur error repudiandae numquam deserunt quisquam repellat libero
            asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </p>
        </div>
      </template>

      <template #footer>
        <div class="flex items-center justify-end gap-2 pt-2">
          <InputNumber
            v-model="quantity"
            :min="1"
            showButtons
            buttonLayout="vertical"
            incrementButtonIcon="pi pi-chevron-up"
            decrementButtonIcon="pi pi-chevron-down"
            class="w-32"
            inputClass="w-full"
          />
          <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)

const productArtwork =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 172">
      <defs>
        <radialGradient id="orb" cx="39%" cy="20%" r="67%">
          <stop offset="0%" stop-color="#4cdb60"/>
          <stop offset="44%" stop-color="#164728"/>
          <stop offset="75%" stop-color="#0b1426"/>
          <stop offset="100%" stop-color="#050a1b"/>
        </radialGradient>
        <radialGradient id="small" cx="45%" cy="18%" r="72%">
          <stop offset="0%" stop-color="#5be16c"/>
          <stop offset="56%" stop-color="#164c2c"/>
          <stop offset="100%" stop-color="#071126"/>
        </radialGradient>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop stop-color="#05091d"/>
          <stop offset=".54" stop-color="#031423"/>
          <stop offset="1" stop-color="#030916"/>
        </linearGradient>
      </defs>
      <rect width="488" height="172" fill="url(#bg)"/>
      <g opacity=".22" stroke="#15415a" stroke-width="1">
        <path d="M0 140H488M0 150H488M0 160H488M0 170H488"/>
        <path d="M32 172L182 130M72 172L198 130M112 172L214 130M152 172L230 130M192 172L246 130M232 172L262 130M272 172L278 130M312 172L294 130M352 172L310 130M392 172L326 130M432 172L342 130M472 172L358 130"/>
      </g>
      <circle cx="174" cy="86" r="102" fill="url(#orb)" stroke="#344360" stroke-width="1.5"/>
      <circle cx="383" cy="184" r="59" fill="url(#small)" stroke="#38506a" stroke-width="1.2"/>
      <g transform="translate(132 38)" stroke="#092c30" stroke-width="2" stroke-linejoin="round">
        <path d="M21 17L30 1L48 2L56 18L69 0L88 1L93 18L89 41L79 62L65 77L45 78L30 64L20 42Z" fill="#547983"/>
        <path d="M21 17L36 18L47 34L30 31Z" fill="#4ca778"/>
        <path d="M93 18L77 20L65 35L87 31Z" fill="#4aa273"/>
        <path d="M30 31L47 34L53 53L39 48Z" fill="#398c67"/>
        <path d="M65 35L77 20L73 48L57 55Z" fill="#438d6c"/>
        <path d="M39 48L53 53L57 55L73 48L79 62L65 77L45 78L30 64Z" fill="#41a36e"/>
        <path d="M36 18L48 2L56 18L53 37L47 34Z" fill="#315764"/>
        <path d="M56 18L69 0L77 20L65 35L53 37Z" fill="#456973"/>
        <path d="M48 2L69 0L56 18Z" fill="#547985"/>
        <path d="M47 34L53 37L57 55L53 53Z" fill="#183b44"/>
      </g>
      <g transform="translate(348 157) scale(.63)" stroke="#0a2930" stroke-width="2" stroke-linejoin="round">
        <path d="M21 17L30 1L48 2L56 18L69 0L88 1L93 18L89 41L79 62L65 77L45 78L30 64L20 42Z" fill="#557983"/>
        <path d="M21 17L36 18L47 34L30 31Z" fill="#50a77a"/>
        <path d="M93 18L77 20L65 35L87 31Z" fill="#4ea375"/>
        <path d="M36 18L48 2L56 18L53 37L47 34Z" fill="#305866"/>
        <path d="M56 18L69 0L77 20L65 35L53 37Z" fill="#456c75"/>
      </g>
    </svg>
  `)
</script>