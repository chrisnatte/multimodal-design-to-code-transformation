<template>
  <div class="max-w-4xl mx-auto p-8">
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" class="w-10 h-10" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Bestellung aufgeben</h1>
        <p class="text-gray-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="mb-6">
      <div class="flex justify-between mb-2">
        <span class="text-green-500 font-medium">Warenkorb</span>
        <span class="text-blue-400 font-medium">Adresse</span>
        <span class="text-gray-400 font-medium">Bestätigung</span>
      </div>
      <div class="flex gap-1">
        <div class="h-1 bg-green-500 flex-1 rounded"></div>
        <div class="h-1 bg-gray-200 flex-1 rounded"></div>
      </div>
    </div>

    <!-- Cart Table -->
    <DataTable :value="cartItems" class="mb-6">
      <Column field="product" header="Produkt"></Column>
      <Column header="Menge">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="stacked" class="w-24" inputClass="w-14" />
        </template>
      </Column>
      <Column header="Preis">
        <template #body="slotProps">
          <span>{{ slotProps.data.price }}</span>
        </template>
      </Column>
      <Column>
        <template #body>
          <Button icon="pi pi-trash" text severity="danger" />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label for="vorname">Vorname</label>
        <InputText id="vorname" v-model="vorname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="nachname">Nachname</label>
        <InputText id="nachname" v-model="nachname" />
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="strasse">Straße</label>
        <InputText id="strasse" v-model="strasse" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="plz">PLZ / Ort</label>
        <InputText id="plz" v-model="plzOrt" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="land">Land</label>
        <Dropdown id="land" v-model="land" :options="laender" placeholder="Land" class="w-full" />
      </div>
    </div>

    <Divider />

    <!-- Versandart -->
    <div class="mb-6">
      <h3 class="font-bold text-gray-800 mb-3">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" inputId="standard" value="standard" />
          <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" inputId="express" value="express" />
          <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" inputId="sameday" value="sameday" />
          <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider />

    <div class="flex justify-between">
      <Button label="Abbrechen" severity="secondary" outlined />
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
const land = ref('Deutschland')
const laender = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

const versandart = ref('standard')
</script>