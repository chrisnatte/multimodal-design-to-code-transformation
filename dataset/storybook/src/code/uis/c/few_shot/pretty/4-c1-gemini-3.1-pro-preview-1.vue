<template>
  <div class="mx-auto max-w-4xl p-8 font-sans text-surface-700">
    <!-- Header -->
    <div class="mb-10 flex items-start gap-4">
      <Button icon="pi pi-times" rounded text class="mt-1 h-8 w-8 bg-surface-100 text-surface-500 hover:bg-surface-200" />
      <div>
        <h1 class="text-2xl font-bold text-surface-900">Bestellung aufgeben</h1>
        <p class="mt-1 text-sm text-surface-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps Indicator -->
    <div class="mb-10 flex w-full flex-col">
      <div class="mb-2 flex w-full text-sm font-medium">
        <div class="flex-1 text-primary-500">Warenkorb</div>
        <div class="flex-1 text-center text-blue-500">Adresse</div>
        <div class="flex-1 text-right text-surface-500">Bestätigung</div>
      </div>
      <div class="flex h-1 w-full overflow-hidden rounded-full bg-surface-200">
        <div class="h-full w-2/3 bg-primary-500"></div>
      </div>
    </div>

    <!-- Cart Items -->
    <div class="mb-8 flex flex-col">
      <div class="mb-4 flex text-sm font-bold text-surface-900">
        <div class="flex-[2]">Produkt</div>
        <div class="w-32">Menge</div>
        <div class="w-24">Preis</div>
        <div class="w-10"></div>
      </div>

      <div class="flex items-center border-t border-surface-200 py-4">
        <div class="flex-[2] text-surface-900">Wireless Kopfhörer</div>
        <div class="w-32">
          <InputNumber v-model="qty1" showButtons buttonLayout="stacked" class="w-20" :min="0" />
        </div>
        <div class="w-24 text-surface-900">79,99 €</div>
        <div class="w-10 text-right">
          <Button icon="pi pi-trash" text severity="danger" rounded aria-label="Löschen" />
        </div>
      </div>

      <div class="flex items-center border-t border-surface-200 py-4">
        <div class="flex-[2] text-surface-900">USB-C Kabel 2m</div>
        <div class="w-32">
          <InputNumber v-model="qty2" showButtons buttonLayout="stacked" class="w-20" :min="0" />
        </div>
        <div class="w-24 text-surface-900">14,97 €</div>
        <div class="w-10 text-right">
          <Button icon="pi pi-trash" text severity="danger" rounded aria-label="Löschen" />
        </div>
      </div>
      <div class="border-t border-surface-200"></div>
    </div>

    <!-- Address Form -->
    <div class="mb-8 flex flex-col gap-5">
      <div class="flex gap-5">
        <div class="flex flex-1 flex-col gap-2">
          <label for="vorname" class="text-sm text-surface-700">Vorname</label>
          <InputText id="vorname" v-model="firstName" />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <label for="nachname" class="text-sm text-surface-700">Nachname</label>
          <InputText id="nachname" v-model="lastName" />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label for="strasse" class="text-sm text-surface-700">Straße</label>
        <InputText id="strasse" v-model="street" />
      </div>

      <div class="flex gap-5">
        <div class="flex flex-1 flex-col gap-2">
          <label for="plz" class="text-sm text-surface-700">PLZ / Ort</label>
          <InputText id="plz" v-model="city" />
        </div>
        <div class="flex flex-1 flex-col gap-2">
          <label for="land" class="text-sm text-surface-700">Land</label>
          <Dropdown id="land" v-model="selectedCountry" :options="countries" class="w-full" />
        </div>
      </div>
    </div>

    <div class="mb-8 border-t border-surface-200"></div>

    <!-- Shipping Method -->
    <div class="mb-8 flex flex-col gap-4">
      <h3 class="text-sm font-bold text-surface-900">Versandart</h3>
      
      <div class="flex items-center gap-3">
        <RadioButton v-model="shippingMethod" inputId="shipping1" value="standard" />
        <label for="shipping1" class="text-sm text-surface-700">Standard (3 - 5 Tage) - kostenlos</label>
      </div>
      
      <div class="flex items-center gap-3">
        <RadioButton v-model="shippingMethod" inputId="shipping2" value="express" />
        <label for="shipping2" class="text-sm text-surface-700">Express (1 - 2 Tage) - 4,99 €</label>
      </div>
      
      <div class="flex items-center gap-3">
        <RadioButton v-model="shippingMethod" inputId="shipping3" value="sameday" />
        <label for="shipping3" class="text-sm text-surface-700">Same Day (Gleicher Tag) - 9,99 €</label>
      </div>
    </div>

    <div class="mb-8 border-t border-surface-200"></div>

    <!-- Footer Actions -->
    <div class="flex items-center justify-between">
      <Button label="Abbrechen" severity="secondary" class="bg-surface-100 text-surface-700 border-none hover:bg-surface-200" />
      <Button label="Speichern" severity="primary" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import RadioButton from 'primevue/radiobutton';

const qty1 = ref(1);
const qty2 = ref(1);

const firstName = ref('Max');
const lastName = ref('Mustermann');
const street = ref('Musterstraße 42');
const city = ref('10115 Berlin');

const selectedCountry = ref('Deutschland');
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz']);

const shippingMethod = ref('standard');
</script>