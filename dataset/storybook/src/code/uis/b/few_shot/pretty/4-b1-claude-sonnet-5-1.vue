<template>
  <div class="mx-auto flex w-full max-w-5xl flex-col gap-4 p-8">
    <div class="flex items-center gap-4">
      <Button
        icon="pi pi-times"
        severity="secondary"
        rounded
        outlined
        class="!h-[50px] !w-[50px]"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
        <p class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="mx-auto flex w-full max-w-3xl flex-col items-center gap-4">
      <div class="flex w-full flex-col gap-2">
        <div class="flex w-full items-center justify-between">
          <span class="text-base">Warenkorb</span>
          <span class="text-base">Adresse</span>
          <span class="text-base">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5 w-full" />
      </div>

      <DataTable :value="cartItems" class="w-full">
        <Column field="name" header="Produkt" />
        <Column header="Menge">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" show-buttons button-layout="stacked" input-class="w-24" />
          </template>
        </Column>
        <Column field="price" header="Preis" />
        <Column header="">
          <template #body="{ data }">
            <Button icon="pi pi-trash" severity="danger" text @click="removeItem(data)" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <div class="grid w-full grid-cols-2 gap-4 px-4">
        <div class="flex flex-col gap-2">
          <label for="vorname" class="text-sm">Vorname</label>
          <InputText v-model="firstName" input-id="vorname" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname" class="text-sm">Nachname</label>
          <InputText v-model="lastName" input-id="nachname" placeholder="Name eingeben" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="strasse" class="text-sm">Straße</label>
          <InputText v-model="street" input-id="strasse" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plz" class="text-sm">PLZ / Ort</label>
          <InputText v-model="zipCity" input-id="plz" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land" class="text-sm">Land</label>
          <Select
            v-model="country"
            input-id="land"
            :options="countries"
            option-label="label"
            option-value="value"
            placeholder="Land auswählen"
          />
        </div>
      </div>

      <Divider />

      <div class="flex w-full flex-col gap-4 px-4">
        <span class="text-sm font-semibold">Versandart</span>
        <div class="flex flex-col gap-3">
          <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" :input-id="option.value" :value="option.value" />
            <label :for="option.value" class="text-sm">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <Divider />

      <div class="flex w-full items-center justify-between">
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

  const cartItems = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  function removeItem(item: any) {
    cartItems.value = cartItems.value.filter((i) => i !== item)
  }

  const firstName = ref('Max')
  const lastName = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zipCity = ref('10115 Berlin')
  const country = ref('DE')

  const countries = [
    { label: 'Deutschland', value: 'DE' },
    { label: 'Spanien', value: 'ES' },
    { label: 'Österreich', value: 'AT' },
    { label: 'Schweiz', value: 'CH' },
  ]

  const shippingMethod = ref('standard')

  const shippingOptions = [
    { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
    { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
    { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
  ]
</script>