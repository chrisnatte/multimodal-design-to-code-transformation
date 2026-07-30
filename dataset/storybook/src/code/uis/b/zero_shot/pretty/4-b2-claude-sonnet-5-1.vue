<template>
  <div class="w-full max-w-[1920px] bg-white p-8">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <Button icon="pi pi-times-circle" rounded text severity="secondary" class="!w-[50px] !h-[50px]" aria-label="Schließen" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0">Bestellung aufgeben</h1>
        <p class="text-base m-0">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="flex flex-col items-center gap-4 max-w-[728px] mx-auto">
      <!-- Steps -->
      <div class="flex flex-col gap-2 w-full">
        <div class="flex items-center justify-between w-full">
          <span class="text-base">Warenkorb</span>
          <span class="text-base">Adresse</span>
          <span class="text-base">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" style="height: 6px" />
      </div>

      <!-- Product Table -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt"></Column>
        <Column header="Menge" style="width: 156px">
          <template #body="slotProps">
            <InputNumber v-model="slotProps.data.quantity" showButtons buttonLayout="stacked" :min="1" inputStyle="width: 96px" />
          </template>
        </Column>
        <Column field="price" header="Preis" style="width: 92px">
          <template #body="slotProps">
            {{ slotProps.data.price }}
          </template>
        </Column>
        <Column style="width: 64px">
          <template #body="slotProps">
            <Button icon="pi pi-trash" text severity="danger" @click="removeProduct(slotProps.data)" aria-label="Löschen" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-4 w-full">
        <div class="flex flex-col gap-2">
          <label for="vorname">Vorname</label>
          <InputText id="vorname" v-model="vorname" fluid />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname">Nachname</label>
          <InputText id="nachname" v-model="nachname" fluid />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="strasse">Straße</label>
          <InputText id="strasse" v-model="strasse" fluid />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plzort">PLZ / Ort</label>
          <InputText id="plzort" v-model="plzOrt" fluid />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land">Land</label>
          <Select id="land" v-model="land" :options="countries" optionLabel="name" placeholder="Land" fluid />
        </div>
      </div>

      <Divider />

      <!-- Shipping Options -->
      <div class="flex flex-col gap-4 w-full">
        <span class="font-semibold text-sm">Versandart</span>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" inputId="shipping1" name="shipping" value="standard" />
            <label for="shipping1">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" inputId="shipping2" name="shipping" value="express" />
            <label for="shipping2">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" inputId="shipping3" name="shipping" value="sameday" />
            <label for="shipping3">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider />

      <!-- Footer Buttons -->
      <div class="flex items-center justify-between w-full">
        <Button label="Abbrechen" severity="secondary" @click="onCancel" />
        <Button label="Speichern" @click="onSave" />
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

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
]);

const removeProduct = (product) => {
  products.value = products.value.filter((p) => p !== product);
};

const vorname = ref('Max');
const nachname = ref('Mustermann');
const strasse = ref('Musterstraße 42');
const plzOrt = ref('10115 Berlin');

const countries = ref([
  { name: 'Deutschland', code: 'DE' },
  { name: 'Spanien', code: 'ES' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
]);
const land = ref(countries.value[0]);

const shipping = ref('standard');

const onCancel = () => {};
const onSave = () => {};
</script>