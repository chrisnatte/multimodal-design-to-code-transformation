<template>
  <div class="p-8 bg-white">
    <!-- Header Row -->
    <div class="flex items-center gap-4 mb-8">
      <Button rounded severity="secondary" text class="!w-[50px] !h-[50px]">
        <i class="pi pi-times-circle text-2xl"></i>
      </Button>
      <div class="flex flex-col gap-1">
        <span class="text-3xl font-bold">Bestellung aufgeben</span>
        <span class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</span>
      </div>
    </div>

    <!-- Main Column -->
    <div class="flex flex-col items-center gap-4 max-w-[728px] mx-auto">
      <!-- Steps -->
      <div class="flex flex-col gap-2 w-full">
        <div class="flex items-center justify-between w-full">
          <span class="text-base">Warenkorb</span>
          <span class="text-base">Adresse</span>
          <span class="text-base">Bestätigung</span>
        </div>
        <ProgressBar :value="progressValue" :showValue="false" class="w-full h-[6px]" />
      </div>

      <!-- Cart Table -->
      <DataTable :value="cartItems" class="w-full px-4">
        <Column field="product" header="Produkt"></Column>
        <Column field="quantity" header="Menge">
          <template #body="slotProps">
            <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="horizontal" inputStyle="width: 3rem" />
          </template>
        </Column>
        <Column field="price" header="Preis"></Column>
        <Column header="">
          <template #body="slotProps">
            <Button icon="pi pi-trash" severity="danger" text @click="removeItem(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Divider class="w-full" />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-4 w-full px-4">
        <div class="flex flex-col gap-1">
          <label class="text-sm">Vorname</label>
          <InputText v-model="firstName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm">Nachname</label>
          <InputText v-model="lastName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-1 col-span-2">
          <label class="text-sm">Straße</label>
          <InputText v-model="street" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm">PLZ / Ort</label>
          <InputText v-model="zipCity" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-1">
          <label class="text-sm">Land</label>
          <Select v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Land wählen" class="w-full" />
        </div>
      </div>

      <Divider class="w-full" />

      <!-- Shipping Options -->
      <div class="flex flex-col gap-4 w-full px-4">
        <span class="font-semibold text-sm">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingOption" value="standard" inputId="shipping-standard" />
          <label for="shipping-standard" class="text-sm">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingOption" value="express" inputId="shipping-express" />
          <label for="shipping-express" class="text-sm">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingOption" value="sameday" inputId="shipping-sameday" />
          <label for="shipping-sameday" class="text-sm">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider class="w-full" />

      <!-- Action Buttons -->
      <div class="flex items-center justify-between w-full">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
      </div>
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
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const progressValue = ref(50);

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const removeItem = (item) => {
  cartItems.value = cartItems.value.filter((i) => i !== item);
};

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const zipCity = ref('10115 Berlin');

const countries = ref([
  { name: 'Deutschland' },
  { name: 'Spanien' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
]);
const selectedCountry = ref(countries.value[0]);

const shippingOption = ref('standard');
</script>