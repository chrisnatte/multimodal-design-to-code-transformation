<template>
  <div class="max-w-3xl mx-auto p-8 bg-white font-sans">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-10">
      <Button icon="pi pi-times" rounded text severity="secondary" class="bg-slate-100 text-slate-600 hover:bg-slate-200 w-10 h-10 flex-shrink-0" />
      <div>
        <h1 class="text-2xl font-bold text-slate-800 mb-1">Bestellung aufgeben</h1>
        <p class="text-slate-500 text-sm">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Progress/Tabs -->
    <div class="grid grid-cols-3 mb-8 text-sm font-medium">
      <div class="pb-3 text-emerald-500 border-b-2 border-emerald-500">Warenkorb</div>
      <div class="pb-3 text-blue-500 border-b-2 border-emerald-500 text-center">Adresse</div>
      <div class="pb-3 text-slate-500 border-b-2 border-slate-200 text-right">Bestätigung</div>
    </div>

    <!-- Cart Items -->
    <div class="mb-10">
      <div class="grid grid-cols-12 gap-4 pb-3 border-b border-slate-200 text-sm font-bold text-slate-800">
        <div class="col-span-7">Produkt</div>
        <div class="col-span-2">Menge</div>
        <div class="col-span-3">Preis</div>
      </div>

      <div class="grid grid-cols-12 gap-4 py-4 border-b border-slate-100 items-center">
        <div class="col-span-7 text-slate-700 text-sm">Wireless Kopfhörer</div>
        <div class="col-span-2">
          <InputNumber v-model="qty1" showButtons buttonLayout="stacked" class="w-16 h-8" inputClass="text-center text-sm p-0 border-slate-300" />
        </div>
        <div class="col-span-3 flex justify-between items-center">
          <span class="text-slate-700 text-sm">79,99 €</span>
          <Button icon="pi pi-trash" text severity="danger" class="w-8 h-8 p-0 text-red-500 hover:bg-red-50" />
        </div>
      </div>

      <div class="grid grid-cols-12 gap-4 py-4 border-b border-slate-100 items-center">
        <div class="col-span-7 text-slate-700 text-sm">USB-C Kabel 2m</div>
        <div class="col-span-2">
          <InputNumber v-model="qty2" showButtons buttonLayout="stacked" class="w-16 h-8" inputClass="text-center text-sm p-0 border-slate-300" />
        </div>
        <div class="col-span-3 flex justify-between items-center">
          <span class="text-slate-700 text-sm">14,97 €</span>
          <Button icon="pi pi-trash" text severity="danger" class="w-8 h-8 p-0 text-red-500 hover:bg-red-50" />
        </div>
      </div>
    </div>

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-x-6 gap-y-5 mb-10">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Vorname</label>
        <InputText v-model="firstName" class="border-slate-300 text-sm py-2" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Nachname</label>
        <InputText v-model="lastName" class="border-slate-300 text-sm py-2" />
      </div>
      
      <div class="col-span-2 flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Straße</label>
        <InputText v-model="street" class="border-slate-300 text-sm py-2" />
      </div>

      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">PLZ / Ort</label>
        <InputText v-model="cityZip" class="border-slate-300 text-sm py-2" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Land</label>
        <Select v-model="selectedCountry" :options="countries" class="w-full border-emerald-500 shadow-[0_0_0_1px_#10b981]" inputClass="text-sm py-2" />
      </div>
    </div>

    <!-- Shipping Method -->
    <div class="mb-12 border-t border-slate-100 pt-8">
      <h3 class="text-sm font-bold text-slate-800 mb-4">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="ship1" value="standard" class="border-slate-300" />
          <label for="ship1" class="text-sm text-slate-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="ship2" value="express" class="border-slate-300" />
          <label for="ship2" class="text-sm text-slate-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="ship3" value="sameday" class="border-slate-300" />
          <label for="ship3" class="text-sm text-slate-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="flex justify-between items-center pt-6 border-t border-slate-100">
      <Button label="Abbrechen" severity="secondary" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-6 py-2 text-sm font-medium" />
      <Button label="Speichern" class="bg-emerald-500 border-none hover:bg-emerald-600 px-6 py-2 text-sm font-medium" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const qty1 = ref(1);
const qty2 = ref(1);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const cityZip = ref('10115 Berlin');

const selectedCountry = ref('Deutschland');
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

const shippingMethod = ref(null);
</script>