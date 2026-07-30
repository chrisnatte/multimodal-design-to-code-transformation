<template>
  <div class="p-8 max-w-5xl mx-auto">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <button
        class="w-[50px] h-[50px] rounded-full bg-slate-100 flex items-center justify-center border border-slate-100"
      >
        <i class="pi pi-times-circle text-2xl text-slate-600"></i>
      </button>
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-800 m-0">Bestellung aufgeben</h1>
        <p class="text-base text-slate-500 m-0">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </div>

    <div class="flex flex-col items-center gap-4">
      <!-- Steps -->
      <div class="w-full flex flex-col gap-2">
        <div class="flex justify-between w-full">
          <span class="text-emerald-500 text-base">Warenkorb</span>
          <span class="text-sky-500 text-base">Adresse</span>
          <span class="text-slate-400 text-base">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" class="h-1.5 w-full" />
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt"></Column>
        <Column field="quantity" header="Menge">
          <template #body="slotProps">
            <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="stacked" inputClass="w-16" />
          </template>
        </Column>
        <Column field="price" header="Preis"></Column>
        <Column header="">
          <template #body="slotProps">
            <Button icon="pi pi-trash" severity="danger" text @click="removeProduct(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Divider class="w-full" />

      <!-- Address Form -->
      <div class="w-full grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="vorname" class="text-sm text-slate-700">Vorname</label>
          <InputText id="vorname" v-model="vorname" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname" class="text-sm text-slate-700">Nachname</label>
          <InputText id="nachname" v-model="nachname" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="strasse" class="text-sm text-slate-700">Straße</label>
          <InputText id="strasse" v-model="strasse" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plzort" class="text-sm text-slate-700">PLZ / Ort</label>
          <InputText id="plzort" v-model="plzOrt" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land" class="text-sm text-slate-700">Land</label>
          <Select id="land" v-model="land" :options="countries" optionLabel="name" optionValue="code" class="w-full" />
        </div>
      </div>

      <Divider class="w-full" />

      <!-- Shipping options -->
      <div class="w-full flex flex-col gap-4">
        <span class="font-semibold text-sm text-slate-800">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="standard" name="shipping" value="standard" />
          <label for="standard" class="text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="express" name="shipping" value="express" />
          <label for="express" class="text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="sameday" name="shipping" value="sameday" />
          <label for="sameday" class="text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider class="w-full" />

      <!-- Action buttons -->
      <div class="w-full flex justify-between items-center">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Divider from 'primevue/divider'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const removeProduct = (product) => {
  products.value = products.value.filter((p) => p !== product)
}

const vorname = ref('Max')
const nachname = ref('Mustermann')
const strasse = ref('Musterstraße 42')
const plzOrt = ref('10115 Berlin')
const land = ref('DE')

const countries = ref([
  { name: 'Spanien', code: 'ES' },
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
])

const shipping = ref('standard')
</script>