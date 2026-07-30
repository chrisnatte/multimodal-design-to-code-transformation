<template>
  <div class="min-h-screen bg-white flex justify-center py-12">
    <div class="w-full max-w-3xl px-4">
      <!-- Header -->
      <div class="flex items-start gap-4 mb-12">
        <div class="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
          <i class="pi pi-times text-xl"></i>
        </div>
        <div>
          <h1 class="text-3xl font-bold text-slate-800 mb-1">Bestellung aufgeben</h1>
          <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Stepper -->
      <div class="mb-8">
        <div class="flex justify-between text-sm mb-2">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-blue-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <div class="h-1.5 flex rounded-full overflow-hidden bg-slate-200">
          <div class="w-1/2 bg-emerald-500"></div>
        </div>
      </div>

      <!-- Product Table -->
      <div class="mb-8">
        <div class="grid grid-cols-12 gap-4 border-b border-slate-200 pb-2 mb-4 text-sm font-semibold text-slate-800">
          <div class="col-span-6">Produkt</div>
          <div class="col-span-3">Menge</div>
          <div class="col-span-2">Preis</div>
          <div class="col-span-1"></div>
        </div>

        <div class="grid grid-cols-12 gap-4 items-center py-3 border-b border-slate-100">
          <div class="col-span-6 text-sm text-slate-700">Wireless Kopfhörer</div>
          <div class="col-span-3">
            <InputNumber v-model="qty1" showButtons buttonLayout="vertical" style="width: 4rem" decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-angle-up" decrementButtonIcon="pi pi-angle-down" />
          </div>
          <div class="col-span-2 text-sm text-slate-700">79,99 €</div>
          <div class="col-span-1 flex justify-end">
            <Button icon="pi pi-trash" text severity="danger" aria-label="Delete" />
          </div>
        </div>

        <div class="grid grid-cols-12 gap-4 items-center py-3">
          <div class="col-span-6 text-sm text-slate-700">USB-C Kabel 2m</div>
          <div class="col-span-3">
            <InputNumber v-model="qty2" showButtons buttonLayout="vertical" style="width: 4rem" decrementButtonClass="p-button-secondary" incrementButtonClass="p-button-secondary" incrementButtonIcon="pi pi-angle-up" decrementButtonIcon="pi pi-angle-down" />
          </div>
          <div class="col-span-2 text-sm text-slate-700">14,97 €</div>
          <div class="col-span-1 flex justify-end">
            <Button icon="pi pi-trash" text severity="danger" aria-label="Delete" />
          </div>
        </div>
      </div>

      <Divider class="mb-8" />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-6 mb-8">
        <div class="flex flex-col gap-2">
          <label for="firstname" class="text-sm text-slate-700">Vorname</label>
          <InputText id="firstname" v-model="firstname" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname" class="text-sm text-slate-700">Nachname</label>
          <InputText id="lastname" v-model="lastname" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="street" class="text-sm text-slate-700">Straße</label>
          <InputText id="street" v-model="street" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="city" class="text-sm text-slate-700">PLZ / Ort</label>
          <InputText id="city" v-model="city" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country" class="text-sm text-slate-700">Land</label>
          <Dropdown id="country" v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Select a Country" class="w-full" />
        </div>
      </div>

      <Divider class="mb-8" />

      <!-- Shipping Method -->
      <div class="mb-8">
        <h3 class="text-sm font-semibold text-slate-800 mb-4">Versandart</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center">
            <RadioButton v-model="shipping" inputId="shipping1" name="shipping" value="Standard" />
            <label for="shipping1" class="ml-2 text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center">
            <RadioButton v-model="shipping" inputId="shipping2" name="shipping" value="Express" />
            <label for="shipping2" class="ml-2 text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center">
            <RadioButton v-model="shipping" inputId="shipping3" name="shipping" value="SameDay" />
            <label for="shipping3" class="ml-2 text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="mb-8" />

      <!-- Actions -->
      <div class="flex justify-between">
        <Button label="Abbrechen" severity="secondary" text class="bg-slate-100 hover:bg-slate-200 text-slate-700" />
        <Button label="Speichern" class="bg-emerald-500 hover:bg-emerald-600 border-none" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';

const qty1 = ref(1);
const qty2 = ref(1);

const firstname = ref('Max');
const lastname = ref('Mustermann');
const street = ref('Musterstraße 42');
const city = ref('10115 Berlin');

const selectedCountry = ref({ name: 'Deutschland', code: 'DE' });
const countries = ref([
  { name: 'Spanien', code: 'ES' },
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
]);

const shipping = ref('Standard');
</script>