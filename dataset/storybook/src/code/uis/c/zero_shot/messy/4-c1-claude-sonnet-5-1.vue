<template>
  <div class="max-w-4xl mx-auto p-8">
    <div class="flex items-start gap-4 mb-6">
      <Button icon="pi pi-times" rounded outlined severity="secondary" class="!w-12 !h-12" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="mb-6">
      <div class="flex justify-between mb-2">
        <span class="text-emerald-500 font-medium">Warenkorb</span>
        <span class="text-sky-500 font-medium">Adresse</span>
        <span class="text-slate-400 font-medium">Bestätigung</span>
      </div>
      <div class="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
        <div class="h-full bg-emerald-500" style="width: 50%"></div>
      </div>
    </div>

    <!-- Cart Table -->
    <DataTable :value="cartItems" class="mb-6">
      <Column field="product" header="Produkt"></Column>
      <Column header="Menge" style="width: 140px">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.qty" showButtons buttonLayout="stacked" :min="1" inputClass="w-16" />
        </template>
      </Column>
      <Column field="price" header="Preis" style="width: 120px"></Column>
      <Column style="width: 60px">
        <template #body>
          <Button icon="pi pi-trash" text severity="danger" />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-slate-700">Vorname</label>
        <InputText v-model="firstName" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-slate-700">Nachname</label>
        <InputText v-model="lastName" />
      </div>
      <div class="flex flex-col gap-2 col-span-2">
        <label class="text-slate-700">Straße</label>
        <InputText v-model="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-slate-700">PLZ / Ort</label>
        <InputText v-model="zipCity" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-slate-700">Land</label>
        <Dropdown v-model="country" :options="countries" optionLabel="name" placeholder="Land wählen" />
      </div>
    </div>

    <Divider />

    <!-- Shipping method -->
    <div class="mb-6">
      <h3 class="font-semibold text-slate-800 mb-3">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="standard" value="standard" />
          <label for="standard" class="text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="express" value="express" />
          <label for="express" class="text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="sameday" value="sameday" />
          <label for="sameday" class="text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider />

    <!-- Actions -->
    <div class="flex justify-between mt-6">
      <Button label="Abbrechen" outlined severity="secondary" />
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
  { product: 'Wireless Kopfhörer', qty: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', qty: 1, price: '14,97 €' }
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')

const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
])
const country = ref({ name: 'Deutschland' })

const shippingMethod = ref('standard')
</script>