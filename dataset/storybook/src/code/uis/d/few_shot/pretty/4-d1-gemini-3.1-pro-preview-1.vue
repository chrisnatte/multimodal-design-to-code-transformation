<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-16">
    <!-- Header -->
    <div class="w-[728px] flex items-center gap-4 mb-12 -ml-[188px]">
      <Button
        icon="pi pi-times-circle"
        rounded
        text
        severity="secondary"
        class="!w-12 !h-12 !text-3xl bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-base text-slate-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-[728px] flex flex-col gap-4">
      <!-- Stepper / Progress -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-blue-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="mt-4">
        <Column field="name" header="Produkt" />
        <Column header="Menge" header-class="w-40">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              show-buttons
              button-layout="stacked"
              class="w-24"
              :min="1"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" header-class="w-24">
          <template #body="{ data }">
            {{ formatCurrency(data.price) }}
          </template>
        </Column>
        <Column header-class="w-16" body-class="text-center">
          <template #body="{ index }">
            <Button
              icon="pi pi-trash"
              severity="danger"
              text
              rounded
              @click="removeProduct(index)"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-2" />

      <!-- Form Grid -->
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="firstName" class="text-sm text-slate-700">Vorname</label>
          <InputText id="firstName" v-model="form.firstName" placeholder="Max" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastName" class="text-sm text-slate-700">Nachname</label>
          <InputText id="lastName" v-model="form.lastName" placeholder="Mustermann" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="street" class="text-sm text-slate-700">Straße</label>
          <InputText id="street" v-model="form.street" placeholder="Musterstraße 42" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="city" class="text-sm text-slate-700">PLZ / Ort</label>
          <InputText id="city" v-model="form.city" placeholder="10115 Berlin" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country" class="text-sm text-slate-700">Land</label>
          <Select
            id="country"
            v-model="form.country"
            :options="countries"
            placeholder="Deutschland"
            class="w-full"
          />
        </div>
      </div>

      <Divider class="!my-2" />

      <!-- Shipping Method -->
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <RadioButton
              v-model="shippingMethod"
              inputId="shipping-standard"
              value="standard"
            />
            <label for="shipping-standard" class="text-sm text-slate-700">
              Standard (3 - 5 Tage) - kostenlos
            </label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton
              v-model="shippingMethod"
              inputId="shipping-express"
              value="express"
            />
            <label for="shipping-express" class="text-sm text-slate-700">
              Express (1 - 2 Tage) - 4,99 €
            </label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton
              v-model="shippingMethod"
              inputId="shipping-sameday"
              value="sameday"
            />
            <label for="shipping-sameday" class="text-sm text-slate-700">
              Same Day (Gleicher Tag) - 9,99 €
            </label>
          </div>
        </div>
      </div>

      <Divider class="!my-2" />

      <!-- Footer Actions -->
      <div class="flex justify-between items-center mt-2">
        <Button label="Abbrechen" severity="secondary" class="bg-slate-100 text-slate-700 border-none" />
        <Button label="Speichern" severity="primary" class="bg-emerald-500 border-none hover:bg-emerald-600" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import RadioButton from 'primevue/radiobutton'

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 }
])

const form = ref({
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstraße 42',
  city: '10115 Berlin',
  country: 'Deutschland'
})

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

const shippingMethod = ref('standard')

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value)
}

const removeProduct = (index: number) => {
  products.value.splice(index, 1)
}
</script>