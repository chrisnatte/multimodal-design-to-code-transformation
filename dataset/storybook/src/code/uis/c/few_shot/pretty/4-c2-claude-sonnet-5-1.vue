<template>
  <div class="max-w-4xl p-8">
    <div class="flex items-start gap-4 mb-6">
      <Button icon="pi pi-times" rounded severity="secondary" text />
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Bestellung aufgeben</h1>
        <p class="text-gray-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex justify-between mb-2">
      <span class="text-green-600 font-medium">Warenkorb</span>
      <span class="text-blue-500 font-medium">Adresse</span>
      <span class="text-gray-400 font-medium">Bestätigung</span>
    </div>
    <ProgressBar :value="50" :show-value="false" class="!h-1 mb-6" />

    <DataTable :value="cartItems" class="mb-6">
      <Column field="name" header="Produkt" />
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <InputNumber v-model="data.quantity" show-buttons button-layout="stacked" input-class="w-12" class="w-20" />
        </template>
      </Column>
      <Column field="price" header="Preis">
        <template #body="{ data }">
          {{ data.price }}
        </template>
      </Column>
      <Column>
        <template #body>
          <Button icon="pi pi-trash" severity="danger" text />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <div class="grid grid-cols-2 gap-4 mb-4">
      <div class="flex flex-col gap-2">
        <label for="firstname">Vorname</label>
        <InputText id="firstname" v-model="firstname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastname">Nachname</label>
        <InputText id="lastname" v-model="lastname" />
      </div>
    </div>

    <div class="flex flex-col gap-2 mb-4">
      <label for="street">Straße</label>
      <InputText id="street" v-model="street" />
    </div>

    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="flex flex-col gap-2">
        <label for="zip">PLZ / Ort</label>
        <InputText id="zip" v-model="zip" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country">Land</label>
        <Select id="country" v-model="country" :options="countries" option-label="name" />
      </div>
    </div>

    <Divider />

    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">Versandart</h3>
      <div class="flex flex-col gap-3">
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
    </div>

    <Divider />

    <div class="flex justify-between">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="success" />
    </div>
  </div>
</template>

<script setup>
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
  const country = ref({ name: 'Deutschland' })

  const shipping = ref('standard')
</script>