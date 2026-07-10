<template>
  <div class="mx-auto max-w-4xl p-8">
    <div class="mb-8 flex items-center gap-4">
      <Button icon="pi pi-times-circle" rounded severity="secondary" size="large" />

      <div>
        <h1 class="text-surface-900 text-3xl font-bold">Bestellung aufgeben</h1>
        <p class="text-surface-500 mt-1">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </div>

    <div class="mb-6">
      <div class="mb-2 flex justify-between text-sm font-medium">
        <span class="text-green-500">Warenkorb</span>
        <span class="text-blue-500">Adresse</span>
        <span class="text-surface-400">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :show-value="false" class="!h-1" />
    </div>

    <DataTable :value="cartItems" class="mb-6 px-4">
      <Column field="name" header="Produkt" />
      <Column header="Menge" style="width: 10rem">
        <template #body="{ data }">
          <InputNumber
            v-model="data.quantity"
            :min="1"
            show-buttons
            button-layout="stacked"
            input-class="w-34"
          />
        </template>
      </Column>
      <Column field="price" header="Preis" style="width: 6rem" />
      <Column header="" style="width: 3rem">
        <template #body="{ data }">
          <Button icon="pi pi-trash" text severity="danger" @click="removeItem(data)" />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <div class="mx-4 mb-6 grid grid-cols-2 gap-x-6 gap-y-4">
      <div class="flex flex-col gap-2">
        <label for="first-name" class="text-surface-700 text-sm">Vorname</label>
        <InputText id="first-name" v-model="address.firstName" placeholder="Name eingeben" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="last-name" class="text-surface-700 text-sm">Nachname</label>
        <InputText id="last-name" v-model="address.lastName" placeholder="Name eingeben" />
      </div>

      <div class="col-span-2 flex flex-col gap-2">
        <label for="street" class="text-surface-700 text-sm">Straße</label>
        <InputText id="street" v-model="address.street" placeholder="Name eingeben" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="zip-city" class="text-surface-700 text-sm">PLZ / Ort</label>
        <InputText id="zip-city" v-model="address.zipCity" placeholder="Name eingeben" />
      </div>

      <div class="flex flex-col gap-2">
        <label for="country" class="text-surface-700 text-sm">Land</label>
        <Select id="country" v-model="address.country" :options="countryOptions" />
      </div>
    </div>

    <Divider />

    <div class="mx-4 mb-6">
      <h2 class="text-surface-900 mb-3 font-semibold">Versandart</h2>
      <div class="flex flex-col gap-3">
        <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" :input-id="option.value" :value="option.value" />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </div>
    </div>

    <Divider />

    <div class="flex justify-between">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" />
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

  const cartItems = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  function removeItem(item: { name: string }) {
    cartItems.value = cartItems.value.filter((i) => i !== item)
  }

  const address = ref({
    firstName: 'Max',
    lastName: 'Mustermann',
    street: 'Musterstraße 42',
    zipCity: '10115 Berlin',
    country: 'Deutschland',
  })

  const countryOptions = ['Spanien', 'Deutschland', 'Österreich', 'Schweiz']

  const shippingMethod = ref('standard')
  const shippingOptions = [
    { value: 'standard', label: 'Standard (3 - 5 Tage) - kostenlos' },
    { value: 'express', label: 'Express (1 - 2 Tage) - 4,99 €' },
    { value: 'same-day', label: 'Same Day (Gleicher Tag) - 9,99 €' },
  ]
</script>
