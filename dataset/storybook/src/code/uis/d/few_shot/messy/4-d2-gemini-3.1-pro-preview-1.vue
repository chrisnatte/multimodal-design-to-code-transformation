<template>
  <div class="mx-auto flex max-w-3xl flex-col gap-10 p-8 font-sans text-slate-800">
    <!-- Header -->
    <div class="flex items-start gap-4">
      <Button
        icon="pi pi-times"
        rounded
        text
        class="h-12 w-12 shrink-0 bg-slate-100 text-slate-600 hover:bg-slate-200"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
        <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Steps -->
    <div class="flex flex-col gap-3">
      <div class="flex justify-between text-base">
        <span class="text-[#10B981]">Warenkorb</span>
        <span class="text-[#3B82F6]">Adresse</span>
        <span class="text-slate-500">Bestätigung</span>
      </div>
      <div class="flex h-1.5 overflow-hidden rounded-full bg-slate-200">
        <div class="w-1/2 bg-[#10B981]"></div>
      </div>
    </div>

    <!-- Products -->
    <div class="flex flex-col">
      <div
        class="flex items-center border-b border-slate-200 pb-4 text-sm font-semibold text-slate-800"
      >
        <div class="flex-1">Produkt</div>
        <div class="w-32">Menge</div>
        <div class="w-24">Preis</div>
        <div class="w-10"></div>
      </div>
      <div
        v-for="product in products"
        :key="product.id"
        class="flex items-center border-b border-slate-200 py-4"
      >
        <div class="flex-1 text-sm text-slate-800">{{ product.name }}</div>
        <div class="w-32">
          <InputNumber
            v-model="product.quantity"
            show-buttons
            button-layout="stacked"
            :min="1"
            class="h-10 w-20"
          />
        </div>
        <div class="w-24 text-sm text-slate-800">{{ product.price }} €</div>
        <div class="flex w-10 justify-end">
          <Button
            icon="pi pi-trash"
            text
            severity="danger"
            rounded
            class="text-red-400 hover:bg-red-50"
          />
        </div>
      </div>
    </div>

    <!-- Form -->
    <div class="flex flex-col gap-6 border-b border-slate-200 pb-8">
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-800">Vorname</label>
          <InputText v-model="firstName" placeholder="Max" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-800">Nachname</label>
          <InputText v-model="lastName" placeholder="Mustermann" />
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm text-slate-800">Straße</label>
        <InputText v-model="street" placeholder="Musterstraße 42" />
      </div>
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-800">PLZ / Ort</label>
          <InputText v-model="city" placeholder="10115 Berlin" />
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm text-slate-800">Land</label>
          <Select
            v-model="country"
            :options="countries"
            placeholder="Deutschland"
            class="w-full"
          />
        </div>
      </div>
    </div>

    <!-- Shipping -->
    <div class="flex flex-col gap-4 border-b border-slate-200 pb-8">
      <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
      <div class="flex flex-col gap-3">
        <div
          v-for="method in shippingMethods"
          :key="method.value"
          class="flex items-center gap-3"
        >
          <RadioButton
            v-model="shippingMethod"
            :input-id="method.value"
            :value="method.value"
          />
          <label :for="method.value" class="cursor-pointer text-sm text-slate-800">
            {{ method.label }}
          </label>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="flex items-center justify-between">
      <Button
        label="Abbrechen"
        text
        class="bg-slate-100 px-6 py-2.5 font-medium text-slate-700 hover:bg-slate-200"
      />
      <Button
        label="Speichern"
        class="!border-[#10B981] !bg-[#10B981] px-6 py-2.5 font-medium hover:!border-[#059669] hover:!bg-[#059669]"
      />
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

const products = ref([
  { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: '79,99' },
  { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: '14,97' },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')
const country = ref('Deutschland')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

const shippingMethod = ref('standard')
const shippingMethods = ref([
  { label: 'Standard (3 - 5 Tage) - kostenlos', value: 'standard' },
  { label: 'Express (1 - 2 Tage) - 4,99 €', value: 'express' },
  { label: 'Same Day (Gleicher Tag) - 9,99 €', value: 'sameday' },
])
</script>