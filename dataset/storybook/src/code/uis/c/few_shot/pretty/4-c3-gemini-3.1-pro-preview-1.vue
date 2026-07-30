<template>
  <div class="mx-auto flex max-w-3xl flex-col gap-8 p-8 font-sans text-slate-800">
    <!-- Header -->
    <div class="flex items-start gap-4">
      <Button
        icon="pi pi-times"
        rounded
        text
        severity="secondary"
        class="!h-8 !w-8 bg-slate-100 text-slate-500"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-sm text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="flex w-full text-sm font-medium">
      <div class="flex-1 border-b-2 border-emerald-500 pb-2 text-emerald-500">Warenkorb</div>
      <div class="flex-1 border-b-2 border-slate-200 pb-2 text-center text-blue-500">Adresse</div>
      <div class="flex-1 border-b-2 border-slate-200 pb-2 text-right text-slate-500">Bestätigung</div>
    </div>

    <!-- Cart Table -->
    <DataTable :value="cartItems" class="w-full text-sm">
      <Column field="product" header="Produkt" class="w-1/2"></Column>
      <Column field="quantity" header="Menge">
        <template #body="{ data }">
          <div class="flex w-16 items-center overflow-hidden rounded-md border border-slate-300">
            <input
              type="text"
              :value="data.quantity"
              class="w-full bg-transparent py-1 text-center outline-none"
              readonly
            />
            <div class="flex flex-col border-l border-slate-300 bg-slate-50">
              <button class="px-1 py-0.5 text-slate-500 hover:bg-slate-200">
                <i class="pi pi-angle-up text-[10px]"></i>
              </button>
              <button class="border-t border-slate-300 px-1 py-0.5 text-slate-500 hover:bg-slate-200">
                <i class="pi pi-angle-down text-[10px]"></i>
              </button>
            </div>
          </div>
        </template>
      </Column>
      <Column field="price" header="Preis">
        <template #body="{ data }"> {{ data.price }} € </template>
      </Column>
      <Column>
        <template #body>
          <Button icon="pi pi-trash" text severity="danger" rounded class="!h-8 !w-8" />
        </template>
      </Column>
    </DataTable>

    <Divider class="!my-0" />

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-x-4 gap-y-6">
      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Vorname</label>
        <InputText v-model="firstName" placeholder="Max" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Nachname</label>
        <InputText v-model="lastName" placeholder="Mustermann" />
      </div>
      <div class="col-span-2 flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Straße</label>
        <InputText v-model="street" placeholder="Musterstraße 42" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">PLZ / Ort</label>
        <InputText v-model="cityZip" placeholder="10115 Berlin" />
      </div>
      <div class="flex flex-col gap-1.5">
        <label class="text-sm text-slate-700">Land</label>
        <Select
          v-model="selectedCountry"
          :options="countries"
          placeholder="Deutschland"
          class="w-full"
        />
      </div>
    </div>

    <Divider class="!my-0" />

    <!-- Shipping Method -->
    <div class="flex flex-col gap-4">
      <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping1" value="standard" />
          <label for="shipping1" class="text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping2" value="express" />
          <label for="shipping2" class="text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="shipping3" value="sameday" />
          <label for="shipping3" class="text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider class="!my-0" />

    <!-- Footer Actions -->
    <div class="flex items-center justify-between pt-2">
      <Button
        label="Abbrechen"
        class="!border-none !bg-slate-100 !text-slate-700 hover:!bg-slate-200"
      />
      <Button
        label="Speichern"
        class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Divider from 'primevue/divider';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97' }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const cityZip = ref('10115 Berlin');
const selectedCountry = ref('Deutschland');
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

const shippingMethod = ref('standard');
</script>