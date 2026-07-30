<template>
  <div class="flex justify-center p-8 bg-white min-h-screen font-sans text-surface-900">
    <div class="w-full max-w-[728px] flex flex-col gap-6">
      <!-- Header -->
      <div class="flex items-start gap-4">
        <Button
          icon="pi pi-times"
          rounded
          severity="secondary"
          class="!bg-surface-100 !border-none !text-surface-600 w-12 h-12 shrink-0"
          aria-label="Schließen"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold m-0">Bestellung aufgeben</h1>
          <p class="text-surface-600 m-0">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Progress -->
      <div class="flex flex-col gap-2 mt-4">
        <div class="flex justify-between text-base">
          <span class="text-primary">Warenkorb</span>
          <span class="text-primary">Adresse</span>
          <span class="text-surface-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" class="h-1.5" />
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt"></Column>
        <Column field="quantity" header="Menge">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" showButtons buttonLayout="stacked" class="w-20" />
          </template>
        </Column>
        <Column field="price" header="Preis">
          <template #body="{ data }">
            {{ data.price }}
          </template>
        </Column>
        <Column>
          <template #body>
            <Button icon="pi pi-trash" severity="danger" variant="text" rounded aria-label="Löschen" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <!-- Form -->
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="vorname">Vorname</label>
          <InputText id="vorname" v-model="form.vorname" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname">Nachname</label>
          <InputText id="nachname" v-model="form.nachname" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="strasse">Straße</label>
          <InputText id="strasse" v-model="form.strasse" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plz">PLZ / Ort</label>
          <InputText id="plz" v-model="form.plz" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land">Land</label>
          <Select id="land" v-model="form.land" :options="countries" placeholder="Deutschland" />
        </div>
      </div>

      <Divider />

      <!-- Shipping -->
      <div class="flex flex-col gap-4">
        <span class="font-semibold">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping1" value="standard" />
          <label for="shipping1">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping2" value="express" />
          <label for="shipping2">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping3" value="sameday" />
          <label for="shipping3">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider />

      <!-- Footer -->
      <div class="flex justify-between items-center">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
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

const form = ref({
  vorname: 'Max',
  nachname: 'Mustermann',
  strasse: 'Musterstraße 42',
  plz: '10115 Berlin',
  land: 'Deutschland'
});

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

const shipping = ref('standard');
</script>