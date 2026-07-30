<template>
  <div class="mx-auto max-w-4xl p-8">
    <div class="mb-6 flex items-center gap-4">
      <Button icon="pi pi-times" rounded text severity="secondary" class="!h-[50px] !w-[50px] !bg-slate-100" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-base text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="mb-4 flex justify-between text-base">
      <span class="text-emerald-500">Warenkorb</span>
      <span class="text-sky-500">Adresse</span>
      <span class="text-slate-500">Bestätigung</span>
    </div>
    <ProgressBar :value="50" :show-value="false" class="!h-1.5 mb-8" />

    <DataTable :value="products" class="mb-6">
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
        <InputText v-model="firstname" input-id="firstname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastname">Nachname</label>
        <InputText v-model="lastname" input-id="lastname" />
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="street">Straße</label>
        <InputText v-model="street" input-id="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="zipcity">PLZ / Ort</label>
        <InputText v-model="zipCity" input-id="zipcity" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country">Land</label>
        <Dropdown
          v-model="country"
          :options="countries"
          option-label="name"
          option-value="code"
          input-id="country"
        />
      </div>
    </div>

    <div class="mb-6 border-t border-slate-200 pt-6">
      <h3 class="mb-3 font-semibold text-slate-800">Versandart</h3>
      <div class="flex flex-col gap-3">
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

  const products = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zipCity = ref('10115 Berlin')
  const country = ref('DE')
  const countries = ref([
    { name: 'Spanien', code: 'ES' },
    { name: 'Deutschland', code: 'DE' },
    { name: 'Österreich', code: 'AT' },
    { name: 'Schweiz', code: 'CH' },
  ])

  const shipping = ref('standard')
</script>