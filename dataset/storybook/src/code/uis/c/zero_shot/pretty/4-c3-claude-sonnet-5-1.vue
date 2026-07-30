<template>
  <div class="max-w-4xl mx-auto p-8">
    <div class="flex items-start gap-4 mb-6">
      <Button icon="pi pi-times" rounded text severity="secondary" class="!bg-gray-100" />
      <div>
        <h1 class="text-2xl font-bold text-gray-800 m-0">Bestellung aufgeben</h1>
        <p class="text-gray-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex justify-between mb-2 text-sm font-medium">
      <span class="text-green-500">Warenkorb</span>
      <span class="text-blue-500">Adresse</span>
      <span class="text-gray-400">Bestätigung</span>
    </div>
    <ProgressBar :value="50" :showValue="false" class="!h-1 mb-6" />

    <DataTable :value="cartItems" class="mb-6">
      <Column field="name" header="Produkt"></Column>
      <Column header="Menge">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="vertical" inputStyle="width: 3rem" class="w-20" />
        </template>
      </Column>
      <Column header="Preis">
        <template #body="slotProps">
          <span>{{ slotProps.data.price }}</span>
        </template>
      </Column>
      <Column header="">
        <template #body>
          <Button icon="pi pi-trash" text severity="danger" />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <div class="grid grid-cols-2 gap-6 mb-6">
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">Vorname</label>
        <InputText v-model="firstName" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">Nachname</label>
        <InputText v-model="lastName" />
      </div>
      <div class="flex flex-col gap-2 col-span-2">
        <label class="text-gray-700">Straße</label>
        <InputText v-model="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">PLZ / Ort</label>
        <InputText v-model="zipCity" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-gray-700">Land</label>
        <Select v-model="country" :options="countries" optionLabel="name" optionValue="code" class="w-full" />
      </div>
    </div>

    <Divider />

    <div class="mb-6">
      <p class="font-semibold text-gray-800 mb-3">Versandart</p>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" value="standard" inputId="standard" />
          <label for="standard" class="text-gray-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" value="express" inputId="express" />
          <label for="express" class="text-gray-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" value="sameday" inputId="sameday" />
          <label for="sameday" class="text-gray-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider />

    <div class="flex justify-between">
      <Button label="Abbrechen" severity="secondary" outlined />
      <Button label="Speichern" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import ProgressBar from 'primevue/progressbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const zipCity = ref('10115 Berlin');
const country = ref('DE');
const shippingMethod = ref('standard');

const countries = ref([
  { name: 'Spanien', code: 'ES' },
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
]);

const cartItems = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);
</script>