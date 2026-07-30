<template>
  <div class="p-8 max-w-4xl mx-auto bg-white">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-6">
      <Button rounded severity="secondary" text class="!w-[50px] !h-[50px] !bg-slate-100">
        <i class="pi pi-times-circle text-2xl text-slate-600"></i>
      </Button>
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-800 m-0">Bestellung aufgeben</h1>
        <p class="text-base text-slate-500 m-0">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="flex flex-col gap-2 mb-4">
      <div class="flex justify-between items-center">
        <span class="text-base text-slate-800">Warenkorb</span>
        <span class="text-base text-primary-500">Adresse</span>
        <span class="text-base text-slate-400">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :showValue="false" class="!h-1.5" />
    </div>

    <!-- Cart DataTable -->
    <DataTable :value="cartItems" class="mb-6">
      <Column field="product" header="Produkt"></Column>
      <Column header="Menge" style="width: 156px">
        <template #body="slotProps">
          <InputNumber v-model="slotProps.data.qty" showButtons buttonLayout="stacked" inputStyle="width: 3rem" />
        </template>
      </Column>
      <Column field="price" header="Preis" style="width: 92px"></Column>
      <Column style="width: 64px">
        <template #body="slotProps">
          <Button icon="pi pi-trash" severity="danger" text @click="removeItem(slotProps.index)" />
        </template>
      </Column>
    </DataTable>

    <Divider />

    <!-- Address Form -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <div class="flex flex-col gap-2">
        <label for="firstname" class="text-sm text-slate-700">Vorname</label>
        <InputText id="firstname" v-model="firstName" placeholder="Name eingeben" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="lastname" class="text-sm text-slate-700">Nachname</label>
        <InputText id="lastname" v-model="lastName" placeholder="Name eingeben" />
      </div>
      <div class="flex flex-col gap-2 col-span-2">
        <label for="street" class="text-sm text-slate-700">Straße</label>
        <InputText id="street" v-model="street" placeholder="Name eingeben" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="zip" class="text-sm text-slate-700">PLZ / Ort</label>
        <InputText id="zip" v-model="zipCity" placeholder="Name eingeben" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="country" class="text-sm text-slate-700">Land</label>
        <Select id="country" v-model="selectedCountry" :options="countries" optionLabel="name" placeholder="Deutschland" class="w-full" />
      </div>
    </div>

    <Divider />

    <!-- Shipping -->
    <div class="flex flex-col gap-4 mb-6">
      <span class="text-sm font-semibold text-slate-800">Versandart</span>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shippingMethod" inputId="shipping1" name="shipping" value="standard" />
        <label for="shipping1" class="text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shippingMethod" inputId="shipping2" name="shipping" value="express" />
        <label for="shipping2" class="text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
      </div>
      <div class="flex items-center gap-2">
        <RadioButton v-model="shippingMethod" inputId="shipping3" name="shipping" value="sameday" />
        <label for="shipping3" class="text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
      </div>
    </div>

    <Divider />

    <!-- Actions -->
    <div class="flex justify-between items-center">
      <Button label="Abbrechen" severity="secondary" />
      <Button label="Speichern" severity="success" />
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
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Divider from 'primevue/divider';
import RadioButton from 'primevue/radiobutton';

const cartItems = ref([
  { product: 'Wireless Kopfhörer', qty: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', qty: 1, price: '14,97 €' }
]);

const removeItem = (index) => {
  cartItems.value.splice(index, 1);
};

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const zipCity = ref('10115 Berlin');

const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
]);
const selectedCountry = ref({ name: 'Deutschland' });

const shippingMethod = ref('standard');
</script>