<template>
  <div class="max-w-3xl mx-auto p-8 bg-white font-sans text-slate-800">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-10">
      <Button icon="pi pi-times" rounded class="bg-slate-100 text-slate-600 border-none w-10 h-10 flex-shrink-0 hover:bg-slate-200" />
      <div>
        <h1 class="text-2xl font-bold text-slate-800 mb-1">Bestellung aufgeben</h1>
        <p class="text-slate-500 text-sm">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="flex border-b border-slate-200 mb-8">
      <div class="flex-1 pb-3 border-b-2 border-emerald-500 text-emerald-500 font-medium text-sm">Warenkorb</div>
      <div class="flex-1 pb-3 text-blue-500 font-medium text-sm text-center">Adresse</div>
      <div class="flex-1 pb-3 text-slate-500 font-medium text-sm text-right">Bestätigung</div>
    </div>

    <!-- Cart Section -->
    <div class="mb-10">
      <div class="flex text-sm font-semibold text-slate-800 mb-4 px-2">
        <div class="flex-[2]">Produkt</div>
        <div class="flex-1">Menge</div>
        <div class="flex-1 text-right pr-12">Preis</div>
      </div>

      <!-- Item 1 -->
      <div class="flex items-center py-4 border-t border-slate-100 px-2">
        <div class="flex-[2] text-sm text-slate-700">Wireless Kopfhörer</div>
        <div class="flex-1">
          <InputNumber v-model="qty1" showButtons buttonLayout="stacked" class="w-20 h-10" inputClass="w-full text-center border-slate-300" />
        </div>
        <div class="flex-1 flex justify-end items-center gap-4">
          <span class="text-sm text-slate-700">79,99 €</span>
          <Button icon="pi pi-trash" text severity="danger" class="p-2 text-red-400 hover:bg-red-50" />
        </div>
      </div>

      <!-- Item 2 -->
      <div class="flex items-center py-4 border-t border-slate-100 px-2">
        <div class="flex-[2] text-sm text-slate-700">USB-C Kabel 2m</div>
        <div class="flex-1">
          <InputNumber v-model="qty2" showButtons buttonLayout="stacked" class="w-20 h-10" inputClass="w-full text-center border-slate-300" />
        </div>
        <div class="flex-1 flex justify-end items-center gap-4">
          <span class="text-sm text-slate-700">14,97 €</span>
          <Button icon="pi pi-trash" text severity="danger" class="p-2 text-red-400 hover:bg-red-50" />
        </div>
      </div>
    </div>

    <!-- Address Section -->
    <div class="mb-10 border-t border-slate-200 pt-8">
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-700">Vorname</label>
          <InputText v-model="firstName" class="w-full border-slate-300" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-700">Nachname</label>
          <InputText v-model="lastName" class="w-full border-slate-300" />
        </div>
      </div>
      
      <div class="flex flex-col gap-2 mb-6">
        <label class="text-sm text-slate-700">Straße</label>
        <InputText v-model="street" class="w-full border-slate-300" />
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-700">PLZ / Ort</label>
          <InputText v-model="city" class="w-full border-slate-300" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-700">Land</label>
          <Dropdown v-model="selectedCountry" :options="countries" optionLabel="name" class="w-full border-emerald-500 shadow-[0_0_0_1px_#10b981]" />
        </div>
      </div>
    </div>

    <!-- Shipping Section -->
    <div class="mb-10 border-t border-slate-200 pt-8">
      <h3 class="text-sm font-semibold text-slate-800 mb-4">Versandart</h3>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping1" name="shipping" value="standard" />
          <label for="shipping1" class="text-sm text-slate-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping2" name="shipping" value="express" />
          <label for="shipping2" class="text-sm text-slate-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping3" name="shipping" value="sameday" />
          <label for="shipping3" class="text-sm text-slate-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex justify-between items-center border-t border-slate-200 pt-8">
      <Button label="Abbrechen" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-6 py-2.5 font-medium" />
      <Button label="Speichern" class="bg-emerald-500 text-white border-none hover:bg-emerald-600 px-6 py-2.5 font-medium" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';

const qty1 = ref(1);
const qty2 = ref(1);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const city = ref('10115 Berlin');

const selectedCountry = ref({ name: 'Deutschland', code: 'DE' });
const countries = ref([
  { name: 'Spanien', code: 'ES' },
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
]);

const shippingMethod = ref('standard');
</script>