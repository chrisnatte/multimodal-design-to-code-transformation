<template>
  <div class="max-w-5xl mx-auto p-8">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times-circle" rounded severity="secondary" text class="!w-12 !h-12" aria-label="Close" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-800 m-0">Bestellung aufgeben</h1>
        <span class="text-base text-gray-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</span>
      </div>
    </div>

    <!-- Steps -->
    <div class="flex flex-col gap-2 mb-6">
      <div class="flex justify-between text-base">
        <span class="text-gray-800">Warenkorb</span>
        <span class="text-primary">Adresse</span>
        <span class="text-gray-400">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :showValue="false" style="height: 6px" />
    </div>

    <!-- Cart Table -->
    <DataTable :value="cartItems" class="mb-4">
      <Column field="name" header="Produkt"></Column>
      <Column header="Menge" style="width: 156px">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="stacked" inputStyle="width: 3rem" />
        </template>
      </Column>
      <Column header="Preis" style="width: 92px">
        <template #body="slotProps">
          {{ formatCurrency(slotProps.data.price) }}
        </template>
      </Column>
      <Column style="width: 64px">
        <template #body="slotProps">
          <Button icon="pi pi-trash" severity="danger" text rounded @click="removeItem(slotProps.data)" />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-6 mb-4">
      <div class="flex flex-col gap-2">
        <label for="firstname">Vorname</label>
        <InputText id="firstname" v-model="firstName" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastname">Nachname</label>
        <InputText id="lastname" v-model="lastName" />
      </div>
      <div class="flex flex-col gap-2 col-span-2">
        <label for="street">Straße</label>
        <InputText id="street" v-model="street" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="zip">PLZ / Ort</label>
        <InputText id="zip" v-model="zipCity" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country">Land</label>
        <Select id="country" v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select" class="w-full" />
      </div>
    </div>

    <Divider />

    <!-- Shipping Options -->
    <div class="flex flex-col gap-4 mb-4">
      <span class="font-semibold text-sm text-gray-800">Versandart</span>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingOption" inputId="shipping1" name="shipping" value="standard" />
          <label for="shipping1">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingOption" inputId="shipping2" name="shipping" value="express" />
          <label for="shipping2">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingOption" inputId="shipping3" name="shipping" value="sameday" />
          <label for="shipping3">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider />

    <!-- Actions -->
    <div class="flex justify-between items-center">
      <Button label="Abbrechen" severity="secondary" @click="onCancel" />
      <Button label="Speichern" @click="onSave" />
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

const cartItems = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const zipCity = ref('10115 Berlin');

const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
]);
const selectedCountry = ref({ name: 'Deutschland' });

const shippingOption = ref('standard');

const formatCurrency = (value) => {
  return value.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });
};

const removeItem = (item) => {
  cartItems.value = cartItems.value.filter((i) => i !== item);
};

const onCancel = () => {
  // handle cancel
};

const onSave = () => {
  // handle save
};
</script>