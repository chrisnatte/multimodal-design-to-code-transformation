<template>
  <div class="w-full min-h-screen bg-white flex flex-col items-center py-12 px-4">
    <div class="flex items-center gap-4 w-full max-w-3xl mb-8">
      <Button icon="pi pi-times" rounded severity="secondary" text class="!w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
        <p class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex flex-col items-center gap-4 w-full max-w-3xl">
      <div class="w-full flex flex-col gap-2">
        <div class="flex justify-between w-full">
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
            <InputNumber v-model="data.quantity" show-buttons button-layout="stacked" input-class="w-16" />
          </template>
        </Column>
        <Column field="price" header="Preis">
          <template #body="{ data }">
            {{ data.price }}
          </template>
        </Column>
        <Column header="">
          <template #body="{ data }">
            <Button icon="pi pi-trash" severity="danger" text @click="removeItem(data)" />
          </template>
        </Column>
      </DataTable>

      <Divider class="w-full" />

      <div class="grid grid-cols-2 gap-4 w-full px-4">
        <div class="flex flex-col gap-2">
          <label for="firstname">Vorname</label>
          <InputText id="firstname" v-model="firstname" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname">Nachname</label>
          <InputText id="lastname" v-model="lastname" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zip">PLZ / Ort</label>
          <InputText id="zip" v-model="zip" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Select id="country" v-model="country" :options="countries" placeholder="Land wählen" />
        </div>
      </div>

      <Divider class="w-full" />

      <div class="flex flex-col gap-4 w-full px-4">
        <span class="font-semibold text-sm">Versandart</span>
        <div v-for="option in shippingOptions" :key="option.value" class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" :input-id="option.value" :value="option.value" name="shipping" />
          <label :for="option.value">{{ option.label }}</label>
        </div>
      </div>

      <Divider class="w-full" />

      <div class="flex justify-between w-full">
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
  import Divider from 'primevue/divider'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'

  const cartItems = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  function removeItem(item: any) {
    cartItems.value = cartItems.value.filter((i) => i !== item)
  }

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zip = ref('10115 Berlin')
  const country = ref('Deutschland')
  const countries = ref(['Deutschland', 'Österreich', 'Schweiz', 'Spanien'])

  const shippingMethod = ref('standard')
  const shippingOptions = [
    { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
    { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
    { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
  ]
</script>