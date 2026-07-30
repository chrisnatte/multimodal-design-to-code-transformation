<template>
  <div class="bg-white min-h-screen p-16 flex flex-col gap-16">
    <!-- Header -->
    <div class="flex items-center gap-4">
      <Button icon="pi pi-times" rounded variant="text" severity="secondary" class="bg-surface-100 w-[50px] h-[50px]" />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold m-0 text-surface-900">Bestellung aufgeben</h1>
        <p class="text-base m-0 text-surface-600">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex flex-col gap-4 w-[728px]">
      <!-- Progress -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-center">
          <span class="text-base text-surface-900">Warenkorb</span>
          <span class="text-base text-surface-900">Adresse</span>
          <span class="text-base text-surface-900">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" style="height: 6px" />
      </div>

      <!-- DataTable -->
      <div class="px-4">
        <DataTable :value="products" class="w-full">
          <Column field="name" header="Produkt"></Column>
          <Column header="Menge">
            <template #body="slotProps">
              <div class="flex items-center">
                <InputText v-model="slotProps.data.quantity" class="w-16 rounded-r-none text-center" />
                <div class="flex flex-col">
                  <Button icon="pi pi-angle-up" class="p-0 h-4 w-6 rounded-none rounded-tr" severity="secondary" variant="outlined" />
                  <Button icon="pi pi-angle-down" class="p-0 h-4 w-6 rounded-none rounded-br" severity="secondary" variant="outlined" />
                </div>
              </div>
            </template>
          </Column>
          <Column field="price" header="Preis">
            <template #body="slotProps">
              {{ slotProps.data.price.toFixed(2).replace('.', ',') }} €
            </template>
          </Column>
          <Column>
            <template #body="slotProps">
              <Button icon="pi pi-trash" severity="danger" variant="text" rounded />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider />

      <!-- Form Grid -->
      <div class="grid grid-cols-2 gap-4 px-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-900">Vorname</label>
          <InputText v-model="form.firstName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-900">Nachname</label>
          <InputText v-model="form.lastName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm text-surface-900">Straße</label>
          <InputText v-model="form.street" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-900">PLZ / Ort</label>
          <InputText v-model="form.city" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-surface-900">Land</label>
          <Select v-model="form.country" :options="countries" optionLabel="name" placeholder="Deutschland" class="w-full" />
        </div>
      </div>

      <Divider />

      <!-- Versandart -->
      <div class="flex flex-col gap-4 px-4">
        <span class="font-semibold text-sm text-surface-900">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping1" value="Standard" />
          <label for="shipping1" class="text-sm text-surface-900">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping2" value="Express" />
          <label for="shipping2" class="text-sm text-surface-900">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" inputId="shipping3" value="Same Day" />
          <label for="shipping3" class="text-sm text-surface-900">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider />

      <!-- Buttons -->
      <div class="flex justify-between items-center">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" />
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
import Divider from 'primevue/divider';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';

const products = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 }
]);

const form = ref({
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstraße 42',
  city: '10115 Berlin',
  country: { name: 'Deutschland', code: 'DE' }
});

const countries = ref([
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' },
  { name: 'Spanien', code: 'ES' }
]);

const shipping = ref('Standard');
</script>