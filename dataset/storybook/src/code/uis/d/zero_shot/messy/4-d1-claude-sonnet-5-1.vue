<template>
  <div class="max-w-4xl mx-auto py-8 px-4">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" rounded text severity="secondary" class="!bg-slate-100 !w-12 !h-12" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="mb-4">
      <div class="flex justify-between mb-2">
        <span class="text-green-500 font-medium">Warenkorb</span>
        <span class="text-blue-400 font-medium">Adresse</span>
        <span class="text-slate-400">Bestätigung</span>
      </div>
      <div class="flex h-1.5 rounded-full overflow-hidden">
        <div class="w-1/2 bg-green-500"></div>
        <div class="w-1/2 bg-slate-200"></div>
      </div>
    </div>

    <!-- Cart Table -->
    <DataTable :value="cartItems" class="mb-6">
      <Column field="product" header="Produkt" />
      <Column header="Menge">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="stacked" inputStyle="width: 3rem" class="max-w-[6rem]" />
        </template>
      </Column>
      <Column field="price" header="Preis" />
      <Column header="">
        <template #body>
          <Button icon="pi pi-trash" text severity="danger" rounded />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <!-- Address Form -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <div class="flex flex-col gap-2">
        <label for="vorname" class="text-slate-700">Vorname</label>
        <InputText id="vorname" v-model="vorname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="nachname" class="text-slate-700">Nachname</label>
        <InputText id="nachname" v-model="nachname" />
      </div>
      <div class="flex flex-col gap-2 md:col-span-2">
        <label for="strasse" class="text-slate-700">Straße</label>
        <InputText id="strasse" v-model="strasse" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="plzort" class="text-slate-700">PLZ / Ort</label>
        <InputText id="plzort" v-model="plzOrt" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="land" class="text-slate-700">Land</label>
        <Dropdown
          id="land"
          v-model="land"
          :options="countries"
          optionLabel="name"
          optionValue="code"
          placeholder="Land wählen"
          class="w-full"
        />
      </div>
    </div>

    <Divider />

    <!-- Shipping Options -->
    <div class="my-6">
      <h3 class="font-semibold text-slate-800 mb-3">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="standard" name="shipping" value="standard" />
          <label for="standard" class="text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="express" name="shipping" value="express" />
          <label for="express" class="text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="sameday" name="shipping" value="sameday" />
          <label for="sameday" class="text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider />

    <!-- Actions -->
    <div class="flex justify-between mt-6">
      <Button label="Abbrechen" severity="secondary" text class="!bg-slate-100" />
      <Button label="Speichern" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

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

const shippingMethod = ref('standard')
</script>