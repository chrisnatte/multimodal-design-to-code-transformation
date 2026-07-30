<template>
  <div class="min-h-screen bg-white p-8 flex flex-col items-center font-sans text-surface-900">
    <!-- Header -->
    <div class="w-full max-w-4xl flex items-start gap-4 mb-12">
      <Button icon="pi pi-arrow-left" rounded severity="secondary" class="mt-1" />
      <div>
        <h1 class="text-3xl font-bold mb-2">Bestellung aufgeben</h1>
        <p class="text-surface-600">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-3xl flex flex-col gap-8">
      <!-- Stepper -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-surface-600 font-medium">
          <span class="text-emerald-500">Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <div class="h-1.5 flex rounded-full bg-surface-200 overflow-hidden">
          <div class="w-1/2 bg-emerald-500 h-full"></div>
        </div>
      </div>

      <!-- Product List -->
      <div class="flex flex-col border border-surface-200 rounded-lg overflow-hidden">
        <!-- Header -->
        <div class="flex bg-surface-50 border-b border-surface-200 p-4 font-semibold text-sm">
          <div class="flex-1">Produkt</div>
          <div class="w-32">Menge</div>
          <div class="w-24 text-right">Preis</div>
          <div class="w-12"></div>
        </div>
        <!-- Row 1 -->
        <div class="flex items-center p-4 border-b border-surface-200">
          <div class="flex-1">Wireless Kopfhörer</div>
          <div class="w-32">
            <InputNumber v-model="qty1" showButtons buttonLayout="stacked" class="w-16" />
          </div>
          <div class="w-24 text-right">79,99 €</div>
          <div class="w-12 flex justify-end">
            <Button icon="pi pi-trash" text rounded severity="danger" />
          </div>
        </div>
        <!-- Row 2 -->
        <div class="flex items-center p-4">
          <div class="flex-1">USB-C Kabel 2m</div>
          <div class="w-32">
            <InputNumber v-model="qty2" showButtons buttonLayout="stacked" class="w-16" />
          </div>
          <div class="w-24 text-right">14,97 €</div>
          <div class="w-12 flex justify-end">
            <Button icon="pi pi-trash" text rounded severity="danger" />
          </div>
        </div>
      </div>

      <Divider />

      <!-- Address Form -->
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm">Vorname</label>
            <InputText v-model="firstName" />
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm">Nachname</label>
            <InputText v-model="lastName" />
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm">Straße</label>
          <InputText v-model="street" />
        </div>
        <div class="flex gap-4">
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm">PLZ / Ort</label>
            <InputText v-model="city" />
          </div>
          <div class="flex-1 flex flex-col gap-2">
            <label class="text-sm">Land</label>
            <Select v-model="country" :options="countries" optionLabel="name" placeholder="Land auswählen" />
          </div>
        </div>
      </div>

      <Divider />

      <!-- Shipping Method -->
      <div class="flex flex-col gap-4">
        <h3 class="font-semibold">Versandart</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" inputId="ship1" value="standard" />
            <label for="ship1">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" inputId="ship2" value="express" />
            <label for="ship2">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" inputId="ship3" value="sameday" />
            <label for="ship3">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider />

      <!-- Actions -->
      <div class="flex justify-between items-center">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="success" />
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

const country = ref({ name: 'Deutschland', code: 'DE' })
const countries = ref([
  { name: 'Deutschland', code: 'DE' },
  { name: 'Österreich', code: 'AT' },
  { name: 'Schweiz', code: 'CH' },
  { name: 'Spanien', code: 'ES' }
])

const shipping = ref('standard')
</script>