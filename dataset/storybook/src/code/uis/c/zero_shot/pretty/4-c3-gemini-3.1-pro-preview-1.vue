<template>
  <div class="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans text-gray-800">
    <div class="bg-white w-full max-w-3xl rounded-xl shadow-sm p-8">
      
      <!-- Header -->
      <div class="flex items-start gap-4 mb-8">
        <Button icon="pi pi-times" rounded text severity="secondary" class="text-gray-400 hover:bg-gray-100 mt-1" aria-label="Close" />
        <div>
          <h1 class="text-2xl font-bold text-gray-900 mb-1">Bestellung aufgeben</h1>
          <p class="text-gray-500 text-sm">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Progress Steps -->
      <div class="mb-8">
        <div class="flex justify-between text-sm font-medium mb-3 px-2">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-blue-500">Adresse</span>
          <span class="text-gray-400">Bestätigung</span>
        </div>
        <div class="h-1 w-full bg-gray-200 rounded-full flex overflow-hidden">
          <div class="h-full bg-emerald-500 w-1/3"></div>
        </div>
      </div>

      <!-- Cart Table -->
      <div class="mb-6">
        <DataTable :value="cartItems" class="p-datatable-sm" :pt="{ root: { class: 'border-none' }, headerRow: { class: 'bg-transparent' }, headerCell: { class: 'bg-transparent border-b border-gray-200 text-gray-500 font-medium text-sm py-3' }, bodyRow: { class: 'border-b border-gray-100 last:border-none' }, bodyCell: { class: 'py-4' } }">
          <Column field="name" header="Produkt" class="w-1/2">
            <template #body="slotProps">
              <span class="text-gray-800">{{ slotProps.data.name }}</span>
            </template>
          </Column>
          <Column header="Menge" class="w-1/4">
            <template #body="slotProps">
              <div class="flex items-center border border-gray-300 rounded-md w-20 overflow-hidden">
                <InputText v-model="slotProps.data.quantity" class="w-full text-center border-none shadow-none p-1 text-sm" />
                <div class="flex flex-col border-l border-gray-300 bg-gray-50">
                  <button class="px-1 py-0.5 text-gray-500 hover:bg-gray-200 text-xs border-b border-gray-300">
                    <i class="pi pi-angle-up" style="font-size: 0.6rem"></i>
                  </button>
                  <button class="px-1 py-0.5 text-gray-500 hover:bg-gray-200 text-xs">
                    <i class="pi pi-angle-down" style="font-size: 0.6rem"></i>
                  </button>
                </div>
              </div>
            </template>
          </Column>
          <Column field="price" header="Preis" class="w-1/4">
            <template #body="slotProps">
              <span class="text-gray-800">{{ slotProps.data.price }}</span>
            </template>
          </Column>
          <Column class="w-12 text-right">
            <template #body>
              <Button icon="pi pi-trash" text severity="danger" rounded class="text-red-400 hover:bg-red-50 hover:text-red-500 w-8 h-8 p-0" />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider class="mb-8" />

      <!-- Address Form -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-8">
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-600">Vorname</label>
          <InputText v-model="form.firstName" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-600">Nachname</label>
          <InputText v-model="form.lastName" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        
        <div class="flex flex-col gap-1.5 md:col-span-2">
          <label class="text-sm text-gray-600">Straße</label>
          <InputText v-model="form.street" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>

        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-600">PLZ / Ort</label>
          <InputText v-model="form.city" class="w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label class="text-sm text-gray-600">Land</label>
          <Select v-model="form.country" :options="countries" class="w-full border-emerald-400 rounded-md shadow-sm" :pt="{ root: { class: 'border-emerald-400 ring-1 ring-emerald-400' } }" />
        </div>
      </div>

      <Divider class="mb-8" />

      <!-- Shipping Method -->
      <div class="mb-10">
        <h3 class="text-sm font-bold text-gray-800 mb-4">Versandart</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <RadioButton v-model="shippingMethod" inputId="shipping-standard" value="standard" />
            <label for="shipping-standard" class="text-sm text-gray-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="shippingMethod" inputId="shipping-express" value="express" />
            <label for="shipping-express" class="text-sm text-gray-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="shippingMethod" inputId="shipping-sameday" value="sameday" />
            <label for="shipping-sameday" class="text-sm text-gray-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="mb-6" />

      <!-- Footer Actions -->
      <div class="flex justify-between items-center">
        <Button label="Abbrechen" severity="secondary" class="bg-gray-100 hover:bg-gray-200 text-gray-700 border-none px-6 py-2 rounded-md font-medium" />
        <Button label="Speichern" class="bg-emerald-500 hover:bg-emerald-600 text-white border-none px-6 py-2 rounded-md font-medium" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const cartItems = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: '1', price: '79,99 €' },
  { id: 2, name: 'USB-C Kabel 2m', quantity: '1', price: '14,97 €' }
]);

const form = ref({
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstraße 42',
  city: '10115 Berlin',
  country: 'Deutschland'
});

const countries = ref([
  'Spanien',
  'Deutschland',
  'Österreich',
  'Schweiz'
]);

const shippingMethod = ref('standard');
</script>