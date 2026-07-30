<template>
  <div class="min-h-screen w-full bg-white py-12 flex justify-center font-sans">
    <div class="w-full max-w-3xl flex flex-col gap-12 px-6">
      <!-- Header -->
      <div class="flex items-start gap-4">
        <Button
          icon="pi pi-times"
          rounded
          text
          severity="secondary"
          class="bg-slate-100 text-slate-600 hover:bg-slate-200"
          size="large"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
          <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col gap-8">
        <!-- Steps -->
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-sm">
            <span class="text-emerald-500 font-medium">Warenkorb</span>
            <span class="text-blue-500 font-medium">Adresse</span>
            <span class="text-slate-500">Bestätigung</span>
          </div>
          <div class="flex h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
            <div class="w-1/2 bg-emerald-500 h-full rounded-full"></div>
          </div>
        </div>

        <!-- Products List -->
        <div class="flex flex-col">
          <div class="flex items-center py-3 border-b border-slate-200 text-sm font-semibold text-slate-800">
            <div class="flex-1">Produkt</div>
            <div class="w-32">Menge</div>
            <div class="w-24">Preis</div>
            <div class="w-12"></div>
          </div>
          <div
            v-for="(product, index) in products"
            :key="index"
            class="flex items-center py-4 border-b border-slate-100"
          >
            <div class="flex-1 text-sm text-slate-700">{{ product.name }}</div>
            <div class="w-32">
              <InputNumber
                v-model="product.quantity"
                showButtons
                buttonLayout="stacked"
                :min="1"
                class="w-20 h-10"
                inputClass="w-full text-center text-sm"
              />
            </div>
            <div class="w-24 text-sm text-slate-700">{{ product.price }}</div>
            <div class="w-12 flex justify-end">
              <Button icon="pi pi-trash" text severity="danger" rounded aria-label="Löschen" />
            </div>
          </div>
        </div>

        <!-- Address Form -->
        <div class="flex flex-col gap-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="firstName" class="text-sm text-slate-700">Vorname</label>
              <InputText id="firstName" v-model="form.firstName" placeholder="Max" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="lastName" class="text-sm text-slate-700">Nachname</label>
              <InputText id="lastName" v-model="form.lastName" placeholder="Mustermann" />
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="street" class="text-sm text-slate-700">Straße</label>
            <InputText id="street" v-model="form.street" placeholder="Musterstraße 42" />
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex flex-col gap-2">
              <label for="city" class="text-sm text-slate-700">PLZ / Ort</label>
              <InputText id="city" v-model="form.city" placeholder="10115 Berlin" />
            </div>
            <div class="flex flex-col gap-2">
              <label for="country" class="text-sm text-slate-700">Land</label>
              <Select
                id="country"
                v-model="form.country"
                :options="countries"
                placeholder="Deutschland"
                class="w-full"
              />
            </div>
          </div>
        </div>

        <Divider class="!my-0" />

        <!-- Shipping Method -->
        <div class="flex flex-col gap-4">
          <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <RadioButton v-model="form.shipping" inputId="shipping-standard" name="shipping" value="standard" />
              <label for="shipping-standard" class="text-sm text-slate-700">Standard (3 - 5 Tage) - kostenlos</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="form.shipping" inputId="shipping-express" name="shipping" value="express" />
              <label for="shipping-express" class="text-sm text-slate-700">Express (1 - 2 Tage) - 4,99 €</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="form.shipping" inputId="shipping-sameday" name="shipping" value="sameday" />
              <label for="shipping-sameday" class="text-sm text-slate-700">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
          </div>
        </div>

        <Divider class="!my-0" />

        <!-- Footer Actions -->
        <div class="flex justify-between items-center pt-2">
          <Button label="Abbrechen" severity="secondary" text class="bg-slate-100 hover:bg-slate-200 text-slate-700" />
          <Button label="Speichern" class="bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600" />
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

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const form = ref({
  firstName: 'Max',
  lastName: 'Mustermann',
  street: 'Musterstraße 42',
  city: '10115 Berlin',
  country: 'Deutschland',
  shipping: 'standard'
})

const countries = ref([
  'Deutschland',
  'Spanien',
  'Österreich',
  'Schweiz'
])
</script>