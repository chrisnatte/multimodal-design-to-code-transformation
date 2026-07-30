<template>
  <div class="min-h-screen bg-white flex justify-center py-16 px-4 font-sans text-surface-900">
    <div class="w-full max-w-[728px] flex flex-col gap-4">
      
      <!-- Header -->
      <div class="flex items-start gap-4 mb-6">
        <Button 
          icon="pi pi-times" 
          rounded 
          variant="text" 
          severity="secondary" 
          class="bg-surface-100 hover:bg-surface-200 w-12 h-12 shrink-0" 
          aria-label="Close"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold m-0">Bestellung aufgeben</h1>
          <p class="text-surface-600 m-0 text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Progress Steps -->
      <div class="flex flex-col gap-2 mb-2">
        <div class="flex justify-between text-base">
          <span class="text-primary font-medium">Warenkorb</span>
          <span class="text-primary font-medium">Adresse</span>
          <span class="text-surface-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" class="h-1.5" />
      </div>

      <!-- Data Table -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt" headerStyle="font-weight: 600"></Column>
        <Column header="Menge" headerStyle="font-weight: 600">
          <template #body="{ data }">
            <div class="flex items-center border border-surface-200 rounded-md w-[96px] h-[31px] overflow-hidden">
              <InputText v-model="data.quantity" class="w-full border-none shadow-none px-3 py-1 text-sm h-full rounded-none" />
              <div class="flex flex-col border-l border-surface-200 h-full w-[35px]">
                <button class="flex-1 flex items-center justify-center hover:bg-surface-100 border-b border-surface-200 cursor-pointer">
                  <i class="pi pi-angle-up text-[10px]"></i>
                </button>
                <button class="flex-1 flex items-center justify-center hover:bg-surface-100 cursor-pointer">
                  <i class="pi pi-angle-down text-[10px]"></i>
                </button>
              </div>
            </div>
          </template>
        </Column>
        <Column header="Preis" headerStyle="font-weight: 600">
          <template #body="{ data }">
            {{ formatCurrency(data.price) }}
          </template>
        </Column>
        <Column headerStyle="width: 4rem">
          <template #body>
            <Button icon="pi pi-trash" severity="danger" variant="text" rounded aria-label="Delete" />
          </template>
        </Column>
      </DataTable>

      <Divider class="my-2" />

      <!-- Address Form -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="vorname" class="text-sm text-surface-900">Vorname</label>
          <InputText id="vorname" v-model="form.vorname" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname" class="text-sm text-surface-900">Nachname</label>
          <InputText id="nachname" v-model="form.nachname" />
        </div>
        <div class="flex flex-col gap-2 md:col-span-2">
          <label for="strasse" class="text-sm text-surface-900">Straße</label>
          <InputText id="strasse" v-model="form.strasse" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plzOrt" class="text-sm text-surface-900">PLZ / Ort</label>
          <InputText id="plzOrt" v-model="form.plzOrt" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land" class="text-sm text-surface-900">Land</label>
          <Select id="land" v-model="form.land" :options="countries" optionLabel="name" placeholder="Land auswählen" class="w-full" />
        </div>
      </div>

      <Divider class="my-2" />

      <!-- Shipping Options -->
      <div class="flex flex-col gap-4">
        <span class="font-semibold text-sm text-surface-900">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping1" value="standard" />
          <label for="shipping1" class="text-sm text-surface-700">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping2" value="express" />
          <label for="shipping2" class="text-sm text-surface-700">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping3" value="sameday" />
          <label for="shipping3" class="text-sm text-surface-700">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider class="my-2" />

      <!-- Footer Actions -->
      <div class="flex justify-between items-center mt-2">
        <Button label="Abbrechen" severity="secondary" variant="text" class="bg-surface-100 hover:bg-surface-200 text-surface-900 font-medium px-6 py-2" />
        <Button label="Speichern" class="font-medium px-6 py-2" />
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
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const products = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: '1', price: 79.99 },
  { id: 2, name: 'USB-C Kabel 2m', quantity: '1', price: 14.97 }
]);

const form = ref({
  vorname: 'Max',
  nachname: 'Mustermann',
  strasse: 'Musterstraße 42',
  plzOrt: '10115 Berlin',
  land: { name: 'Deutschland', code: 'DE' }
});

const countries = ref([
  { name: 'Spanien', code: 'ES' },
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
]);

const shipping = ref('standard');

const formatCurrency = (value) => {
  return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
};
</script>