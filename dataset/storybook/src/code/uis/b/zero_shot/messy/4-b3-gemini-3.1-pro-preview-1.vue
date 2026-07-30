<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-12 font-sans">
    <div class="w-full max-w-[728px] px-4 flex flex-col gap-10">
      
      <!-- Header Section -->
      <div class="flex items-start gap-4">
        <Button 
          icon="pi pi-arrow-left" 
          rounded 
          text 
          class="bg-slate-100 text-slate-600 w-12 h-12 flex-shrink-0 hover:bg-slate-200" 
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold text-slate-900 leading-tight">
            Bestellung aufgeben
          </h1>
          <p class="text-base text-slate-600">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col gap-8">
        
        <!-- Progress Bar -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-base text-slate-800">
            <span>Warenkorb</span>
            <span class="ml-8">Adresse</span>
            <span>Bestätigung</span>
          </div>
          <div class="h-1.5 flex rounded-full overflow-hidden bg-slate-200">
            <div class="w-1/2 bg-emerald-500 h-full rounded-full"></div>
          </div>
        </div>

        <!-- Product List -->
        <div class="flex flex-col border border-slate-200 rounded-lg overflow-hidden">
          <!-- Table Header -->
          <div class="flex bg-white border-b border-slate-200 text-sm font-semibold text-slate-800">
            <div class="flex-1 p-3">Produkt</div>
            <div class="w-36 p-3">Menge</div>
            <div class="w-24 p-3">Preis</div>
            <div class="w-16 p-3"></div>
          </div>
          
          <!-- Item 1 -->
          <div class="flex items-center bg-white border-b border-slate-200">
            <div class="flex-1 p-3 text-sm text-slate-800">Wireless Kopfhörer</div>
            <div class="w-36 p-3">
              <InputNumber 
                v-model="qty1" 
                showButtons 
                buttonLayout="stacked" 
                class="w-20 h-10" 
                inputClass="w-12 text-center text-sm" 
                decrementButtonIcon="pi pi-angle-down" 
                incrementButtonIcon="pi pi-angle-up" 
              />
            </div>
            <div class="w-24 p-3 text-sm text-slate-800">79,99 €</div>
            <div class="w-16 p-3 flex justify-center">
              <Button icon="pi pi-trash" text severity="secondary" rounded class="text-slate-400 hover:text-red-500" />
            </div>
          </div>
          
          <!-- Item 2 -->
          <div class="flex items-center bg-white">
            <div class="flex-1 p-3 text-sm text-slate-800">USB-C Kabel 2m</div>
            <div class="w-36 p-3">
              <InputNumber 
                v-model="qty2" 
                showButtons 
                buttonLayout="stacked" 
                class="w-20 h-10" 
                inputClass="w-12 text-center text-sm" 
                decrementButtonIcon="pi pi-angle-down" 
                incrementButtonIcon="pi pi-angle-up" 
              />
            </div>
            <div class="w-24 p-3 text-sm text-slate-800">14,97 €</div>
            <div class="w-16 p-3 flex justify-center">
              <Button icon="pi pi-trash" text severity="secondary" rounded class="text-slate-400 hover:text-red-500" />
            </div>
          </div>
        </div>

        <Divider class="m-0" />

        <!-- Address Form -->
        <div class="grid grid-cols-2 gap-x-4 gap-y-6">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-800">Vorname</label>
            <InputText v-model="firstName" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-800">Nachname</label>
            <InputText v-model="lastName" class="w-full" />
          </div>
          <div class="flex flex-col gap-2 col-span-2">
            <label class="text-sm text-slate-800">Straße</label>
            <InputText v-model="street" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-800">PLZ / Ort</label>
            <InputText v-model="city" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-800">Land</label>
            <Select 
              v-model="country" 
              :options="countries" 
              optionLabel="name" 
              class="w-full" 
            />
          </div>
        </div>

        <Divider class="m-0" />

        <!-- Shipping Options -->
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-3">
              <RadioButton v-model="shipping" inputId="standard" value="standard" />
              <label for="standard" class="text-sm text-slate-800 cursor-pointer">Standard (3 - 5 Tage) - kostenlos</label>
            </div>
            <div class="flex items-center gap-3">
              <RadioButton v-model="shipping" inputId="express" value="express" />
              <label for="express" class="text-sm text-slate-800 cursor-pointer">Express (1 - 2 Tage) - 4,99 €</label>
            </div>
            <div class="flex items-center gap-3">
              <RadioButton v-model="shipping" inputId="sameday" value="sameday" />
              <label for="sameday" class="text-sm text-slate-800 cursor-pointer">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
          </div>
        </div>

        <Divider class="m-0" />

        <!-- Actions -->
        <div class="flex justify-between items-center pt-2">
          <Button 
            label="Abbrechen" 
            severity="secondary" 
            class="bg-slate-100 text-slate-800 border-none hover:bg-slate-200 px-6 py-2 font-medium" 
          />
          <Button 
            label="Speichern" 
            class="bg-emerald-500 text-white border-none hover:bg-emerald-600 px-6 py-2 font-medium" 
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const qty1 = ref(1)
const qty2 = ref(1)

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')

const countries = ref([
  { name: 'Deutschland', code: 'DE' },
  { name: 'Spanien', code: 'ES' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' }
])
const country = ref(countries.value[0])

const shipping = ref('standard')
</script>