<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded text class="!bg-slate-100" />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">Bestellung aufgeben</h1>
        <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <Steps :model="steps" :active-step="1" />

    <DataTable :value="cartItems">
      <Column field="product" header="Produkt" />
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <InputNumber v-model="data.quantity" show-buttons button-layout="vertical" input-class="w-16" />
        </template>
      </Column>
      <Column field="price" header="Preis">
        <template #body="{ data }">
          {{ data.price }} €
        </template>
      </Column>
      <Column>
        <template #body>
          <Button icon="pi pi-trash" severity="danger" text />
        </template>
      </Column>
    </DataTable>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <label for="vorname">Vorname</label>
        <InputText v-model="vorname" input-id="vorname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="nachname">Nachname</label>
        <InputText v-model="nachname" input-id="nachname" />
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="strasse">Straße</label>
        <InputText v-model="strasse" input-id="strasse" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="plz-ort">PLZ / Ort</label>
        <InputText v-model="plzOrt" input-id="plz-ort" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="land">Land</label>
        <Select v-model="land" :options="laender" input-id="land" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="font-semibold">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" input-id="standard" name="versandart" value="standard" />
          <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" input-id="express" name="versandart" value="express" />
          <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" input-id="sameday" name="versandart" value="sameday" />
          <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <div class="flex justify-between border-t pt-4">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Steps from 'primevue/steps'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import InputNumber from 'primevue/inputnumber'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'

  const steps = [
    { label: 'Warenkorb' },
    { label: 'Adresse' },
    { label: 'Bestätigung' },
  ]

  const cartItems = ref([
    { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99' },
    { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97' },
  ])

  const vorname = ref('Max')
  const nachname = ref('Mustermann')
  const strasse = ref('Musterstraße 42')
  const plzOrt = ref('10115 Berlin')
  const land = ref('Deutschland')
  const laender = ['Spanien', 'Deutschland', 'Österreich', 'Schweiz']

  const versandart = ref('standard')
</script>