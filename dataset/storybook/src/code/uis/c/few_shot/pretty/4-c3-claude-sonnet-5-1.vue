<template>
  <div class="mx-auto flex max-w-4xl flex-col gap-6 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded text class="!bg-slate-100" />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <div class="flex justify-between text-sm">
        <span class="font-medium text-emerald-600">Warenkorb</span>
        <span class="font-medium text-sky-500">Adresse</span>
        <span class="text-slate-400">Bestätigung</span>
      </div>
      <ProgressBar :value="33" :show-value="false" class="!h-1" />
    </div>

    <DataTable :value="cartItems">
      <Column field="product" header="Produkt" />
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <InputNumber v-model="data.quantity" show-buttons button-layout="stacked" input-class="w-14" class="w-20" />
        </template>
      </Column>
      <Column field="price" header="Preis" />
      <Column header="">
        <template #body>
          <Button icon="pi pi-trash" severity="danger" text />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col gap-2">
        <label for="firstname">Vorname</label>
        <InputText id="firstname" v-model="firstname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastname">Nachname</label>
        <InputText id="lastname" v-model="lastname" />
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="street">Straße</label>
        <InputText id="street" v-model="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="zip">PLZ / Ort</label>
        <InputText id="zip" v-model="zip" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country">Land</label>
        <Select id="country" v-model="country" :options="countries" option-label="name" option-value="code" />
      </div>
    </div>

    <Divider />

    <div class="flex flex-col gap-3">
      <span class="font-semibold text-slate-700">Versandart</span>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="standard" name="shipping" value="standard" />
        <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="express" name="shipping" value="express" />
        <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="sameday" name="shipping" value="sameday" />
        <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
      </div>
    </div>

    <Divider />

    <div class="flex justify-between">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="primary" />
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
    { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zip = ref('10115 Berlin')
  const country = ref('DE')
  const countries = ref([
    { name: 'Spanien', code: 'ES' },
    { name: 'Deutschland', code: 'DE' },
    { name: 'Österreich', code: 'AT' },
    { name: 'Schweiz', code: 'CH' },
  ])

  const shipping = ref('standard')
</script>