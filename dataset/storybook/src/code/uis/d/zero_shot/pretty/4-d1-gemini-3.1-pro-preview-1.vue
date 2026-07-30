<template>
  <div class="min-h-screen bg-white flex justify-center py-16 font-sans">
    <div class="w-full max-w-[728px] flex flex-col gap-12">
      
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button icon="pi pi-times" rounded text class="bg-slate-100 text-slate-500 w-12 h-12 hover:bg-slate-200" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold text-slate-900 leading-tight">Bestellung aufgeben</h1>
          <p class="text-base text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Main Content Column -->
      <div class="flex flex-col gap-6">
        
        <!-- Progress Steps -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-base">
            <span class="text-emerald-500">Warenkorb</span>
            <span class="text-emerald-500">Adresse</span>
            <span class="text-slate-500">Bestätigung</span>
          </div>
          <ProgressBar :value="50" :showValue="false" class="h-1.5 bg-slate-100" :pt="{ value: { class: 'bg-emerald-500 rounded-l-md' } }" />
        </div>

        <!-- Data Table -->
        <DataTable :value="products" class="w-full border border-slate-200 rounded-lg overflow-hidden">
          <Column field="name" header="Produkt" class="text-sm text-slate-700 py-3 px-4 border-b border-slate-200"></Column>
          <Column field="quantity" header="Menge" class="py-3 px-4 border-b border-slate-200 w-40">
            <template #body="slotProps">
              <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="stacked" class="w-24 h-8" :pt="{ input: { class: 'h-8 text-sm' }, buttonGroup: { class: 'w-8' }, incrementButton: { class: 'h-4 bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200' }, decrementButton: { class: 'h-4 bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200' } }" />
            </template>
          </Column>
          <Column field="price" header="Preis" class="text-sm text-slate-700 py-3 px-4 border-b border-slate-200 w-28"></Column>
          <Column class="py-3 px-4 border-b border-slate-200 w-16 text-right">
            <template #body>
              <Button icon="pi pi-trash" severity="danger" text rounded class="w-8 h-8 p-0 text-red-500 hover:bg-red-50" />
            </template>
          </Column>
        </DataTable>

        <Divider class="my-2" />

        <!-- Address Form -->
        <div class="grid grid-cols-2 gap-x-4 gap-y-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Vorname</label>
            <InputText v-model="firstName" class="w-full border-slate-300" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Nachname</label>
            <InputText v-model="lastName" class="w-full border-slate-300" />
          </div>
          <div class="flex flex-col gap-2 col-span-2">
            <label class="text-sm text-slate-700">Straße</label>
            <InputText v-model="street" class="w-full border-slate-300" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">PLZ / Ort</label>
            <InputText v-model="zipCity" class="w-full border-slate-300" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Land</label>
            <Select v-model="selectedCountry" :options="countries" class="w-full border-emerald-500 ring-1 ring-emerald-500" />
          </div>
        </div>

        <Divider class="my-2" />

        <!-- Shipping Options -->
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-900">Versandart</h3>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <RadioButton v-model="shippingMethod" inputId="ship1" value="Standard (3 - 5 Tage) - kostenlos" />
              <label for="ship1" class="text-sm text-slate-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
            </div>
            <div class="flex items-center gap-3">
              <RadioButton v-model="shippingMethod" inputId="ship2" value="Express (1 - 2 Tage) - 4,99 €" />
              <label for="ship2" class="text-sm text-slate-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
            </div>
            <div class="flex items-center gap-3">
              <RadioButton v-model="shippingMethod" inputId="ship3" value="Same Day (Gleicher Tag) - 9,99 €" />
              <label for="ship3" class="text-sm text-slate-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
          </div>
        </div>

        <Divider class="my-2" />

        <!-- Footer Actions -->
        <div class="flex justify-between items-center pt-2">
          <Button label="Abbrechen" severity="secondary" text class="bg-slate-100 text-slate-700 hover:bg-slate-200 px-4 py-2 font-medium" />
          <Button label="Speichern" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 font-medium" />
        </div>

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
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const products = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const zipCity = ref('10115 Berlin');
const selectedCountry = ref('Deutschland');
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

const shippingMethod = ref('Standard (3 - 5 Tage) - kostenlos');
</script>