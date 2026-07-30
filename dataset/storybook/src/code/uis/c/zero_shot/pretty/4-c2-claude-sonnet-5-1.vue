<template>
  <div class="max-w-4xl mx-auto p-8">
    <div class="flex items-start gap-4 mb-8">
      <Button icon="pi pi-times" rounded outlined severity="secondary" class="!w-10 !h-10" />
      <div>
        <h1 class="text-3xl font-bold text-gray-800 m-0">Bestellung aufgeben</h1>
        <p class="text-gray-500 mt-1">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex justify-between mb-2 text-sm font-medium">
      <span class="text-green-600">Warenkorb</span>
      <span class="text-blue-500">Adresse</span>
      <span class="text-gray-400">Bestätigung</span>
    </div>
    <ProgressBar :value="50" :showValue="false" style="height: 6px" class="mb-8" />

    <DataTable :value="products" class="mb-8">
      <Column field="name" header="Produkt"></Column>
      <Column header="Menge" style="width: 8rem">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="vertical" inputStyle="width: 3rem" :min="1" />
        </template>
      </Column>
      <Column field="price" header="Preis" style="width: 8rem">
        <template #body="slotProps">
          {{ slotProps.data.price }}
        </template>
      </Column>
      <Column style="width: 3rem">
        <template #body>
          <Button icon="pi pi-trash" severity="danger" variant="text" rounded />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
      <div class="flex flex-col gap-2">
        <label for="firstname">Vorname</label>
        <InputText id="firstname" v-model="firstname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastname">Nachname</label>
        <InputText id="lastname" v-model="lastname" />
      </div>
      <div class="flex flex-col gap-2 md:col-span-2">
        <label for="street">Straße</label>
        <InputText id="street" v-model="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="zipcity">PLZ / Ort</label>
        <InputText id="zipcity" v-model="zipCity" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country">Land</label>
        <Select id="country" v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Land wählen" class="w-full" />
      </div>
    </div>

    <Divider />

    <div class="my-6">
      <h3 class="font-bold text-gray-800 mb-4">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="standard" name="shipping" value="standard" />
          <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="express" name="shipping" value="express" />
          <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="sameday" name="shipping" value="sameday" />
          <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider />

    <div class="flex justify-between mt-6">
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

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const firstname = ref('Max');
const lastname = ref('Mustermann');
const street = ref('Musterstraße 42');
const zipCity = ref('10115 Berlin');

const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
]);
const selectedCountry = ref(countries.value[1]);

const shippingMethod = ref('standard');
</script>