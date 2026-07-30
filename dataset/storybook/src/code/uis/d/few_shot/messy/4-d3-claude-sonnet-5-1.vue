<template>
  <div class="mx-auto max-w-3xl p-8">
    <div class="mb-6 flex items-start gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" rounded text class="!h-[50px] !w-[50px] bg-slate-100" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="mt-1 text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="mb-6 flex flex-col gap-2">
      <div class="flex justify-between text-sm">
        <span class="text-green-500">Warenkorb</span>
        <span class="text-blue-500">Adresse</span>
        <span class="text-slate-500">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
    </div>

    <DataTable :value="cartItems" class="mb-6">
      <Column field="name" header="Produkt" />
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <InputNumber v-model="data.quantity" show-buttons button-layout="vertical" input-class="w-16" class="w-24" />
        </template>
      </Column>
      <Column field="price" header="Preis" />
      <Column>
        <template #body>
          <Button icon="pi pi-trash" severity="danger" text />
        </template>
      </Column>
    </DataTable>

    <div class="mb-6 grid grid-cols-2 gap-4">
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
        <label for="postal">PLZ / Ort</label>
        <InputText id="postal" v-model="postal" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country">Land</label>
        <Dropdown id="country" v-model="country" :options="countries" option-label="name" class="w-full" />
      </div>
    </div>

    <div class="mb-6 flex flex-col gap-3 border-t border-slate-200 pt-6">
      <span class="font-semibold text-slate-800">Versandart</span>
      <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
        <RadioButton v-model="shipping" :input-id="option.value" :value="option.value" />
        <label :for="option.value">{{ option.label }}</label>
      </div>
    </div>

    <div class="flex justify-between border-t border-slate-200 pt-6">
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
  import Dropdown from 'primevue/dropdown'
  import RadioButton from 'primevue/radiobutton'

  const cartItems = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const postal = ref('10115 Berlin')

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