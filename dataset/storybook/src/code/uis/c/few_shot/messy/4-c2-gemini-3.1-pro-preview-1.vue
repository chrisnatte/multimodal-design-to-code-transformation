<template>
  <div class="mx-auto max-w-4xl bg-white p-8 font-sans text-slate-800">
    <!-- Header -->
    <div class="mb-8 flex items-start gap-4">
      <Button icon="pi pi-times-circle" text rounded class="!text-slate-400 hover:!text-slate-600" size="large" />
      <div>
        <h1 class="text-2xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-sm text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps Indicator -->
    <div class="mb-8 flex w-full text-sm font-medium">
      <div class="flex-1 border-b-2 border-emerald-500 pb-2 text-emerald-500">Warenkorb</div>
      <div class="flex-1 border-b-2 border-emerald-500 pb-2 text-emerald-500">Adresse</div>
      <div class="flex-1 border-b-2 border-slate-200 pb-2 text-right text-slate-500">Bestätigung</div>
    </div>

    <!-- Cart Table -->
    <div class="mb-8">
      <DataTable :value="cartItems" class="p-datatable-sm">
        <Column field="name" header="Produkt" class="w-1/2"></Column>
        <Column header="Menge" class="w-1/4">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" showButtons buttonLayout="stacked" class="w-16" inputClass="text-center" />
          </template>
        </Column>
        <Column field="price" header="Preis" class="w-1/4"></Column>
        <Column class="w-12 text-right">
          <template #body>
            <Button icon="pi pi-trash" text rounded severity="danger" class="!p-2" />
          </template>
        </Column>
      </DataTable>
    </div>

    <div class="mb-8 border-t border-slate-200"></div>

    <!-- Address Form -->
    <div class="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="flex flex-col gap-2">
        <label for="firstname" class="text-sm font-medium text-slate-700">Vorname</label>
        <InputText id="firstname" v-model="form.firstName" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastname" class="text-sm font-medium text-slate-700">Nachname</label>
        <InputText id="lastname" v-model="form.lastName" />
      </div>
      <div class="col-span-1 flex flex-col gap-2 md:col-span-2">
        <label for="street" class="text-sm font-medium text-slate-700">Straße</label>
        <InputText id="street" v-model="form.street" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="city" class="text-sm font-medium text-slate-700">PLZ / Ort</label>
        <InputText id="city" v-model="form.city" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country" class="text-sm font-medium text-slate-700">Land</label>
        <Dropdown id="country" v-model="form.country" :options="countries" class="w-full" />
      </div>
    </div>

    <div class="mb-8 border-t border-slate-200"></div>

    <!-- Shipping Method -->
    <div class="mb-12">
      <h3 class="mb-4 text-sm font-bold text-slate-800">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping-standard" name="shipping" value="standard" />
          <label for="shipping-standard" class="text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping-express" name="shipping" value="express" />
          <label for="shipping-express" class="text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping-sameday" name="shipping" value="sameday" />
          <label for="shipping-sameday" class="text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <div class="mb-8 border-t border-slate-200"></div>

    <!-- Footer Actions -->
    <div class="flex items-center justify-between">
      <Button label="Abbrechen" severity="secondary" text class="bg-slate-100 hover:bg-slate-200" />
      <Button label="Speichern" severity="success" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';

const cartItems = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
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