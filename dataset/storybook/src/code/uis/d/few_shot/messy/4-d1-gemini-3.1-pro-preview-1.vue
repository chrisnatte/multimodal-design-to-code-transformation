<template>
  <div class="max-w-3xl mx-auto p-8 flex flex-col gap-10 bg-white font-sans">
    <!-- Header -->
    <div class="flex items-start gap-4">
      <div class="flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 border border-slate-200 shrink-0">
        <i class="pi pi-times text-xl"></i>
      </div>
      <div class="flex flex-col gap-1 mt-1">
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Progress Steps -->
    <div class="flex flex-col gap-2">
      <div class="flex justify-between text-sm">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-emerald-500">Adresse</span>
        <span class="text-slate-500">Bestätigung</span>
      </div>
      <div class="flex h-1.5 rounded-full overflow-hidden bg-slate-200">
        <div class="w-[66%] bg-emerald-500"></div>
      </div>
    </div>

    <!-- Product List -->
    <div class="flex flex-col">
      <div class="flex items-center pb-3 border-b border-slate-200 text-sm font-semibold text-slate-800">
        <div class="flex-1">Produkt</div>
        <div class="w-28">Menge</div>
        <div class="w-24">Preis</div>
        <div class="w-10"></div>
      </div>
      
      <div class="flex items-center py-4 border-b border-slate-200">
        <div class="flex-1 text-sm text-slate-700">Wireless Kopfhörer</div>
        <div class="w-28">
          <InputNumber v-model="qty1" showButtons buttonLayout="stacked" :min="1" class="w-16 h-10" inputClass="!text-center !p-1" />
        </div>
        <div class="w-24 text-sm text-slate-700">79,99 €</div>
        <div class="w-10 flex justify-end">
          <Button icon="pi pi-trash" text severity="danger" rounded class="!w-8 !h-8" />
        </div>
      </div>

      <div class="flex items-center py-4 border-b border-slate-200">
        <div class="flex-1 text-sm text-slate-700">USB-C Kabel 2m</div>
        <div class="w-28">
          <InputNumber v-model="qty2" showButtons buttonLayout="stacked" :min="1" class="w-16 h-10" inputClass="!text-center !p-1" />
        </div>
        <div class="w-24 text-sm text-slate-700">14,97 €</div>
        <div class="w-10 flex justify-end">
          <Button icon="pi pi-trash" text severity="danger" rounded class="!w-8 !h-8" />
        </div>
      </div>
    </div>

    <!-- Address Form -->
    <div class="flex flex-col gap-5">
      <div class="flex gap-4">
        <div class="flex flex-col gap-2 flex-1">
          <label for="vorname" class="text-sm text-slate-700">Vorname</label>
          <InputText id="vorname" v-model="form.vorname" />
        </div>
        <div class="flex flex-col gap-2 flex-1">
          <label for="nachname" class="text-sm text-slate-700">Nachname</label>
          <InputText id="nachname" v-model="form.nachname" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label for="strasse" class="text-sm text-slate-700">Straße</label>
        <InputText id="strasse" v-model="form.strasse" />
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col gap-2 flex-1">
          <label for="plz" class="text-sm text-slate-700">PLZ / Ort</label>
          <InputText id="plz" v-model="form.plz" />
        </div>
        <div class="flex flex-col gap-2 flex-1">
          <label for="land" class="text-sm text-slate-700">Land</label>
          <Select id="land" v-model="form.land" :options="countries" placeholder="Land auswählen" class="w-full" />
        </div>
      </div>
    </div>

    <Divider class="!my-0" />

    <!-- Shipping Method -->
    <div class="flex flex-col gap-4">
      <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-3">
          <RadioButton v-model="form.shipping" inputId="shipping1" value="standard" />
          <label for="shipping1" class="text-sm text-slate-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="form.shipping" inputId="shipping2" value="express" />
          <label for="shipping2" class="text-sm text-slate-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-3">
          <RadioButton v-model="form.shipping" inputId="shipping3" value="sameday" />
          <label for="shipping3" class="text-sm text-slate-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </div>

    <Divider class="!my-0" />

    <!-- Footer Actions -->
    <div class="flex justify-between items-center pt-2">
      <Button label="Abbrechen" severity="secondary" class="!bg-slate-100 !text-slate-700 !border-none hover:!bg-slate-200" />
      <Button label="Speichern" class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import RadioButton from 'primevue/radiobutton';
import Divider from 'primevue/divider';

const qty1 = ref(1);
const qty2 = ref(1);

const countries = ref([
  'Spanien',
  'Deutschland',
  'Österreich',
  'Schweiz'
]);

const form = ref({
  vorname: 'Max',
  nachname: 'Mustermann',
  strasse: 'Musterstraße 42',
  plz: '10115 Berlin',
  land: 'Deutschland',
  shipping: 'standard'
});
</script>