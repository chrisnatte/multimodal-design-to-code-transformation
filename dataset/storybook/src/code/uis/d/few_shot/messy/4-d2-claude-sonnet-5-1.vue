<template>
  <div class="w-full max-w-4xl p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-times" rounded severity="secondary" text class="!bg-slate-100" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="mt-8 flex flex-col gap-1">
      <div class="flex justify-between text-sm">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-sky-500">Adresse</span>
        <span class="text-slate-400">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
    </div>

    <DataTable :value="products" class="mt-6">
      <Column field="name" header="Produkt" />
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <InputNumber v-model="data.quantity" show-buttons button-layout="vertical" input-class="w-16" class="w-24" />
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
        <Select id="country" v-model="country" :options="countries" />
      </div>
    </div>

    <Divider />

    <div class="flex flex-col gap-3">
      <span class="font-semibold text-slate-700">Versandart</span>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="shipping-standard" value="standard" />
        <label for="shipping-standard">Standard (3 - 5 Tage) - kostenlos</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="shipping-express" value="express" />
        <label for="shipping-express">Express (1 - 2 Tage) - 4,99 €</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="shipping-sameday" value="sameday" />
        <label for="shipping-sameday">Same Day (Gleicher Tag) - 9,99 €</label>
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
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import Divider from 'primevue/divider'
  import RadioButton from 'primevue/radiobutton'

  const products = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zip = ref('10115 Berlin')
  const country = ref('Deutschland')
  const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
  const shipping = ref('standard')
</script>