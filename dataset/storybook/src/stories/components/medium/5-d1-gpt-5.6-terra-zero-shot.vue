<template>
  <div class="w-full bg-white p-6">
    <article class="w-[488px] overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm">
      <div class="h-[172px] overflow-hidden">
        <Image
          :src="headerImage"
          alt="Produktillustration"
          imageClass="block h-[172px] w-full object-cover"
        />
      </div>

      <div class="flex h-[212px] flex-col gap-[7px] rounded-md p-[17.5px]">
        <div class="flex h-[22px] items-center gap-[7px]">
          <span class="text-[17.5px] font-medium leading-[21px] text-slate-700">Produkt1</span>
          <Tag
            value="Neu"
            rounded
            class="bg-[#d1fae5] px-[7px] py-[3px] text-[12.25px] font-bold text-[#047857]"
          />
        </div>

        <div class="h-[92px]">
          <p class="m-0 text-[14px] leading-[23px] text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
            repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
            quam perferendis esse, cupiditate neque quas!
          </p>
        </div>

        <div class="flex h-[49px] items-end justify-end gap-2 pt-4">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            class="w-32"
            inputClass="h-[31px] text-[14px]"
            incrementButtonIcon="pi pi-angle-up"
            decrementButtonIcon="pi pi-angle-down"
          />
          <Button
            label="Hinzufügen"
            icon="pi pi-plus"
            iconPos="right"
            class="h-[33px] border-[#10b981] bg-[#10b981] px-[11px] text-[14px] hover:border-[#059669] hover:bg-[#059669]"
          />
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Image from 'primevue/image'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)

const headerImage = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="488" height="172" viewBox="0 0 488 172">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#020719"/>
      <stop offset="0.55" stop-color="#06142a"/>
      <stop offset="1" stop-color="#001319"/>
    </linearGradient>
    <radialGradient id="orb" cx="40%" cy="28%" r="75%">
      <stop offset="0" stop-color="#39d364"/>
      <stop offset="0.42" stop-color="#137a3a"/>
      <stop offset="0.72" stop-color="#10283d"/>
      <stop offset="1" stop-color="#02091d"/>
    </radialGradient>
    <radialGradient id="orbSmall" cx="42%" cy="24%" r="78%">
      <stop offset="0" stop-color="#55dd70"/>
      <stop offset="0.48" stop-color="#167b3d"/>
      <stop offset="1" stop-color="#06162b"/>
    </radialGradient>
  </defs>
  <rect width="488" height="172" fill="url(#bg)"/>
  <g opacity=".18" stroke="#17614f" stroke-width="1">
    <path d="M0 141H488M0 151H488M0 161H488M0 171H488"/>
    <path d="M15 172L160 137M72 172L184 137M129 172L208 137M186 172L232 137M243 172L256 137M300 172L280 137M357 172L304 137M414 172L328 137M471 172L352 137"/>
  </g>
  <circle cx="163" cy="87" r="102" fill="url(#orb)"/>
  <circle cx="163" cy="87" r="101" fill="none" stroke="#7290a6" stroke-opacity=".2"/>
  <g transform="translate(111 34)">
    <path d="M50 3L70 3L76 17L94 13L102 31L94 47L99 67L82 91L54 103L29 91L14 68L19 48L8 29L18 13L36 17Z" fill="#144e44" stroke="#071c27" stroke-width="3"/>
    <path d="M36 17L50 3L52 33L32 38L18 13Z" fill="#5a8792" stroke="#092536" stroke-width="3"/>
    <path d="M52 33L70 3L76 17L94 13L84 40L64 43Z" fill="#536f7c" stroke="#092536" stroke-width="3"/>
    <path d="M18 30L42 39L35 57L14 49L8 29Z" fill="#31a35e" stroke="#092536" stroke-width="3"/>
    <path d="M84 40L102 31L94 47L99 67L78 60L72 46Z" fill="#48b96b" stroke="#092536" stroke-width="3"/>
    <path d="M35 57L52 48L72 46L78 60L82 91L54 103L29 91L14 68Z" fill="#239558" stroke="#092536" stroke-width="3"/>
    <path d="M42 39L52 33L64 43L72 46L52 48Z" fill="#203f4b" stroke="#092536" stroke-width="3"/>
    <path d="M29 67L45 76L54 103L29 91L14 68Z" fill="#38ad63" stroke="#092536" stroke-width="3"/>
  </g>
  <circle cx="356" cy="184" r="60" fill="url(#orbSmall)"/>
  <g transform="translate(325 151)" opacity=".9">
    <path d="M20 2L37 4L46 17L39 37L24 48L9 38L3 20L9 7Z" fill="#2d9060"/>
    <path d="M3 20L22 24L16 39L9 38Z" fill="#61a5a2"/>
    <path d="M22 24L37 4L46 17L39 37Z" fill="#476f78"/>
  </g>
</svg>
`)}`
</script>