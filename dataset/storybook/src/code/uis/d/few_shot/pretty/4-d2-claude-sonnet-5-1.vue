<template>
  <div class="w-full max-w-4xl mx-auto p-6">
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times" severity="secondary" rounded text class="!bg-slate-100 !w-[50px] !h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
        <p class="text-base text-gray-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base">
          <span class="text-primary">Warenkorb</span>
          <span class="text-primary">Adresse</span>
          <span class="text-gray-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <DataTable :value="products">
        <Column field="name" header="Produkt" />
        <Column header="Menge" style="width: 156px">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" show-buttons button-layout="stacked" input-style="width: 4rem" />
          </template>
        </Column>
        <Column header="Preis" style="width: 92px">
          <template #body="{ data }">
            {{ data.price.toFixed(2).replace('.', ',') }} €
          </template>
        </Column>
        <Column style="width: 64px">
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
        <div class="flex flex-col gap-2 col-span-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zip">PLZ / Ort</label>
          <InputText id="zip" v-model="zip" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Select id="country" v-model="country" :options="countries" placeholder="Land wählen" />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col gap-3">
        <span class="font-semibold text-sm">Versandart</span>
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

      <Divider />

      <div class="flex justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
      </div>
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

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 },
])

const firstname = ref('Max')
const lastname = ref('Mustermann')
const street = ref('Musterstraße 42')
const zip = ref('10115 Berlin')
const country = ref('Deutschland')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const shipping = ref('standard')
</script>