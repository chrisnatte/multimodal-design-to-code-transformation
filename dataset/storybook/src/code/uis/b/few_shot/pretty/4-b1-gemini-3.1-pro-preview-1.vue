<template>
  <div class="min-h-screen bg-white p-16 flex flex-col items-center gap-16">
    <!-- Header -->
    <div class="w-full max-w-[728px] flex items-center gap-4">
      <Button
        icon="pi pi-times"
        rounded
        severity="secondary"
        class="!w-12 !h-12 !bg-slate-100 !border-none text-slate-600"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-900">Bestellung aufgeben</h1>
        <p class="text-base text-slate-600">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="w-full max-w-[728px] flex flex-col gap-4">
      <!-- Progress -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base text-slate-900">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <!-- DataTable -->
      <div class="px-4 mt-4">
        <DataTable :value="products" class="w-full">
          <Column field="name" header="Produkt" />
          <Column field="quantity" header="Menge">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                show-buttons
                button-layout="stacked"
                style="width: 4rem"
              />
            </template>
          </Column>
          <Column field="price" header="Preis">
            <template #body="{ data }">
              {{ data.price.toFixed(2).replace('.', ',') }} €
            </template>
          </Column>
          <Column>
            <template #body>
              <Button icon="pi pi-trash" severity="danger" text rounded />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider />

      <!-- Form Grid -->
      <div class="grid grid-cols-2 gap-4 px-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Vorname</label>
          <InputText v-model="firstName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Nachname</label>
          <InputText v-model="lastName" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm text-slate-900">Straße</label>
          <InputText v-model="street" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">PLZ / Ort</label>
          <InputText v-model="city" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-900">Land</label>
          <Select
            v-model="country"
            :options="countries"
            placeholder="Land auswählen"
            class="w-full"
          />
        </div>
      </div>

      <Divider />

      <!-- Shipping -->
      <div class="flex flex-col gap-4 px-4">
        <h3 class="text-sm font-semibold text-slate-900">Versandart</h3>
        <div class="flex items-center gap-2">
          <RadioButton
            v-model="shippingMethod"
            input-id="shipping1"
            value="Standard (3 - 5 Tage) - kostenlos"
          />
          <label for="shipping1" class="text-sm text-slate-900"
            >Standard (3 - 5 Tage) - kostenlos</label
          >
        </div>
        <div class="flex items-center gap-2">
          <RadioButton
            v-model="shippingMethod"
            input-id="shipping2"
            value="Express (1 - 2 Tage) - 4,99 €"
          />
          <label for="shipping2" class="text-sm text-slate-900"
            >Express (1 - 2 Tage) - 4,99 €</label
          >
        </div>
        <div class="flex items-center gap-2">
          <RadioButton
            v-model="shippingMethod"
            input-id="shipping3"
            value="Same Day (Gleicher Tag) - 9,99 €"
          />
          <label for="shipping3" class="text-sm text-slate-900"
            >Same Day (Gleicher Tag) - 9,99 €</label
          >
        </div>
      </div>

      <Divider />

      <!-- Footer Actions -->
      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import ProgressBar from 'primevue/progressbar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import Divider from 'primevue/divider'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import RadioButton from 'primevue/radiobutton'

const products = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: 14.97 },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')
const country = ref('Deutschland')

const countries = ref(['Deutschland', 'Österreich', 'Schweiz', 'Spanien'])

const shippingMethod = ref('Standard (3 - 5 Tage) - kostenlos')
</script>