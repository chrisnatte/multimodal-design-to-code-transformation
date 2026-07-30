<template>
  <div class="mx-auto max-w-4xl p-8">
    <div class="mb-8 flex items-start gap-4">
      <Button icon="pi pi-times" rounded text severity="secondary" class="mt-1" />
      <div>
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <div class="mb-8 flex w-full">
      <div class="flex-1 border-b-4 border-emerald-500 pb-2 text-center font-medium text-emerald-500">Warenkorb</div>
      <div class="flex-1 border-b-4 border-slate-200 pb-2 text-center font-medium text-sky-500">Adresse</div>
      <div class="flex-1 border-b-4 border-slate-200 pb-2 text-center font-medium text-slate-500">Bestätigung</div>
    </div>

    <div class="mb-8">
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt"></Column>
        <Column field="quantity" header="Menge">
          <template #body="slotProps">
            <div class="flex items-center gap-2">
              <InputText v-model="slotProps.data.quantity" class="w-16 text-center" />
              <div class="flex flex-col">
                <Button icon="pi pi-angle-up" text class="!p-0 !h-4" />
                <Button icon="pi pi-angle-down" text class="!p-0 !h-4" />
              </div>
            </div>
          </template>
        </Column>
        <Column field="price" header="Preis">
          <template #body="slotProps">
            {{ slotProps.data.price }} €
          </template>
        </Column>
        <Column>
          <template #body>
            <Button icon="pi pi-trash" text severity="danger" />
          </template>
        </Column>
      </DataTable>
    </div>

    <Divider />

    <div class="mb-8 grid grid-cols-2 gap-6">
      <div class="flex flex-col gap-2">
        <label for="vorname" class="text-sm font-medium text-slate-700">Vorname</label>
        <InputText id="vorname" v-model="vorname" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="nachname" class="text-sm font-medium text-slate-700">Nachname</label>
        <InputText id="nachname" v-model="nachname" />
      </div>
      <div class="col-span-2 flex flex-col gap-2">
        <label for="strasse" class="text-sm font-medium text-slate-700">Straße</label>
        <InputText id="strasse" v-model="strasse" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="plz" class="text-sm font-medium text-slate-700">PLZ / Ort</label>
        <InputText id="plz" v-model="plz" />
      </div>
      <div class="flex flex-col gap-2">
        <label for="land" class="text-sm font-medium text-slate-700">Land</label>
        <Select id="land" v-model="land" :options="laender" optionLabel="name" class="w-full" />
      </div>
    </div>

    <Divider />

    <div class="mb-8">
      <h3 class="mb-4 font-bold text-slate-800">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" inputId="standard" value="standard" />
          <label for="standard" class="text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" inputId="express" value="express" />
          <label for="express" class="text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="versandart" inputId="sameday" value="sameday" />
          <label for="sameday" class="text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider />

    <div class="flex justify-between pt-4">
      <Button label="Abbrechen" severity="secondary" text class="bg-slate-100" />
      <Button label="Speichern" severity="success" class="bg-emerald-500 border-emerald-500" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';
import Divider from 'primevue/divider';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: '1', price: '79,99' },
  { name: 'USB-C Kabel 2m', quantity: '1', price: '14,97' }
]);

const vorname = ref('Max');
const nachname = ref('Mustermann');
const strasse = ref('Musterstraße 42');
const plz = ref('10115 Berlin');

const land = ref({ name: 'Deutschland', code: 'DE' });
const laender = ref([
  { name: 'Spanien', code: 'ES' },
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
]);

const versandart = ref('standard');
</script>