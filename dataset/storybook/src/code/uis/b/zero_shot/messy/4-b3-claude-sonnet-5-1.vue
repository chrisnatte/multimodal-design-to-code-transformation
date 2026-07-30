<template>
  <div class="p-8 bg-white min-h-screen">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <div class="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-100">
        <i class="pi pi-shopping-cart text-xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold m-0">Bestellung aufgeben</h1>
        <p class="text-base text-gray-500 m-0">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex flex-col gap-6 max-w-[728px]">
      <!-- Steps -->
      <div class="flex flex-col gap-3">
        <div class="flex justify-between text-base">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <Steps :model="steps" :activeStep="activeStep" />
      </div>

      <!-- Product Table -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt"></Column>
        <Column header="Menge">
          <template #body="slotProps">
            <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="horizontal" :min="1" inputStyle="width: 3rem" />
          </template>
        </Column>
        <Column header="Preis">
          <template #body="slotProps">
            {{ slotProps.data.price }}
          </template>
        </Column>
        <Column header="">
          <template #body="slotProps">
            <Button icon="pi pi-trash" text severity="danger" @click="removeProduct(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label for="firstname">Vorname</label>
          <InputText id="firstname" v-model="firstname" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname">Nachname</label>
          <InputText id="lastname" v-model="lastname" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zipcity">PLZ / Ort</label>
          <InputText id="zipcity" v-model="zipCity" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Dropdown
            id="country"
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            class="w-full"
            placeholder="Land auswählen"
          />
        </div>
      </div>

      <Divider />

      <!-- Shipping Method -->
      <div class="flex flex-col gap-3">
        <span class="font-semibold text-sm">Versandart</span>
        <div class="flex flex-col gap-3">
          <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
            <RadioButton v-model="selectedShipping" :inputId="option.value" :value="option.value" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <Divider />

      <!-- Actions -->
      <div class="flex justify-between">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Steps from 'primevue/steps'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'
import Button from 'primevue/button'

const activeStep = ref(0)

const steps = ref([
  { label: 'Warenkorb' },
  { label: 'Adresse' },
  { label: 'Bestätigung' }
])

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

function removeProduct(product) {
  products.value = products.value.filter(p => p !== product)
}

const firstname = ref('Max')
const lastname = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')

const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
])
const selectedCountry = ref(countries.value[1])

const shippingOptions = ref([
  { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
  { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
  { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' }
])
const selectedShipping = ref('standard')
</script>