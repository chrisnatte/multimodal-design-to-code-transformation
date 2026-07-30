<template>
  <div class="bg-white p-8 w-full max-w-[1920px] mx-auto">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <Button icon="pi pi-times-circle" rounded text severity="secondary" class="!w-[50px] !h-[50px]" @click="onCancel" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Bestellung aufgeben</h1>
        <span class="text-base text-gray-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</span>
      </div>
    </div>

    <div class="flex flex-col items-center gap-4 max-w-[728px] mx-auto">
      <!-- Steps -->
      <div class="flex flex-col gap-2 w-full">
        <div class="flex justify-between items-center w-full">
          <span class="text-base">Warenkorb</span>
          <span class="text-base">Adresse</span>
          <span class="text-base">Bestätigung</span>
        </div>
        <ProgressBar :value="progressValue" :showValue="false" class="w-full h-[6px]" />
      </div>

      <!-- DataTable -->
      <DataTable :value="cartItems" class="w-full">
        <Column field="name" header="Produkt"></Column>
        <Column header="Menge">
          <template #body="slotProps">
            <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="stacked" inputStyle="width: 4rem" />
          </template>
        </Column>
        <Column field="price" header="Preis"></Column>
        <Column header="">
          <template #body="slotProps">
            <Button icon="pi pi-trash" text severity="danger" @click="removeItem(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Divider class="w-full" />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-4 w-full px-4">
        <div class="flex flex-col gap-2">
          <label for="vorname">Vorname</label>
          <InputText id="vorname" v-model="vorname" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname">Nachname</label>
          <InputText id="nachname" v-model="nachname" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="strasse">Straße</label>
          <InputText id="strasse" v-model="strasse" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plz">PLZ / Ort</label>
          <InputText id="plz" v-model="plzOrt" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land">Land</label>
          <Select id="land" v-model="land" :options="countries" optionLabel="label" class="w-full" />
        </div>
      </div>

      <Divider class="w-full" />

      <!-- Versandart -->
      <div class="flex flex-col gap-4 w-full px-4">
        <span class="font-semibold text-sm">Versandart</span>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <RadioButton v-model="versandart" inputId="standard" name="versandart" value="standard" />
            <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="versandart" inputId="express" name="versandart" value="express" />
            <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="versandart" inputId="sameday" name="versandart" value="sameday" />
            <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="w-full" />

      <!-- Footer -->
      <div class="flex justify-between items-center w-full">
        <Button label="Abbrechen" severity="secondary" @click="onCancel" />
        <Button label="Speichern" severity="primary" @click="onSave" />
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
import InputText from 'primevue/inputtext'
import Divider from 'primevue/divider'
import Select from 'primevue/select'
import RadioButton from 'primevue/radiobutton'

const progressValue = ref(50)

const cartItems = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const removeItem = (item) => {
  cartItems.value = cartItems.value.filter((i) => i !== item)
}

const vorname = ref('Max')
const nachname = ref('Mustermann')
const strasse = ref('Musterstraße 42')
const plzOrt = ref('10115 Berlin')

const countries = ref([
  { label: 'Deutschland', value: 'DE' },
  { label: 'Spanien', value: 'ES' },
  { label: 'Österreich', value: 'AT' },
  { label: 'Schweiz', value: 'CH' }
])
const land = ref(countries.value[1])

const versandart = ref('standard')

const onCancel = () => {}
const onSave = () => {}
</script>