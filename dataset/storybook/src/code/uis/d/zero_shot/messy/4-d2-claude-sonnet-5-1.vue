<template>
  <div class="max-w-4xl mx-auto p-8">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" rounded text severity="secondary" class="!bg-slate-100 !text-slate-600" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="flex justify-between text-base mb-2">
      <span class="text-slate-800">Warenkorb</span>
      <span class="text-teal-500">Adresse</span>
      <span class="text-slate-400">Bestätigung</span>
    </div>
    <div class="flex w-full h-1.5 rounded-full overflow-hidden mb-8">
      <div class="w-1/2 bg-emerald-500"></div>
      <div class="w-1/2 bg-slate-200"></div>
    </div>

    <!-- Cart Table -->
    <table class="w-full mb-6 border-collapse">
      <thead>
        <tr class="border-b border-slate-200">
          <th class="text-left font-semibold text-sm py-2">Produkt</th>
          <th class="text-left font-semibold text-sm py-2">Menge</th>
          <th class="text-left font-semibold text-sm py-2">Preis</th>
          <th class="py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartItems" :key="item.name" class="border-b border-slate-200">
          <td class="py-3 text-sm text-slate-700">{{ item.name }}</td>
          <td class="py-3">
            <InputNumber v-model="item.qty" showButtons buttonLayout="stacked" inputStyle="width: 3rem" :min="1" />
          </td>
          <td class="py-3 text-sm text-slate-700">{{ item.price }}</td>
          <td class="py-3">
            <Button icon="pi pi-trash" text severity="danger" @click="removeItem(item)" />
          </td>
        </tr>
      </tbody>
    </table>

    <hr class="border-slate-200 my-6" />

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label for="vorname" class="text-sm text-slate-700">Vorname</label>
        <InputText id="vorname" v-model="vorname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="nachname" class="text-sm text-slate-700">Nachname</label>
        <InputText id="nachname" v-model="nachname" />
      </div>
      <div class="flex flex-col gap-2 col-span-2">
        <label for="strasse" class="text-sm text-slate-700">Straße</label>
        <InputText id="strasse" v-model="strasse" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="plz" class="text-sm text-slate-700">PLZ / Ort</label>
        <InputText id="plz" v-model="plzOrt" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="land" class="text-sm text-slate-700">Land</label>
        <Select id="land" v-model="land" :options="countries" optionLabel="name" optionValue="name" class="w-full" />
      </div>
    </div>

    <hr class="border-slate-200 my-6" />

    <!-- Versandart -->
    <div class="mb-6">
      <h3 class="font-semibold text-sm text-slate-800 mb-4">Versandart</h3>
      <div class="flex flex-col gap-4">
        <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" :inputId="option.value" :value="option.value" />
          <label :for="option.value" class="text-sm text-slate-700">{{ option.label }}</label>
        </div>
      </div>
    </div>

    <hr class="border-slate-200 my-6" />

    <!-- Footer buttons -->
    <div class="flex justify-between">
      <Button label="Abbrechen" severity="secondary" class="!bg-slate-100 !text-slate-700 !border-slate-100" />
      <Button label="Speichern" class="!bg-emerald-500 !border-emerald-500" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import RadioButton from 'primevue/radiobutton'

const cartItems = ref([
  { name: 'Wireless Kopfhörer', qty: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', qty: 1, price: '14,97 €' }
])

const removeItem = (item) => {
  cartItems.value = cartItems.value.filter((i) => i !== item)
}

const vorname = ref('Max')
const nachname = ref('Mustermann')
const strasse = ref('Musterstraße 42')
const plzOrt = ref('10115 Berlin')
const land = ref('Deutschland')

const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
])

const shippingMethod = ref('standard')
const shippingOptions = ref([
  { value: 'standard', label: 'Standard (3 - 5 Tage) - kostenlos' },
  { value: 'express', label: 'Express (1 - 2 Tage) - 4,99 €' },
  { value: 'sameday', label: 'Same Day (Gleicher Tag) - 9,99 €' }
])
</script>