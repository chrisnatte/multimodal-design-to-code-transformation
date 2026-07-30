<template>
  <main class="min-h-screen bg-white pt-6 text-slate-600">
    <section class="mx-auto w-[518px]">
      <header class="mb-7 flex items-start gap-3">
        <Button
          icon="pi pi-times"
          rounded
          text
          severity="secondary"
          aria-label="Schließen"
          class="!mt-0.5 !h-9 !w-9 !border !border-slate-200 !bg-slate-50 !text-slate-500"
        />
        <div>
          <h1 class="text-[24px] font-bold leading-6 text-slate-700">Bestellung aufgeben</h1>
          <p class="mt-1 text-xs text-slate-400">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </header>

      <div class="mb-4">
        <div class="flex justify-between text-xs">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-400">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="mt-1 !h-1.5" />
      </div>

      <DataTable :value="products" size="small" class="text-xs">
        <Column field="product" header="Produkt" header-class="!text-slate-600 !font-semibold">
          <template #body="{ data }">
            <span>{{ data.product }}</span>
          </template>
        </Column>
        <Column header="Menge" header-class="!text-slate-600 !font-semibold" body-class="!w-[115px]">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              show-buttons
              button-layout="vertical"
              class="w-[93px]"
              input-class="!w-[93px] !py-1 !text-xs"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" header-class="!text-slate-600 !font-semibold" body-class="!whitespace-nowrap">
          <template #body="{ data }">
            {{ data.price }}
          </template>
        </Column>
        <Column body-class="!w-8">
          <template #body>
            <Button icon="pi pi-trash" text severity="danger" size="small" aria-label="Produkt entfernen" class="!h-7 !w-7" />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-5" />

      <form class="space-y-3" @submit.prevent>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label for="firstName" class="text-xs">Vorname</label>
            <InputText id="firstName" v-model="firstName" size="small" />
          </div>
          <div class="flex flex-col gap-1">
            <label for="lastName" class="text-xs">Nachname</label>
            <InputText id="lastName" v-model="lastName" size="small" />
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="street" class="text-xs">Straße</label>
          <InputText id="street" v-model="street" size="small" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label for="city" class="text-xs">PLZ / Ort</label>
            <InputText id="city" v-model="city" size="small" />
          </div>
          <div class="relative flex flex-col gap-1">
            <label for="country" class="text-xs">Land</label>
            <Select
              id="country"
              v-model="country"
              :options="countries"
              option-label="label"
              option-value="value"
              size="small"
              class="w-full"
            />
            <Listbox
              v-model="country"
              :options="countries"
              option-label="label"
              option-value="value"
              class="absolute left-0 top-[45px] z-10 w-full shadow-md"
              list-style="max-height: 100px"
            />
          </div>
        </div>
      </form>

      <Divider class="!mb-5 !mt-[121px]" />

      <section>
        <h2 class="mb-3 text-xs font-semibold text-slate-600">Versandart</h2>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1.5">
            <RadioButton v-model="shipping" input-id="standard" name="shipping" value="standard" />
            <label for="standard" class="text-xs">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-1.5">
            <RadioButton v-model="shipping" input-id="express" name="shipping" value="express" />
            <label for="express" class="text-xs">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-1.5">
            <RadioButton v-model="shipping" input-id="sameDay" name="shipping" value="sameDay" />
            <label for="sameDay" class="text-xs">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </section>

      <Divider class="!my-5" />

      <footer class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" text size="small" class="!bg-slate-100" />
        <Button label="Speichern" size="small" />
      </footer>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const products = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref(null)

const countries = ref([
  { label: 'Spanien', value: 'Spanien' },
  { label: 'Deutschland', value: 'Deutschland' },
  { label: 'Österreich', value: 'Österreich' },
  { label: 'Schweiz', value: 'Schweiz' }
])
</script>