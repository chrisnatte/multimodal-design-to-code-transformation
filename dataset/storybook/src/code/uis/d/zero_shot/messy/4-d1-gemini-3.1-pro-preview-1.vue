<template>
  <div class="min-h-screen bg-white flex justify-center py-12 font-sans text-surface-900">
    <div class="w-full max-w-3xl px-4">
      
      <!-- Header -->
      <div class="flex items-start gap-4 mb-10">
        <Button icon="pi pi-times" rounded text severity="secondary" class="bg-surface-100 hover:bg-surface-200 w-12 h-12 shrink-0" />
        <div>
          <h1 class="text-3xl font-bold mb-1">Bestellung aufgeben</h1>
          <p class="text-surface-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Stepper -->
      <div class="mb-10">
        <div class="flex justify-between text-base mb-3 px-1">
          <span class="text-surface-500">Warenkorb</span>
          <span class="text-emerald-500 font-medium">Adresse</span>
          <span class="text-surface-500">Bestätigung</span>
        </div>
        <div class="flex h-1.5 rounded-full bg-surface-200 overflow-hidden">
          <div class="w-1/2 bg-emerald-500 rounded-full"></div>
        </div>
      </div>

      <!-- Product List -->
      <div class="mb-8">
        <div class="flex text-sm font-semibold text-surface-900 border-b border-surface-200 pb-3 mb-4 px-2">
          <div class="flex-1">Produkt</div>
          <div class="w-32">Menge</div>
          <div class="w-24">Preis</div>
          <div class="w-12"></div>
        </div>
        
        <div class="flex flex-col gap-4">
          <div v-for="(item, index) in products" :key="index" class="flex items-center px-2">
            <div class="flex-1 text-sm">{{ item.name }}</div>
            <div class="w-32">
              <InputNumber 
                v-model="item.quantity" 
                showButtons 
                buttonLayout="stacked" 
                class="w-16 h-10"
                inputClass="w-10 text-center text-sm"
              />
            </div>
            <div class="w-24 text-sm">{{ item.price }} €</div>
            <div class="w-12 text-right">
              <Button icon="pi pi-trash" text rounded severity="danger" class="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <Divider class="my-8" />

      <!-- Address Form -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="flex flex-col gap-2">
          <label for="firstName" class="text-sm text-surface-700">Vorname</label>
          <InputText id="firstName" v-model="form.firstName" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastName" class="text-sm text-surface-700">Nachname</label>
          <InputText id="lastName" v-model="form.lastName" class="w-full" />
        </div>
        <div class="col-span-1 md:col-span-2 flex flex-col gap-2">
          <label for="street" class="text-sm text-surface-700">Straße</label>
          <InputText id="street" v-model="form.street" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="city" class="text-sm text-surface-700">PLZ / Ort</label>
          <InputText id="city" v-model="form.city" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country" class="text-sm text-surface-700">Land</label>
          <Select id="country" v-model="form.country" :options="countries" class="w-full" />
        </div>
      </div>

      <Divider class="my-8" />

      <!-- Shipping Options -->
      <div class="mb-8">
        <h3 class="text-sm font-semibold text-surface-900 mb-4">Versandart</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <RadioButton v-model="shipping" inputId="shipping1" value="standard" />
            <label for="shipping1" class="text-sm text-surface-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="shipping" inputId="shipping2" value="express" />
            <label for="shipping2" class="text-sm text-surface-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="shipping" inputId="shipping3" value="sameday" />
            <label for="shipping3" class="text-sm text-surface-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="my-8" />

      <!-- Footer Buttons -->
      <div class="flex justify-between items-center">
        <Button label="Abbrechen" text class="bg-surface-100 text-surface-700 hover:bg-surface-200 font-medium px-4 py-2" />
        <Button label="Speichern" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600 text-white font-medium px-6 py-2" />
      </div>

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
import Divider from 'primevue/divider';

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97' }
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

const shipping = ref('standard');
</script>