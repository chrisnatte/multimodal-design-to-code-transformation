<template>
  <main class="mx-auto w-full max-w-xl px-6 py-6 text-sm">
    <header class="mb-7 flex items-start gap-3">
      <Button
        icon="pi pi-times"
        severity="secondary"
        text
        rounded
        aria-label="Schließen"
        class="!h-9 !w-9 !border !border-slate-200 !bg-slate-50 !text-slate-500"
      />
      <div>
        <h1 class="m-0 text-2xl font-semibold text-slate-700">Bestellung aufgeben</h1>
        <p class="mt-0.5 text-sm text-slate-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </header>

    <nav class="mb-4">
      <div class="flex justify-between text-sm">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-sky-500">Adresse</span>
        <span class="text-slate-500">Bestätigung</span>
      </div>
      <div class="mt-1 flex h-1 overflow-hidden rounded-full bg-slate-200">
        <div class="w-1/2 bg-emerald-500"></div>
        <div class="w-1/2 bg-sky-500"></div>
      </div>
    </nav>

    <DataTable :value="cartItems" class="text-sm">
      <Column field="product" header="Produkt" header-class="!font-semibold" />
      <Column header="Menge" header-class="!font-semibold" class="w-28">
        <template #body="{ data }">
          <InputNumber
            v-model="data.quantity"
            :min="1"
            show-buttons
            button-layout="horizontal"
            decrement-button-icon="pi pi-minus"
            increment-button-icon="pi pi-plus"
            input-class="!w-12"
            class="w-24"
          />
        </template>
      </Column>
      <Column field="price" header="Preis" header-class="!font-semibold" class="w-20">
        <template #body="{ data }">{{ data.price }}</template>
      </Column>
      <Column class="w-9">
        <template #body>
          <Button
            icon="pi pi-trash"
            severity="danger"
            text
            rounded
            size="small"
            aria-label="Produkt entfernen"
          />
        </template>
      </Column>
    </DataTable>

    <Divider class="!my-7" />

    <section class="flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="first-name" class="text-sm text-slate-600">Vorname</label>
          <InputText id="first-name" v-model="firstName" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="last-name" class="text-sm text-slate-600">Nachname</label>
          <InputText id="last-name" v-model="lastName" />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <label for="street" class="text-sm text-slate-600">Straße</label>
        <InputText id="street" v-model="street" />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="postal-city" class="text-sm text-slate-600">PLZ / Ort</label>
          <InputText id="postal-city" v-model="postalCity" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="country" class="text-sm text-slate-600">Land</label>
          <Select
            id="country"
            v-model="country"
            :options="countries"
            option-label="label"
            option-value="value"
          />
        </div>
      </div>
    </section>

    <Divider class="!my-7" />

    <section>
      <h2 class="mb-3 text-sm font-semibold text-slate-600">Versandart</h2>
      <div class="flex flex-col gap-3">
        <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" :input-id="option.value" :value="option.value" />
          <label :for="option.value" class="text-sm text-slate-600">{{ option.label }}</label>
        </div>
      </div>
    </section>

    <Divider class="!my-7" />

    <footer class="flex items-center justify-between">
      <Button label="Abbrechen" severity="secondary" size="small" />
      <Button label="Speichern" severity="primary" size="small" />
    </footer>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref('standard')

const countries = ref([
  { label: 'Spanien', value: 'Spanien' },
  { label: 'Deutschland', value: 'Deutschland' },
  { label: 'Österreich', value: 'Österreich' },
  { label: 'Schweiz', value: 'Schweiz' }
])

const shippingOptions = ref([
  { value: 'standard', label: 'Standard (3 - 5 Tage) - kostenlos' },
  { value: 'express', label: 'Express (1 - 2 Tage) - 4,99 €' },
  { value: 'same-day', label: 'Same Day (Gleicher Tag) - 9,99 €' }
])
</script>