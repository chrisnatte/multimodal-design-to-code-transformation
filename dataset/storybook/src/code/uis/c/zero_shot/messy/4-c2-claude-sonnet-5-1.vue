<template>
  <div class="max-w-5xl mx-auto p-8">
    <div class="flex items-start gap-4 mb-6">
      <Button icon="pi pi-times" rounded text severity="secondary" class="bg-gray-100" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Bestellung aufgeben</h1>
        <p class="text-gray-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="mb-6">
      <div class="flex justify-between mb-2">
        <span class="text-green-600 font-medium">Warenkorb</span>
        <span class="text-blue-500 font-medium">Adresse</span>
        <span class="text-gray-400">Bestätigung</span>
      </div>
      <div class="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
        <div class="h-1 bg-green-500" style="width: 33%"></div>
      </div>
    </div>

    <!-- Cart Table -->
    <table class="w-full mb-6">
      <thead>
        <tr class="text-left text-gray-700 border-b">
          <th class="py-2 font-semibold">Produkt</th>
          <th class="py-2 font-semibold">Menge</th>
          <th class="py-2 font-semibold">Preis</th>
          <th class="py-2"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in cartItems" :key="index" class="border-b">
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3">
            <InputNumber v-model="item.qty" showButtons buttonLayout="vertical" inputClass="w-16" class="w-24" />
          </td>
          <td class="py-3">{{ item.price }}</td>
          <td class="py-3">
            <Button icon="pi pi-trash" text severity="danger" @click="removeItem(index)" />
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">Vorname</label>
        <InputText v-model="firstName" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">Nachname</label>
        <InputText v-model="lastName" />
      </div>
      <div class="flex flex-col gap-2 col-span-2">
        <label class="text-gray-700">Straße</label>
        <InputText v-model="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">PLZ / Ort</label>
        <InputText v-model="zipCity" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">Land</label>
        <Dropdown v-model="country" :options="countries" optionLabel="name" placeholder="Land wählen" />
      </div>
    </div>

    <!-- Shipping Options -->
    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2" v-for="option in shippingOptions" :key="option.value">
          <RadioButton v-model="shippingMethod" :inputId="option.value" :value="option.value" />
          <label :for="option.value" class="text-gray-700">{{ option.label }}</label>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex justify-between pt-4 border-t">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Speichern" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'

const cartItems = ref([
  { name: 'Wireless Kopfhörer', qty: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', qty: 1, price: '14,97 €' },
])

const removeItem = (index) => {
  cartItems.value.splice(index, 1)
}

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')

const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' },
])
const country = ref(countries.value[1])

const shippingOptions = ref([
  { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
  { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
  { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
])
const shippingMethod = ref('standard')
</script>