<template>
  <div class="min-h-screen bg-white p-8 flex justify-center font-sans">
    <div class="w-full max-w-[728px] flex flex-col gap-12 mt-12">
      <!-- Header -->
      <div class="flex items-start gap-4">
        <Button 
          icon="pi pi-arrow-left" 
          rounded 
          text 
          severity="secondary" 
          class="!bg-slate-100 !w-12 !h-12 shrink-0" 
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold text-slate-900 leading-tight">Bestellung aufgeben</h1>
          <p class="text-base text-slate-600">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col gap-8">
        <!-- Progress -->
        <div class="flex flex-col gap-3">
          <div class="flex justify-between text-base">
            <span class="text-slate-600">Warenkorb</span>
            <span class="text-slate-900 font-medium">Adresse</span>
            <span class="text-slate-600">Bestätigung</span>
          </div>
          <div class="h-1.5 flex rounded-full overflow-hidden bg-slate-200">
            <div class="w-1/2 bg-emerald-500 h-full rounded-full"></div>
          </div>
        </div>

        <!-- Products -->
        <div class="flex flex-col gap-2">
          <!-- Table Header -->
          <div class="flex items-center border border-slate-200 rounded-md bg-white h-10 px-4">
            <div class="flex-1 font-semibold text-sm">Produkt</div>
            <div class="w-32 font-semibold text-sm">Menge</div>
            <div class="w-24 font-semibold text-sm">Preis</div>
            <div class="w-10"></div>
          </div>
          
          <!-- Product 1 -->
          <div class="flex items-center border border-slate-200 rounded-md bg-white h-12 px-4">
            <div class="flex-1 text-sm">Wireless Kopfhörer</div>
            <div class="w-32">
              <InputNumber 
                v-model="qty1" 
                showButtons 
                buttonLayout="stacked" 
                :min="1" 
                class="w-16 h-8"
                inputClass="!w-10 !p-1 text-center text-sm"
              />
            </div>
            <div class="w-24 text-sm">79,99 €</div>
            <div class="w-10 flex justify-end">
              <Button icon="pi pi-trash" text severity="secondary" rounded class="!w-8 !h-8" />
            </div>
          </div>

          <!-- Product 2 -->
          <div class="flex items-center border border-slate-200 rounded-md bg-white h-12 px-4">
            <div class="flex-1 text-sm">USB-C Kabel 2m</div>
            <div class="w-32">
              <InputNumber 
                v-model="qty2" 
                showButtons 
                buttonLayout="stacked" 
                :min="1" 
                class="w-16 h-8"
                inputClass="!w-10 !p-1 text-center text-sm"
              />
            </div>
            <div class="w-24 text-sm">14,97 €</div>
            <div class="w-10 flex justify-end">
              <Button icon="pi pi-trash" text severity="secondary" rounded class="!w-8 !h-8" />
            </div>
          </div>
        </div>

        <Divider class="!my-0" />

        <!-- Address Form -->
        <div class="grid grid-cols-2 gap-x-4 gap-y-6 px-4">
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Vorname</label>
            <InputText v-model="firstName" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Nachname</label>
            <InputText v-model="lastName" class="w-full" />
          </div>
          <div class="col-span-2 flex flex-col gap-2">
            <label class="text-sm text-slate-700">Straße</label>
            <InputText v-model="street" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">PLZ / Ort</label>
            <InputText v-model="city" class="w-full" />
          </div>
          <div class="flex flex-col gap-2">
            <label class="text-sm text-slate-700">Land</label>
            <Select 
              v-model="country" 
              :options="countries" 
              optionLabel="name" 
              placeholder="Land auswählen" 
              class="w-full" 
            />
          </div>
        </div>

        <Divider class="!my-0" />

        <!-- Shipping -->
        <div class="flex flex-col gap-4">
          <h3 class="font-semibold text-sm text-slate-900">Versandart</h3>
          <div class="flex flex-col gap-3">
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

        <Divider class="!my-0" />

        <!-- Footer Actions -->
        <div class="flex justify-between items-center pt-2">
          <Button label="Abbrechen" severity="secondary" class="!bg-slate-100 !border-none !text-slate-700 font-medium px-6" />
          <Button label="Speichern" severity="primary" class="!bg-emerald-500 !border-emerald-500 font-medium px-6" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'
import RadioButton from 'primevue/radiobutton'
import Divider from 'primevue/divider'

const qty1 = ref(1)
const qty2 = ref(1)

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')

const country = ref({ name: 'Deutschland', code: 'DE' })
const countries = ref([
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' },
  { name: 'Spanien', code: 'ES' }
])

const shipping = ref('standard')
</script>