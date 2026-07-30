<template>
  <div class="mx-auto flex max-w-4xl flex-col gap-8 bg-white p-8">
    <!-- Header -->
    <div class="flex items-start gap-4">
      <Button
        icon="pi pi-times"
        rounded
        text
        severity="secondary"
        class="mt-1 bg-slate-100 text-slate-600 hover:bg-slate-200"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-sm text-slate-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </div>

    <!-- Progress Tabs -->
    <div class="flex w-full text-sm font-medium">
      <div class="flex-1 border-b-2 border-emerald-500 pb-2 text-emerald-500">
        Warenkorb
      </div>
      <div class="flex-1 border-b-2 border-emerald-500 pb-2 text-center text-blue-500">
        Adresse
      </div>
      <div class="flex-1 border-b-2 border-slate-200 pb-2 text-right text-slate-500">
        Bestätigung
      </div>
    </div>

    <!-- Cart Table -->
    <DataTable :value="products" class="w-full">
      <Column field="name" header="Produkt" headerClass="text-sm text-slate-600 font-medium" bodyClass="text-sm text-slate-800"></Column>
      <Column header="Menge" headerClass="text-sm text-slate-600 font-medium w-32">
        <template #body="slotProps">
          <InputNumber
            v-model="slotProps.data.quantity"
            showButtons
            buttonLayout="stacked"
            class="w-16"
            inputClass="w-full text-center text-sm"
          />
        </template>
      </Column>
      <Column field="price" header="Preis" headerClass="text-sm text-slate-600 font-medium w-32" bodyClass="text-sm text-slate-800">
        <template #body="slotProps">
          {{ slotProps.data.price.toFixed(2).replace('.', ',') }} €
        </template>
      </Column>
      <Column headerClass="w-12" bodyClass="text-right">
        <template #body>
          <Button icon="pi pi-trash" text severity="danger" rounded />
        </template>
      </Column>
    </DataTable>

    <Divider class="!my-0" />

    <!-- Address Form -->
    <div class="flex flex-col gap-6">
      <div class="flex gap-6">
        <div class="flex flex-1 flex-col gap-2">
          <label for="vorname" class="text-sm text-slate-600">Vorname</label>
          <InputText id="vorname" v-model="firstName" class="w-full" />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <label for="nachname" class="text-sm text-slate-600">Nachname</label>
          <InputText id="nachname" v-model="lastName" class="w-full" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="strasse" class="text-sm text-slate-600">Straße</label>
        <InputText id="strasse" v-model="street" class="w-full" />
      </div>
      <div class="flex gap-6">
        <div class="flex flex-1 flex-col gap-2">
          <label for="plz" class="text-sm text-slate-600">PLZ / Ort</label>
          <InputText id="plz" v-model="city" class="w-full" />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <label for="land" class="text-sm text-slate-600">Land</label>
          <Dropdown
            id="land"
            v-model="selectedCountry"
            :options="countries"
            class="w-full"
            panelClass="text-sm"
          />
        </div>
      </div>
    </div>

    <Divider class="!my-0" />

    <!-- Shipping Method -->
    <div class="flex flex-col gap-4">
      <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping1" name="shipping" value="standard" />
          <label for="shipping1" class="text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping2" name="shipping" value="express" />
          <label for="shipping2" class="text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="shippingMethod" inputId="shipping3" name="shipping" value="sameday" />
          <label for="shipping3" class="text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider class="!my-0" />

    <!-- Footer Actions -->
    <div class="flex items-center justify-between pt-2">
      <Button
        label="Abbrechen"
        severity="secondary"
        text
        class="bg-slate-100 text-slate-700 hover:bg-slate-200"
      />
      <Button
        label="Speichern"
        class="border-none bg-emerald-500 px-6 hover:bg-emerald-600"
      />
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
import Divider from 'primevue/divider';

const products = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 }
]);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const city = ref('10115 Berlin');
const selectedCountry = ref('Deutschland');
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

const shippingMethod = ref('standard');
</script>