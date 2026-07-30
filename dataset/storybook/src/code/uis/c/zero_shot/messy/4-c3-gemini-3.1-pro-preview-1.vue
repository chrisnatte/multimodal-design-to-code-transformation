<template>
  <div class="max-w-3xl mx-auto p-8 bg-white font-sans text-gray-800">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-10">
      <Button icon="pi pi-times" rounded text severity="secondary" class="bg-slate-100 hover:bg-slate-200 w-10 h-10 shrink-0 text-slate-500" />
      <div>
        <h1 class="text-2xl font-bold text-slate-800 mb-1">Bestellung aufgeben</h1>
        <p class="text-slate-500 text-sm">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="flex w-full mb-8 border-b-[3px] border-slate-100">
      <div class="flex-1 pb-3 text-sm font-medium border-b-[3px] border-emerald-500 -mb-[3px] text-emerald-500">
        Warenkorb
      </div>
      <div class="flex-1 pb-3 text-sm font-medium border-b-[3px] border-emerald-500 -mb-[3px] text-blue-500 text-center">
        Adresse
      </div>
      <div class="flex-1 pb-3 text-sm font-medium text-slate-500 text-right">
        Bestätigung
      </div>
    </div>

    <!-- Cart Section -->
    <div class="mb-8">
      <div class="flex justify-between text-sm font-bold text-slate-800 mb-4 px-2">
        <div class="flex-1">Produkt</div>
        <div class="w-24 text-left">Menge</div>
        <div class="w-24 text-right">Preis</div>
        <div class="w-10"></div>
      </div>

      <div v-for="(item, index) in cart" :key="index" class="flex justify-between items-center py-3 border-b border-slate-100 px-2">
        <div class="flex-1 text-sm text-slate-700">{{ item.name }}</div>
        <div class="w-24">
          <InputNumber v-model="item.quantity" showButtons buttonLayout="stacked" class="w-16 h-8" inputClass="text-center w-full text-sm" />
        </div>
        <div class="w-24 text-right text-sm text-slate-700">{{ item.price.toFixed(2).replace('.', ',') }} €</div>
        <div class="w-10 text-right">
          <Button icon="pi pi-trash" text severity="danger" rounded aria-label="Delete" class="w-8 h-8 p-0 text-red-400 hover:bg-red-50" />
        </div>
      </div>
    </div>

    <!-- Address Section -->
    <div class="mb-8">
      <div class="grid grid-cols-2 gap-6 mb-5">
        <div class="flex flex-col gap-2">
          <label for="firstName" class="text-sm text-slate-700">Vorname</label>
          <InputText id="firstName" v-model="address.firstName" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastName" class="text-sm text-slate-700">Nachname</label>
          <InputText id="lastName" v-model="address.lastName" class="w-full" />
        </div>
      </div>

      <div class="flex flex-col gap-2 mb-5">
        <label for="street" class="text-sm text-slate-700">Straße</label>
        <InputText id="street" v-model="address.street" class="w-full" />
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label for="city" class="text-sm text-slate-700">PLZ / Ort</label>
          <InputText id="city" v-model="address.city" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country" class="text-sm text-slate-700">Land</label>
          <Dropdown id="country" v-model="address.country" :options="countries" class="w-full border-emerald-500 shadow-[0_0_0_1px_#10b981]" />
        </div>
      </div>
    </div>

    <Divider class="my-8 border-slate-100" />

    <!-- Shipping Section -->
    <div class="mb-10">
      <h3 class="text-sm font-bold text-slate-800 mb-4">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center">
          <RadioButton v-model="shippingMethod" inputId="shipping1" name="shipping" value="standard" />
          <label for="shipping1" class="ml-3 text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center">
          <RadioButton v-model="shippingMethod" inputId="shipping2" name="shipping" value="express" />
          <label for="shipping2" class="ml-3 text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center">
          <RadioButton v-model="shippingMethod" inputId="shipping3" name="shipping" value="sameday" />
          <label for="shipping3" class="ml-3 text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider class="my-8 border-slate-100" />

    <!-- Footer Actions -->
    <div class="flex justify-between items-center">
      <Button label="Abbrechen" severity="secondary" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-6 py-2 font-medium" />
      <Button label="Speichern" severity="success" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 px-6 py-2 font-medium" />
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
import Divider from 'primevue/divider';

const cart = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 }
]);

const address = ref({
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

const shippingMethod = ref(null);
</script>