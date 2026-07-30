<template>
  <div class="min-h-screen bg-white flex flex-col items-center pt-16 pb-24 font-sans text-slate-800">
    <!-- Header -->
    <div class="w-[728px] flex items-center gap-4 mb-10">
      <Button 
        icon="pi pi-times" 
        rounded 
        variant="text" 
        class="!bg-slate-100 !text-slate-500 hover:!bg-slate-200 !w-12 !h-12" 
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Bestellung aufgeben</h1>
        <p class="text-slate-600">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="w-[728px] flex flex-col">
      
      <!-- Progress Steps -->
      <div class="flex flex-col gap-2 mb-6">
        <div class="flex justify-between text-base">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-blue-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar 
          :value="50" 
          :showValue="false" 
          class="h-1.5 !bg-slate-200" 
          :pt="{ value: { class: '!bg-emerald-500' } }" 
        />
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="mb-6" :pt="{ headerRow: { class: '!bg-transparent' } }">
        <Column field="name" header="Produkt" :pt="{ headerCell: { class: 'font-semibold text-slate-800 !bg-transparent border-b border-slate-200 pb-3' }, bodyCell: { class: 'py-4 border-b border-slate-200' } }"></Column>
        <Column header="Menge" :pt="{ headerCell: { class: 'font-semibold text-slate-800 !bg-transparent border-b border-slate-200 pb-3' }, bodyCell: { class: 'py-4 border-b border-slate-200' } }">
          <template #body="slotProps">
            <div class="flex items-center border border-slate-300 rounded-md w-[72px] h-8 overflow-hidden">
              <input 
                type="text" 
                v-model="slotProps.data.quantity" 
                class="w-10 text-center border-none outline-none text-sm text-slate-800" 
              />
              <div class="flex flex-col border-l border-slate-300 h-full w-8">
                <button class="flex-1 flex items-center justify-center hover:bg-slate-100 border-b border-slate-300">
                  <i class="pi pi-angle-up text-[10px] text-slate-600"></i>
                </button>
                <button class="flex-1 flex items-center justify-center hover:bg-slate-100">
                  <i class="pi pi-angle-down text-[10px] text-slate-600"></i>
                </button>
              </div>
            </div>
          </template>
        </Column>
        <Column field="price" header="Preis" :pt="{ headerCell: { class: 'font-semibold text-slate-800 !bg-transparent border-b border-slate-200 pb-3' }, bodyCell: { class: 'py-4 border-b border-slate-200' } }"></Column>
        <Column :pt="{ headerCell: { class: '!bg-transparent border-b border-slate-200 pb-3' }, bodyCell: { class: 'py-4 border-b border-slate-200 text-right' } }">
          <template #body>
            <Button icon="pi pi-trash" severity="danger" variant="text" rounded class="!w-8 !h-8" />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-2" />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-x-4 gap-y-6 my-6">
        <div class="flex flex-col gap-2">
          <label for="vorname" class="text-sm text-slate-700">Vorname</label>
          <InputText id="vorname" v-model="form.vorname" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname" class="text-sm text-slate-700">Nachname</label>
          <InputText id="nachname" v-model="form.nachname" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="strasse" class="text-sm text-slate-700">Straße</label>
          <InputText id="strasse" v-model="form.strasse" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plz" class="text-sm text-slate-700">PLZ / Ort</label>
          <InputText id="plz" v-model="form.plz" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land" class="text-sm text-slate-700">Land</label>
          <Select id="land" v-model="form.land" :options="countries" class="w-full" />
        </div>
      </div>

      <Divider class="!my-2" />

      <!-- Shipping Method -->
      <div class="flex flex-col gap-4 my-6">
        <h3 class="font-semibold text-slate-800 text-sm">Versandart</h3>
        <div class="flex items-center gap-3">
          <RadioButton v-model="form.versandart" inputId="versand1" value="Standard (3 - 5 Tage) - kostenlos" />
          <label for="versand1" class="text-sm text-slate-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="form.versandart" inputId="versand2" value="Express (1 - 2 Tage) - 4,99 €" />
          <label for="versand2" class="text-sm text-slate-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="form.versandart" inputId="versand3" value="Same Day (Gleicher Tag) - 9,99 €" />
          <label for="versand3" class="text-sm text-slate-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider class="!my-2" />

      <!-- Footer Buttons -->
      <div class="flex justify-between mt-6">
        <Button 
          label="Abbrechen" 
          severity="secondary" 
          class="!bg-slate-100 !text-slate-700 !border-none hover:!bg-slate-200 font-medium px-6" 
        />
        <Button 
          label="Speichern" 
          class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 font-medium px-6" 
        />
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
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const form = ref({
  vorname: 'Max',
  nachname: 'Mustermann',
  strasse: 'Musterstraße 42',
  plz: '10115 Berlin',
  land: 'Deutschland',
  versandart: 'Standard (3 - 5 Tage) - kostenlos'
});

const countries = ref([
  'Spanien',
  'Deutschland',
  'Österreich',
  'Schweiz'
]);
</script>