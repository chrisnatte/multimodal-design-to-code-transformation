<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-16 font-sans">
    <!-- Header -->
    <div class="w-[728px] flex items-center gap-4 mb-8">
      <Button icon="pi pi-times" rounded text severity="secondary" class="w-12 h-12 bg-slate-100 text-slate-600 hover:bg-slate-200" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-gray-900 m-0">Bestellung aufgeben</h1>
        <p class="text-base text-gray-600 m-0">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-[728px] flex flex-col gap-4">
      <!-- Progress -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base text-gray-900">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" class="h-1.5" />
      </div>

      <!-- DataTable -->
      <div class="px-4">
        <DataTable :value="products" class="w-full">
          <Column field="name" header="Produkt">
            <template #body="slotProps">
              <span class="text-sm text-gray-900">{{ slotProps.data.name }}</span>
            </template>
          </Column>
          <Column field="quantity" header="Menge">
            <template #body="slotProps">
              <div class="flex items-center">
                <InputText v-model="slotProps.data.quantity" class="w-24 rounded-r-none" />
                <div class="flex flex-col">
                  <Button icon="pi pi-angle-up" severity="secondary" class="h-4 w-8 rounded-none rounded-tr border-b-0 p-0" />
                  <Button icon="pi pi-angle-down" severity="secondary" class="h-4 w-8 rounded-none rounded-br p-0" />
                </div>
              </div>
            </template>
          </Column>
          <Column field="price" header="Preis">
            <template #body="slotProps">
              <span class="text-sm text-gray-900">{{ slotProps.data.price }}</span>
            </template>
          </Column>
          <Column>
            <template #body>
              <Button icon="pi pi-trash" severity="danger" text rounded />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider class="my-0" />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-4 px-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-900">Vorname</label>
          <InputText v-model="firstName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-900">Nachname</label>
          <InputText v-model="lastName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm text-gray-900">Straße</label>
          <InputText v-model="street" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-900">PLZ / Ort</label>
          <InputText v-model="city" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-gray-900">Land</label>
          <Select v-model="country" :options="countries" placeholder="Deutschland" class="w-full" />
        </div>
      </div>

      <Divider class="my-0" />

      <!-- Shipping Method -->
      <div class="flex flex-col gap-4 px-4">
        <h3 class="text-sm font-semibold text-gray-900 m-0">Versandart</h3>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping1" value="Standard (3 - 5 Tage) - kostenlos" />
          <label for="shipping1" class="text-sm text-gray-900 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping2" value="Express (1 - 2 Tage) - 4,99 €" />
          <label for="shipping2" class="text-sm text-gray-900 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping3" value="Same Day (Gleicher Tag) - 9,99 €" />
          <label for="shipping3" class="text-sm text-gray-900 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider class="my-0" />

      <!-- Footer Buttons -->
      <div class="flex justify-between items-center px-4">
        <Button label="Abbrechen" severity="secondary" text class="bg-slate-100 font-medium px-6" />
        <Button label="Speichern" severity="primary" class="font-medium px-6" />
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
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const products = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: '1', price: '79,99 €' },
  { id: 2, name: 'USB-C Kabel 2m', quantity: '1', price: '14,97 €' }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const city = ref('10115 Berlin');
const country = ref('Deutschland');
const countries = ref(['Deutschland', 'Österreich', 'Schweiz', 'Spanien']);

const shippingMethod = ref('Standard (3 - 5 Tage) - kostenlos');
</script>