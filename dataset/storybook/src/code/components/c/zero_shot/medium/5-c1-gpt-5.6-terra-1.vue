<template>
  <main class="p-6">
    <Card class="mx-auto max-w-[488px] overflow-hidden border border-surface-200 shadow-sm">
      <template #header>
        <Image
          :src="productImage"
          alt="Produkt1"
          class="block h-44 w-full"
          image-class="h-44 w-full object-cover"
        />
      </template>

      <template #content>
        <div class="px-4 pb-4 pt-5">
          <div class="mb-2 flex items-center gap-2">
            <h1 class="text-lg font-medium text-surface-700">Produkt1</h1>
            <Badge value="Neu" severity="success" class="text-xs" />
          </div>

          <p class="m-0 text-sm leading-6 text-surface-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>

          <div class="mt-6 flex items-center justify-end gap-2">
            <InputNumber
              v-model="quantity"
              :min="1"
              showButtons
              buttonLayout="vertical"
              incrementButtonIcon="pi pi-chevron-up"
              decrementButtonIcon="pi pi-chevron-down"
              size="small"
              class="w-24"
              inputClass="w-full"
            />
            <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" size="small" />
          </div>
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'
import InputNumber from 'primevue/inputnumber'

const quantity = ref(1)

const productImage = `data:image/svg+xml;utf8,
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 976 352'>
  <defs>
    <linearGradient id='bg' x1='0' y1='0' x2='1' y2='1'>
      <stop stop-color='%23020718'/>
      <stop offset='.55' stop-color='%23010a17'/>
      <stop offset='1' stop-color='%23000411'/>
    </linearGradient>
    <radialGradient id='orb' cx='.35' cy='.15' r='.82'>
      <stop stop-color='%2328a53d'/>
      <stop offset='.42' stop-color='%230e652d'/>
      <stop offset='.78' stop-color='%23081622'/>
      <stop offset='1' stop-color='%23020918'/>
    </radialGradient>
    <filter id='glow'>
      <feGaussianBlur stdDeviation='18'/>
    </filter>
  </defs>
  <rect width='976' height='352' fill='url(%23bg)'/>
  <circle cx='673' cy='38' r='108' fill='%2300a53a' opacity='.25' filter='url(%23glow)'/>
  <g opacity='.25' stroke='%23076342' stroke-width='1'>
    <path d='M0 284H976M0 310H976M0 336H976'/>
    <path d='M30 352L230 250M110 352L275 250M190 352L320 250M270 352L365 250M350 352L410 250M430 352L455 250M510 352L500 250M590 352L545 250M670 352L590 250M750 352L635 250M830 352L680 250M910 352L725 250'/>
  </g>
  <circle cx='328' cy='174' r='205' fill='url(%23orb)' stroke='%23549280' stroke-opacity='.3' stroke-width='3'/>
  <circle cx='748' cy='367' r='114' fill='url(%23orb)' stroke='%23549280' stroke-opacity='.3' stroke-width='3'/>
  <g transform='translate(218 62) scale(1.12)'>
    <path d='M72 23L132 20 173 42 166 77 178 104 161 148 124 174 84 157 65 118 44 80 56 48Z' fill='%232b755d' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M72 23L102 24 104 50 78 51 56 48Z' fill='%235f9b8d' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M102 24L132 20 151 38 124 70 104 50Z' fill='%233e6d73' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M132 20L173 42 166 77 145 70Z' fill='%23659586' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M56 48L78 51 94 79 69 87 44 80Z' fill='%234ba47e' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M78 51L104 50 124 70 114 99 94 79Z' fill='%233b7680' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M124 70L145 70 166 77 155 106 128 100 114 99Z' fill='%23479678' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M69 87L94 79 114 99 104 123 79 112Z' fill='%233ca578' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M114 99L128 100 155 106 145 136 124 154 104 123Z' fill='%233f9b70' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M79 112L104 123 124 154 105 164 84 145Z' fill='%23308261' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
  </g>
  <g transform='translate(650 286) scale(.62)'>
    <path d='M72 23L132 20 173 42 166 77 178 104 161 148 124 174 84 157 65 118 44 80 56 48Z' fill='%232b755d' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M72 23L102 24 104 50 78 51 56 48Z' fill='%235f9b8d' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M102 24L132 20 151 38 124 70 104 50Z' fill='%233e6d73' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
    <path d='M132 20L173 42 166 77 145 70Z' fill='%23659586' stroke='%23051d25' stroke-width='7' stroke-linejoin='round'/>
  </g>
</svg>`
</script>