<template>
  <div class="max-w-3xl mx-auto p-8 bg-white font-sans">
    <!-- Header -->
    <div class="flex items-start gap-4 mb-10">
      <Button icon="pi pi-times" rounded text class="bg-slate-100 text-slate-500 hover:bg-slate-200 w-10 h-10 flex-shrink-0" />
      <div>
        <h1 class="text-2xl font-bold text-slate-800 mb-1">Bestellung aufgeben</h1>
        <p class="text-slate-500 text-sm">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Stepper -->
    <div class="flex border-b-2 border-slate-100 mb-8 relative">
      <div class="flex-1 pb-3 text-emerald-500 font-medium text-sm relative">
        Warenkorb
        <div class="absolute bottom-[-2px] left-0 w-full h-[2px] bg-emerald-500"></div>
      </div>
      <div class="flex-1 pb-3 text-blue-500 font-medium text-sm text-center">
        Adresse
      </div>
      <div class="flex-1 pb-3 text-slate-500 font-medium text-sm text-right">
        Bestätigung
      </div>
    </div>

    <!-- Cart Section -->
    <div class="mb-10">
      <div class="flex text-sm font-bold text-slate-800 mb-4 px-2">
        <div class="flex-[2]">Produkt</div>
        <div class="flex-1">Menge</div>
        <div class="flex-1 text-right pr-12">Preis</div>
      </div>

      <div class="flex flex-col gap-4">
        <!-- Item 1 -->
        <div class="flex items-center py-3 border-t border-slate-100 px-2">
          <div class="flex-[2] text-slate-700 text-sm">Wireless Kopfhörer</div>
          <div class="flex-1">
            <InputNumber v-model="cart[0].quantity" showButtons buttonLayout="stacked" class="w-20" inputClass="text-center py-2" decrementButtonClass="p-button-secondary p-button-text" incrementButtonClass="p-button-secondary p-button-text" incrementButtonIcon="pi pi-angle-up" decrementButtonIcon="pi pi-angle-down" />
          </div>
          <div class="flex-1 flex justify-end items-center gap-4">
            <span class="text-slate-700 text-sm">79,99 €</span>
            <Button icon="pi pi-trash" text severity="danger" rounded class="w-8 h-8 p-0 text-red-400 hover:bg-red-50" />
          </div>
        </div>

        <!-- Item 2 -->
        <div class="flex items-center py-3 border-t border-slate-100 px-2">
          <div class="flex-[2] text-slate-700 text-sm">USB-C Kabel 2m</div>
          <div class="flex-1">
            <InputNumber v-model="cart[1].quantity" showButtons buttonLayout="stacked" class="w-20" inputClass="text-center py-2" decrementButtonClass="p-button-secondary p-button-text" incrementButtonClass="p-button-secondary p-button-text" incrementButtonIcon="pi pi-angle-up" decrementButtonIcon="pi pi-angle-down" />
          </div>
          <div class="flex-1 flex justify-end items-center gap-4">
            <span class="text-slate-700 text-sm">14,97 €</span>
            <Button icon="pi pi-trash" text severity="danger" rounded class="w-8 h-8 p-0 text-red-400 hover:bg-red-50" />
          </div>
        </div>
      </div>
    </div>

    <!-- Address Section -->
    <div class="mb-10 pt-8 border-t border-slate-100">
      <div class="flex flex-col gap-5">
        <div class="flex gap-4">
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm text-slate-700">Vorname</label>
            <InputText v-model="address.firstName" class="w-full" />
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm text-slate-700">Nachname</label>
            <InputText v-model="address.lastName" class="w-full" />
          </div>
        </div>
        
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-700">Straße</label>
          <InputText v-model="address.street" class="w-full" />
        </div>

        <div class="flex gap-4">
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm text-slate-700">PLZ / Ort</label>
            <InputText v-model="address.cityZip" class="w-full" />
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm text-slate-700">Land</label>
            <Dropdown v-model="address.country" :options="countries" optionLabel="name" class="w-full border-emerald-500" />
          </div>
        </div>
      </div>
    </div>

    <!-- Shipping Section -->
    <div class="mb-10 pt-8 border-t border-slate-100">
      <h3 class="text-sm font-bold text-slate-800 mb-4">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping-standard" value="standard" />
          <label for="shipping-standard" class="text-slate-700 text-sm cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping-express" value="express" />
          <label for="shipping-express" class="text-slate-700 text-sm cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping-sameday" value="sameday" />
          <label for="shipping-sameday" class="text-slate-700 text-sm cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <!-- Footer Actions -->
    <div class="flex justify-between pt-8 border-t border-slate-100">
      <Button label="Abbrechen" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 px-6 py-2 font-medium" />
      <Button label="Speichern" class="bg-emerald-500 border-none hover:bg-emerald-600 px-6 py-2 font-medium" />
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

const cart = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 }
]);

const address = ref({
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstraße 42',
  cityZip: '10115 Berlin',
  country: { name: 'Deutschland', code: 'DE' }
});

const countries = ref([
  { name: 'Spanien', code: 'ES' },
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
]);

const shippingMethod = ref(null);
</script>