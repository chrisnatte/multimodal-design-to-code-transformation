<template>
  <div class="min-h-screen bg-white flex justify-center py-12 font-sans text-slate-700">
    <div class="w-full max-w-[1000px] px-8">
      
      <!-- Header -->
      <div class="flex items-start gap-4 mb-12">
        <Button icon="pi pi-times" rounded text class="bg-slate-100 text-slate-500 hover:bg-slate-200 w-12 h-12 shrink-0" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold text-slate-800 leading-tight">Bestellung aufgeben</h1>
          <p class="text-base text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <div class="max-w-[728px] mx-auto">
        
        <!-- Stepper -->
        <div class="mb-10">
          <div class="flex justify-between text-base mb-3">
            <span class="text-emerald-500">Warenkorb</span>
            <span class="text-emerald-500">Adresse</span>
            <span class="text-slate-500">Bestätigung</span>
          </div>
          <div class="h-1.5 flex rounded-full overflow-hidden bg-slate-200">
            <div class="w-1/2 bg-emerald-500"></div>
          </div>
        </div>

        <!-- Product List -->
        <div class="mb-10 flex flex-col">
          <!-- Header Row -->
          <div class="flex border border-slate-200 border-b-0 rounded-t-md bg-white">
            <div class="flex-1 py-3 px-4 font-semibold text-sm">Produkt</div>
            <div class="w-40 py-3 px-4 font-semibold text-sm">Menge</div>
            <div class="w-24 py-3 px-4 font-semibold text-sm">Preis</div>
            <div class="w-16 py-3 px-4"></div>
          </div>
          
          <!-- Product 1 -->
          <div class="flex items-center border border-slate-200 border-b-0 bg-white h-[50px]">
            <div class="flex-1 py-2 px-4 text-sm">Wireless Kopfhörer</div>
            <div class="w-40 py-2 px-4">
              <InputNumber v-model="qty1" showButtons buttonLayout="stacked" class="w-[4.5rem] h-8" inputClass="w-full text-center text-sm" />
            </div>
            <div class="w-24 py-2 px-4 text-sm">79,99 €</div>
            <div class="w-16 py-2 px-4 flex justify-center">
              <Button icon="pi pi-trash" text severity="danger" rounded class="w-8 h-8 text-red-400 hover:bg-red-50" />
            </div>
          </div>
          
          <!-- Product 2 -->
          <div class="flex items-center border border-slate-200 rounded-b-md bg-white h-[50px]">
            <div class="flex-1 py-2 px-4 text-sm">USB-C Kabel 2m</div>
            <div class="w-40 py-2 px-4">
              <InputNumber v-model="qty2" showButtons buttonLayout="stacked" class="w-[4.5rem] h-8" inputClass="w-full text-center text-sm" />
            </div>
            <div class="w-24 py-2 px-4 text-sm">14,97 €</div>
            <div class="w-16 py-2 px-4 flex justify-center">
              <Button icon="pi pi-trash" text severity="danger" rounded class="w-8 h-8 text-red-400 hover:bg-red-50" />
            </div>
          </div>
        </div>

        <hr class="border-slate-200 mb-10" />

        <!-- Address Form -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-6 mb-10">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Vorname</label>
            <InputText v-model="form.firstName" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Nachname</label>
            <InputText v-model="form.lastName" class="w-full" />
          </div>
          <div class="col-span-2 flex flex-col gap-2">
            <label class="text-sm text-slate-700">Straße</label>
            <InputText v-model="form.street" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">PLZ / Ort</label>
            <InputText v-model="form.city" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Land</label>
            <Select v-model="form.country" :options="countries" class="w-full" />
          </div>
        </div>

        <hr class="border-slate-200 mb-10" />

        <!-- Shipping Method -->
        <div class="mb-10">
          <h3 class="font-semibold text-sm text-slate-800 mb-4">Versandart</h3>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <RadioButton v-model="shipping" inputId="ship1" value="standard" />
              <label for="ship1" class="text-sm text-slate-700 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
            </div>
            <div class="flex items-center gap-3">
              <RadioButton v-model="shipping" inputId="ship2" value="express" />
              <label for="ship2" class="text-sm text-slate-700 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
            </div>
            <div class="flex items-center gap-3">
              <RadioButton v-model="shipping" inputId="ship3" value="sameday" />
              <label for="ship3" class="text-sm text-slate-700 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
          </div>
        </div>

        <hr class="border-slate-200 mb-10" />

        <!-- Footer Actions -->
        <div class="flex justify-between items-center">
          <Button label="Abbrechen" class="bg-slate-100 text-slate-700 border-none hover:bg-slate-200 font-medium px-4 py-2" />
          <Button label="Speichern" class="bg-emerald-500 border-none hover:bg-emerald-600 font-medium px-4 py-2" />
        </div>

      </div>
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

const qty1 = ref(1);
const qty2 = ref(1);

const form = ref({
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstraße 42',
  city: '10115 Berlin',
  country: 'Deutschland'
});

const countries = ref([
  'Spanien',
  'Deutschland',
  'Österreich',
  'Schweiz'
]);

const shipping = ref('standard');
</script>