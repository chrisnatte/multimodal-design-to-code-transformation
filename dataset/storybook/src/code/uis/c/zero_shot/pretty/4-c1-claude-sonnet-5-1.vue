<template>
  <div class="max-w-4xl mx-auto p-8">
    <div class="flex items-start gap-4 mb-6">
      <Button icon="pi pi-times" rounded text severity="secondary" class="bg-gray-100" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800">Bestellung aufgeben</h1>
        <p class="text-gray-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <Steps :model="steps" :activeStep="1" class="mb-6" />

    <table class="w-full mb-6">
      <thead>
        <tr class="text-left border-b border-gray-200">
          <th class="py-3 font-semibold text-gray-700">Produkt</th>
          <th class="py-3 font-semibold text-gray-700">Menge</th>
          <th class="py-3 font-semibold text-gray-700">Preis</th>
          <th class="py-3"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in cartItems" :key="idx" class="border-b border-gray-100">
          <td class="py-4 text-gray-700">{{ item.name }}</td>
          <td class="py-4">
            <InputNumber v-model="item.quantity" showButtons buttonLayout="vertical" class="w-20" inputClass="w-12" />
          </td>
          <td class="py-4 text-gray-700">{{ item.price }}</td>
          <td class="py-4">
            <Button icon="pi pi-trash" text severity="danger" />
          </td>
        </tr>
      </tbody>
    </table>

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

    <hr class="border-gray-200 mb-6" />

    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="standard" value="standard" />
          <label for="standard" class="text-gray-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="express" value="express" />
          <label for="express" class="text-gray-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="sameday" value="sameday" />
          <label for="sameday" class="text-gray-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <hr class="border-gray-200 mb-6" />

    <div class="flex justify-between">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Speichern" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Steps from 'primevue/steps'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'

const steps = ref([
  { label: 'Warenkorb' },
  { label: 'Adresse' },
  { label: 'Bestätigung' }
])

const cartItems = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
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

const shipping = ref('standard')
</script>