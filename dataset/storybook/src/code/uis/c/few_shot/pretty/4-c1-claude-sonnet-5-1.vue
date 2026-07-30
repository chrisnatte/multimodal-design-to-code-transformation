<template>
  <div class="flex flex-col gap-6 p-8">
    <div class="flex items-start gap-4">
      <Button icon="pi pi-times" severity="secondary" rounded text class="!bg-gray-100" />
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

    <div class="grid grid-cols-2 gap-4 border-t border-gray-200 pt-6">
      <div class="flex flex-col gap-2">
        <label for="vorname">Vorname</label>
        <InputText id="vorname" v-model="firstName" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="nachname">Nachname</label>
        <InputText id="nachname" v-model="lastName" />
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="strasse">Straße</label>
        <InputText id="strasse" v-model="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="plz">PLZ / Ort</label>
        <InputText id="plz" v-model="zipCity" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="land">Land</label>
        <Dropdown id="land" v-model="country" :options="countries" class="w-full" />
      </div>
    </div>

    <div class="flex flex-col gap-3 border-t border-gray-200 pt-6">
      <span class="font-semibold">Versandart</span>
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

    <div class="flex justify-between border-t border-gray-200 pt-6">
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

  const steps = [{ label: 'Warenkorb' }, { label: 'Adresse' }, { label: 'Bestätigung' }]

  const cartItems = ref([
    { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstName = ref('Max')
  const lastName = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zipCity = ref('10115 Berlin')
  const country = ref('Deutschland')
  const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

  const shipping = ref('standard')
</script>