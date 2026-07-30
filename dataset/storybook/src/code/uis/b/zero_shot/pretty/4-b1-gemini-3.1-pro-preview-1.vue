<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-16 px-4 font-sans">
    <!-- Header Area -->
    <div class="flex items-center gap-4 w-full max-w-[728px] mb-12">
      <Button 
        icon="pi pi-times" 
        rounded 
        text 
        severity="secondary" 
        class="w-[50px] h-[50px] bg-slate-100 !text-slate-600 hover:bg-slate-200" 
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-[32px] font-bold text-slate-900 leading-tight">Bestellung aufgeben</h1>
        <p class="text-base text-slate-600 m-0">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Main Content Area -->
    <div class="flex flex-col gap-4 w-full max-w-[728px]">
      
      <!-- Progress Section -->
      <div class="flex flex-col gap-2 w-full">
        <div class="flex justify-between items-center w-full text-base text-slate-900">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" style="height: 6px" class="w-full" />
      </div>

      <!-- DataTable Section -->
      <div class="w-full px-4 mt-2">
        <DataTable :value="products" class="w-full">
          <Column field="name" header="Produkt" headerStyle="font-weight: 600; font-size: 14px;"></Column>
          <Column header="Menge" headerStyle="font-weight: 600; font-size: 14px;">
            <template #body="{ data }">
              <InputNumber 
                v-model="data.quantity" 
                showButtons 
                buttonLayout="vertical" 
                style="width: 4rem" 
                incrementButtonIcon="pi pi-angle-up" 
                decrementButtonIcon="pi pi-angle-down" 
                class="h-[31px]"
              />
            </template>
          </Column>
          <Column field="price" header="Preis" headerStyle="font-weight: 600; font-size: 14px;"></Column>
          <Column headerStyle="font-weight: 600; font-size: 14px;">
            <template #body>
              <Button icon="pi pi-trash" severity="danger" text rounded aria-label="Löschen" class="w-7 h-7 p-0" />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider class="my-2" />

      <!-- Form Grid Section -->
      <div class="grid grid-cols-2 gap-4 w-full px-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Vorname</label>
          <InputText v-model="firstName" placeholder="Name eingeben" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Nachname</label>
          <InputText v-model="lastName" placeholder="Name eingeben" class="w-full" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm text-slate-900">Straße</label>
          <InputText v-model="street" placeholder="Name eingeben" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">PLZ / Ort</label>
          <InputText v-model="city" placeholder="Name eingeben" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Land</label>
          <Select v-model="selectedCountry" :options="countries" placeholder="Land auswählen" class="w-full" />
        </div>
      </div>

      <Divider class="my-2" />

      <!-- Shipping Options Section -->
      <div class="flex flex-col gap-4 w-full px-4">
        <h3 class="text-sm font-semibold text-slate-900 m-0">Versandart</h3>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping1" name="shipping" value="Standard (3 - 5 Tage) - kostenlos" />
          <label for="shipping1" class="text-sm text-slate-900 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping2" name="shipping" value="Express (1 - 2 Tage) - 4,99 €" />
          <label for="shipping2" class="text-sm text-slate-900 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping3" name="shipping" value="Same Day (Gleicher Tag) - 9,99 €" />
          <label for="shipping3" class="text-sm text-slate-900 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider class="my-2" />

      <!-- Footer Buttons -->
      <div class="flex justify-between items-center w-full mt-2">
        <Button label="Abbrechen" severity="secondary" class="bg-slate-100 text-slate-900 border-none hover:bg-slate-200 font-medium px-4 py-2" />
        <Button label="Speichern" severity="primary" class="font-medium px-4 py-2" />
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

// State for DataTable
const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

// State for Form Grid
const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const city = ref('10115 Berlin');
const selectedCountry = ref('Deutschland');
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

// State for Shipping Options
const shippingMethod = ref('Standard (3 - 5 Tage) - kostenlos');
</script>