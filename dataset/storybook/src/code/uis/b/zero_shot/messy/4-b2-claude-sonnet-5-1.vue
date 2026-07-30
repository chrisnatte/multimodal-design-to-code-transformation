<template>
  <div class="p-8 bg-white min-h-screen">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <div class="w-[50px] h-[50px] rounded-full bg-gray-100 flex items-center justify-center">
        <i class="pi pi-shopping-cart text-xl"></i>
      </div>
      <div>
        <h1 class="text-3xl font-bold m-0">Bestellung aufgeben</h1>
        <p class="text-base text-gray-500 m-0">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex flex-col gap-6 max-w-[728px]">
      <!-- Steps -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <div class="flex w-full h-1.5 rounded-md overflow-hidden">
          <div class="w-1/2 h-full bg-emerald-500"></div>
          <div class="w-1/2 h-full bg-gray-200"></div>
        </div>
      </div>

      <!-- Product Table -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt"></Column>
        <Column header="Menge">
          <template #body="slotProps">
            <div class="flex items-center border border-gray-300 rounded-md w-fit">
              <span class="px-3 py-1">{{ slotProps.data.quantity }}</span>
              <div class="flex flex-col border-l border-gray-300">
                <Button
                  icon="pi pi-chevron-up"
                  text
                  size="small"
                  class="!p-1 !h-4"
                  @click="incrementQty(slotProps.data)"
                />
                <Button
                  icon="pi pi-chevron-down"
                  text
                  size="small"
                  class="!p-1 !h-4"
                  @click="decrementQty(slotProps.data)"
                />
              </div>
            </div>
          </template>
        </Column>
        <Column field="price" header="Preis"></Column>
        <Column header="">
          <template #body="slotProps">
            <Button icon="pi pi-trash" text severity="secondary" @click="removeProduct(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="firstName">Vorname</label>
          <InputText id="firstName" v-model="firstName" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastName">Nachname</label>
          <InputText id="lastName" v-model="lastName" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zipCity">PLZ / Ort</label>
          <InputText id="zipCity" v-model="zipCity" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Dropdown
            id="country"
            v-model="country"
            :options="countries"
            optionLabel="label"
            optionValue="value"
            class="w-full"
          />
        </div>
      </div>

      <Divider />

      <!-- Shipping Options -->
      <div class="flex flex-col gap-3">
        <span class="font-semibold text-sm">Versandart</span>
        <div class="flex flex-col gap-3">
          <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
            <RadioButton
              v-model="shippingMethod"
              :inputId="option.value"
              :value="option.value"
              name="shipping"
            />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <Divider />

      <!-- Actions -->
      <div class="flex justify-between">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')
const country = ref('DE')

const countries = ref([
  { label: 'Deutschland', value: 'DE' },
  { label: 'Spanien', value: 'ES' },
  { label: 'Österreich', value: 'AT' },
  { label: 'Schweiz', value: 'CH' }
])

const shippingMethod = ref('standard')
const shippingOptions = ref([
  { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
  { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
  { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' }
])

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const incrementQty = (product) => {
  product.quantity++
}

const decrementQty = (product) => {
  if (product.quantity > 1) {
    product.quantity--
  }
}

const removeProduct = (product) => {
  products.value = products.value.filter(p => p !== product)
}
</script>