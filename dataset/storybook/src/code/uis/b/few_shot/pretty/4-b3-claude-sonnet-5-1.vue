<template>
  <div class="mx-auto flex max-w-3xl flex-col gap-4 bg-white p-8">
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times-circle" severity="secondary" rounded text class="!h-12 !w-12" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
        <p class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="mx-auto flex w-full max-w-2xl flex-col items-center gap-4">
      <div class="flex w-full flex-col gap-2">
        <div class="flex w-full items-center justify-between">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5 w-full" />
      </div>

      <DataTable :value="cartItems" class="w-full">
        <Column field="name" header="Produkt" />
        <Column header="Menge">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" showButtons buttonLayout="stacked" input-class="w-16" />
          </template>
        </Column>
        <Column field="price" header="Preis">
          <template #body="{ data }">{{ data.price }}</template>
        </Column>
        <Column header="">
          <template #body="{ data }">
            <Button icon="pi pi-trash" severity="danger" text @click="removeItem(data)" />
          </template>
        </Column>
      </DataTable>

      <Divider class="!m-0" />

      <div class="grid w-full grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="firstname-input" class="text-sm">Vorname</label>
          <InputText v-model="firstname" input-id="firstname-input" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname-input" class="text-sm">Nachname</label>
          <InputText v-model="lastname" input-id="lastname-input" placeholder="Name eingeben" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="street-input" class="text-sm">Straße</label>
          <InputText v-model="street" input-id="street-input" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zip-input" class="text-sm">PLZ / Ort</label>
          <InputText v-model="zip" input-id="zip-input" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country-select" class="text-sm">Land</label>
          <Select v-model="country" :options="countries" input-id="country-select" placeholder="Deutschland" />
        </div>
      </div>

      <Divider class="!m-0" />

      <div class="flex w-full flex-col gap-4">
        <span class="text-sm font-semibold">Versandart</span>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" input-id="shipping-standard" value="standard" />
            <label for="shipping-standard">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" input-id="shipping-express" value="express" />
            <label for="shipping-express">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" input-id="shipping-sameday" value="sameday" />
            <label for="shipping-sameday">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="!m-0" />

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
  const countries = ref(['Deutschland', 'Spanien', 'Österreich', 'Schweiz'])

  const shippingMethod = ref('standard')
</script>