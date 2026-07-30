<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded text />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold">Bestellung aufgeben</h1>
        <p class="text-gray-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <Steps :model="steps" :active-step="1" />

    <DataTable :value="cartItems">
      <Column field="product" header="Produkt" />
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <InputNumber v-model="data.quantity" show-buttons button-layout="stacked" input-class="w-16" />
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
        <Dropdown id="country" v-model="country" :options="countries" />
      </div>
    </div>

    <div class="flex flex-col gap-3">
      <h2 class="font-semibold">Versandart</h2>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="standard" value="standard" />
        <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="express" value="express" />
        <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shipping" input-id="sameday" value="sameday" />
        <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
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
  import Dropdown from 'primevue/dropdown'
  import RadioButton from 'primevue/radiobutton'

  const steps = [
    { label: 'Warenkorb' },
    { label: 'Adresse' },
    { label: 'Bestätigung' },
  ]

  const cartItems = ref([
    { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zip = ref('10115 Berlin')
  const country = ref('Deutschland')
  const countries = ['Spanien', 'Deutschland', 'Österreich', 'Schweiz']

  const shipping = ref('standard')
</script>