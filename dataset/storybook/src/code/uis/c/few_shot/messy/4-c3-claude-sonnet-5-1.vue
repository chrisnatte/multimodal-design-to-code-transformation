<template>
  <div class="mx-auto max-w-5xl p-8">
    <div class="mb-6 flex items-start gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded text class="!h-10 !w-10" />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">Bestellung aufgeben</h1>
        <p class="text-gray-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <Steps :model="steps" :active-step="1" class="mb-6" />

    <DataTable :value="products" class="mb-6">
      <Column field="name" header="Produkt" />
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <InputNumber v-model="data.quantity" show-buttons button-layout="vertical" input-class="w-16" class="w-24" />
        </template>
      </Column>
      <Column field="price" header="Preis">
        <template #body="{ data }">
          {{ data.price }}
        </template>
      </Column>
      <Column header="">
        <template #body>
          <Button icon="pi pi-trash" severity="danger" text />
        </template>
      </Column>
    </DataTable>

    <div class="mb-6 grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <label for="vorname">Vorname</label>
        <InputText id="vorname" v-model="vorname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="nachname">Nachname</label>
        <InputText id="nachname" v-model="nachname" />
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="strasse">Straße</label>
        <InputText id="strasse" v-model="strasse" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="plz-ort">PLZ / Ort</label>
        <InputText id="plz-ort" v-model="plzOrt" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="land">Land</label>
        <Select id="land" v-model="land" :options="laender" />
      </div>
    </div>

    <div class="mb-6">
      <h2 class="mb-3 font-semibold">Versandart</h2>
      <div class="flex flex-col gap-3">
        <div v-for="option in versandOptionen" :key="option.value" class="flex items-center gap-2">
          <RadioButton v-model="versandart" :input-id="option.value" :value="option.value" name="versandart" />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </div>
    </div>

    <div class="flex justify-between border-t pt-6">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="success" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Steps from 'primevue/steps'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import InputNumber from 'primevue/inputnumber'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'

  const steps = ref([
    { label: 'Warenkorb' },
    { label: 'Adresse' },
    { label: 'Bestätigung' },
  ])

  const products = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const vorname = ref('Max')
  const nachname = ref('Mustermann')
  const strasse = ref('Musterstraße 42')
  const plzOrt = ref('10115 Berlin')
  const land = ref('Deutschland')
  const laender = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

  const versandart = ref('standard')
  const versandOptionen = [
    { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
    { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
    { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
  ]
</script>