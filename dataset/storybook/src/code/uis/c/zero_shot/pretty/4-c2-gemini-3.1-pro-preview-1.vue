<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
    <div class="bg-white w-full max-w-4xl rounded-2xl shadow-sm p-8 md:p-12">
      
      <!-- Header -->
      <div class="flex items-start gap-4 mb-10">
        <Button icon="pi pi-times" rounded variant="outlined" severity="secondary" class="!text-slate-500 !border-slate-300 mt-1" aria-label="Close" />
        <div>
          <h1 class="text-3xl font-bold text-slate-800 mb-1">Bestellung aufgeben</h1>
          <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Steps Indicator -->
      <div class="flex items-center w-full mb-10">
        <div class="flex-1 border-b-4 border-emerald-500 pb-3">
          <span class="text-emerald-500 font-medium">Warenkorb</span>
        </div>
        <div class="flex-1 border-b-4 border-sky-400 pb-3 text-center">
          <span class="text-sky-400 font-medium">Adresse</span>
        </div>
        <div class="flex-1 border-b-4 border-slate-200 pb-3 text-right">
          <span class="text-slate-400 font-medium">Bestätigung</span>
        </div>
      </div>

      <!-- Cart Section -->
      <div class="mb-8">
        <DataTable :value="cartItems" class="w-full text-sm" :pt="{
            thead: { class: 'border-b border-slate-200' },
            tbody: { class: 'divide-y divide-slate-100' }
        }">
          <Column field="name" header="Produkt" class="py-4 font-medium text-slate-700"></Column>
          <Column header="Menge" class="py-4">
            <template #body="{ data }">
              <div class="flex items-center border border-slate-300 rounded-md w-20 overflow-hidden">
                <InputText v-model="data.quantity" class="w-full text-center border-none !shadow-none !ring-0 p-2" />
                <div class="flex flex-col border-l border-slate-300 bg-slate-50">
                  <button class="px-2 py-0.5 hover:bg-slate-200 text-slate-500 text-xs border-b border-slate-300"><i class="pi pi-angle-up"></i></button>
                  <button class="px-2 py-0.5 hover:bg-slate-200 text-slate-500 text-xs"><i class="pi pi-angle-down"></i></button>
                </div>
              </div>
            </template>
          </Column>
          <Column field="price" header="Preis" class="py-4 text-slate-700"></Column>
          <Column class="py-4 text-right">
            <template #body>
              <Button icon="pi pi-trash" variant="text" severity="danger" rounded aria-label="Delete" class="!text-red-400 hover:!bg-red-50" />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider class="!my-8 !border-slate-100" />

      <!-- Address Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 mb-8">
        <div class="flex flex-col gap-2">
          <label for="vorname" class="text-sm font-medium text-slate-700">Vorname</label>
          <InputText id="vorname" v-model="address.firstName" class="w-full !border-slate-300" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname" class="text-sm font-medium text-slate-700">Nachname</label>
          <InputText id="nachname" v-model="address.lastName" class="w-full !border-slate-300" />
        </div>
        
        <div class="flex flex-col gap-2 md:col-span-2">
          <label for="strasse" class="text-sm font-medium text-slate-700">Straße</label>
          <InputText id="strasse" v-model="address.street" class="w-full !border-slate-300" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="plz" class="text-sm font-medium text-slate-700">PLZ / Ort</label>
          <InputText id="plz" v-model="address.zipCity" class="w-full !border-slate-300" />
        </div>
        <div class="flex flex-col gap-2 relative">
          <label for="land" class="text-sm font-medium text-slate-700">Land</label>
          <Select id="land" v-model="address.country" :options="countries" class="w-full !border-emerald-400 !ring-emerald-400" />
          
          <!-- Mockup shows dropdown open, simulating it visually for fidelity if needed, but standard Select handles this. 
               The Select component will look like the closed state until clicked. -->
        </div>
      </div>

      <Divider class="!my-8 !border-slate-100" />

      <!-- Shipping Section -->
      <div class="mb-10">
        <h3 class="text-sm font-bold text-slate-800 mb-4">Versandart</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <RadioButton v-model="shippingMethod" inputId="shipping1" name="shipping" value="standard" />
            <label for="shipping1" class="text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="shippingMethod" inputId="shipping2" name="shipping" value="express" />
            <label for="shipping2" class="text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="shippingMethod" inputId="shipping3" name="shipping" value="sameday" />
            <label for="shipping3" class="text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="!my-8 !border-slate-100" />

      <!-- Footer Actions -->
      <div class="flex justify-between items-center pt-2">
        <Button label="Abbrechen" variant="text" class="!bg-slate-100 !text-slate-600 hover:!bg-slate-200 !px-6" />
        <Button label="Speichern" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 !px-8" />
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const cartItems = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: '1', price: '79,99 €' },
  { id: 2, name: 'USB-C Kabel 2m', quantity: '1', price: '14,97 €' }
]);

const address = ref({
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstraße 42',
  zipCity: '10115 Berlin',
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