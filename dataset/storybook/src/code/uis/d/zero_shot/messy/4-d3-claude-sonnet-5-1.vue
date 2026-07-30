<template>
  <div class="max-w-4xl mx-auto p-8">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" class="!w-12 !h-12" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Bestellung aufgeben</h1>
        <p class="text-gray-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="mb-6">
      <div class="flex justify-between mb-2">
        <span class="text-emerald-500 font-medium">Warenkorb</span>
        <span class="text-blue-400 font-medium">Adresse</span>
        <span class="text-gray-400">Bestätigung</span>
      </div>
      <div class="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
        <div class="h-full bg-emerald-500 rounded-full" style="width: 50%"></div>
      </div>
    </div>

    <!-- Cart Table -->
    <table class="w-full border-collapse mb-8">
      <thead>
        <tr class="border-b border-slate-200">
          <th class="text-left py-3 font-semibold text-gray-700">Produkt</th>
          <th class="text-left py-3 font-semibold text-gray-700">Menge</th>
          <th class="text-left py-3 font-semibold text-gray-700">Preis</th>
          <th class="text-left py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index" class="border-b border-slate-200">
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3">
            <InputNumber v-model="item.quantity" showButtons buttonLayout="stacked" :min="1" inputClass="w-16" class="w-24" />
          </td>
          <td class="py-3">{{ item.price }}</td>
          <td class="py-3">
            <Button icon="pi pi-trash" text severity="danger" @click="removeItem(index)" />
          </td>
        </tr>
      </tbody>
    </table>

    <Divider class="my-2" />

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">Vorname</label>
        <InputText v-model="firstName" class="w-full" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">Nachname</label>
        <InputText v-model="lastName" class="w-full" />
      </div>

      <div class="col-span-2 flex flex-col gap-2">
        <label class="text-sm text-gray-700">Straße</label>
        <InputText v-model="street" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">PLZ / Ort</label>
        <InputText v-model="zipCity" class="w-full" />
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm text-gray-700">Land</label>
        <Select v-model="country" :options="countries" optionLabel="label" optionValue="value" class="w-full" />
      </div>
    </div>

    <Divider class="my-2" />

    <!-- Shipping Options -->
    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" :inputId="option.value" :value="option.value" />
          <label :for="option.value" class="text-gray-700">{{ option.label }}</label>
        </div>
      </div>
    </div>

    <Divider class="my-2" />

    <!-- Footer -->
    <div class="flex justify-between mt-6">
      <Button label="Abbrechen" severity="secondary" text />
      <Button label="Speichern" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const cartItems = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const removeItem = (index) => {
  cartItems.value.splice(index, 1)
}

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')
const country = ref('DE')

const countries = ref([
  { label: 'Spanien', value: 'ES' },
  { label: 'Deutschland', value: 'DE' },
  { label: 'Österreich', value: 'AT' },
  { label: 'Schweiz', value: 'CH' }
])

const shippingMethod = ref('standard')

const shippingOptions = ref([
  { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
  { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
  { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' }
])
</script>