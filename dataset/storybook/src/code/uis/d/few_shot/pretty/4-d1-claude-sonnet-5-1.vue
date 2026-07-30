<template>
  <div class="w-full max-w-4xl mx-auto p-6">
    <div class="flex items-center gap-4 mb-6">
      <Button icon="pi pi-times" rounded text severity="secondary" class="!bg-slate-100" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-sm">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <DataTable :value="products">
        <Column field="name" header="Produkt" />
        <Column header="Menge">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" showButtons buttonLayout="stacked" input-class="w-16" />
          </template>
        </Column>
        <Column field="price" header="Preis" />
        <Column header="">
          <template #body="{ data }">
            <Button icon="pi pi-trash" severity="danger" text @click="removeProduct(data)" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="firstname-input">Vorname</label>
          <InputText v-model="firstname" input-id="firstname-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname-input">Nachname</label>
          <InputText v-model="lastname" input-id="lastname-input" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="street-input">Straße</label>
          <InputText v-model="street" input-id="street-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zip-input">PLZ / Ort</label>
          <InputText v-model="zip" input-id="zip-input" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country-select">Land</label>
          <Select
            v-model="country"
            input-id="country-select"
            :options="countries"
            option-label="name"
          />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col gap-4">
        <span class="font-semibold text-sm">Versandart</span>
        <div class="flex flex-col gap-3">
          <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
            <RadioButton v-model="shipping" :input-id="option.value" :value="option.value" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <Divider />

      <div class="flex justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
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
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import Divider from 'primevue/divider'
  import RadioButton from 'primevue/radiobutton'

  const products = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  function removeProduct(product: { name: string }) {
    products.value = products.value.filter((p) => p.name !== product.name)
  }

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zip = ref('10115 Berlin')

  const countries = ref([
    { name: 'Spanien' },
    { name: 'Deutschland' },
    { name: 'Österreich' },
    { name: 'Schweiz' },
  ])
  const country = ref(countries.value[1])

  const shippingOptions = [
    { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
    { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
    { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
  ]
  const shipping = ref('standard')
</script>