<template>
  <div class="mx-auto flex max-w-4xl flex-col gap-6 p-8">
    <div class="flex items-center gap-4">
      <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-shopping-cart text-2xl" />
      </div>
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
        <span class="text-base text-slate-600">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </span>
      </div>
    </div>

    <Steps :model="steps" :active-step="activeStep" />

    <div class="flex flex-col gap-4">
      <DataTable :value="cartItems">
        <Column field="name" header="Produkt" />
        <Column header="Menge">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" show-buttons button-layout="horizontal" input-class="w-16" :min="1">
              <template #incrementicon>
                <i class="pi pi-plus" />
              </template>
              <template #decrementicon>
                <i class="pi pi-minus" />
              </template>
            </InputNumber>
          </template>
        </Column>
        <Column field="price" header="Preis" />
        <Column header="">
          <template #body>
            <Button icon="pi pi-trash" severity="danger" text rounded />
          </template>
        </Column>
      </DataTable>
    </div>

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
      <div class="col-span-2 flex flex-col gap-2">
        <label for="street-input">Straße</label>
        <InputText v-model="street" input-id="street-input" class="w-full" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="zip-city-input">PLZ / Ort</label>
        <InputText v-model="zipCity" input-id="zip-city-input" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country-select">Land</label>
        <Select
          v-model="country"
          input-id="country-select"
          :options="countryOptions"
          option-label="label"
          option-value="value"
        />
      </div>
    </div>

    <Divider />

    <div class="flex flex-col gap-4">
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

  const activeStep = ref(1)
  const steps = [{ label: 'Warenkorb' }, { label: 'Adresse' }, { label: 'Bestätigung' }]

  const cartItems = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zipCity = ref('10115 Berlin')

  const countryOptions = [
    { label: 'Spanien', value: 'ES' },
    { label: 'Deutschland', value: 'DE' },
    { label: 'Österreich', value: 'AT' },
    { label: 'Schweiz', value: 'CH' },
  ]
  const country = ref('DE')

  const shippingOptions = [
    { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
    { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
    { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
  ]
  const shippingMethod = ref('standard')
</script>