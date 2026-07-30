<template>
  <div class="mx-auto flex max-w-3xl flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <div
        class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100"
      >
        <i class="pi pi-shopping-cart text-xl" />
      </div>
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
        <span class="text-base text-gray-600">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </span>
      </div>
    </div>

    <div class="flex flex-col gap-8">
      <Steps :model="steps" :active-step="0" />

      <div class="flex flex-col gap-4">
        <DataTable :value="cartItems">
          <Column field="name" header="Produkt" />
          <Column header="Menge">
            <template #body="{ data }">
              <InputNumber v-model="data.quantity" show-buttons button-layout="horizontal" :min="1" class="w-32">
                <template #incrementbuttonicon>
                  <i class="pi pi-plus" />
                </template>
                <template #decrementbuttonicon>
                  <i class="pi pi-minus" />
                </template>
              </InputNumber>
            </template>
          </Column>
          <Column field="price" header="Preis" />
          <Column header="">
            <template #body>
              <Button icon="pi pi-trash" severity="secondary" text rounded />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider />

      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label for="firstname-input">Vorname</label>
          <InputText id="firstname-input" v-model="firstName" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname-input">Nachname</label>
          <InputText id="lastname-input" v-model="lastName" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="street-input">Straße</label>
          <InputText id="street-input" v-model="street" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zip-input">PLZ / Ort</label>
          <InputText id="zip-input" v-model="zipCity" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country-input">Land</label>
          <Select
            id="country-input"
            v-model="country"
            :options="countries"
            option-label="label"
            option-value="value"
          />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col gap-3">
        <span class="font-semibold">Versandart</span>
        <div class="flex flex-col gap-3">
          <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" :input-id="option.value" :value="option.value" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <Divider />

      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Steps from 'primevue/steps'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'
  import Divider from 'primevue/divider'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'

  const steps = ref([{ label: 'Warenkorb' }, { label: 'Adresse' }, { label: 'Bestätigung' }])

  const cartItems = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstName = ref('Max')
  const lastName = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zipCity = ref('10115 Berlin')
  const country = ref('DE')

  const countries = ref([
    { label: 'Deutschland', value: 'DE' },
    { label: 'Spanien', value: 'ES' },
    { label: 'Österreich', value: 'AT' },
    { label: 'Schweiz', value: 'CH' },
  ])

  const shippingMethod = ref('standard')
  const shippingOptions = ref([
    { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
    { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
    { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
  ])
</script>