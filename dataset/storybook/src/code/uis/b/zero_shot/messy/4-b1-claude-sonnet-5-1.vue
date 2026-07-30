<template>
  <div class="p-8 bg-white">
    <!-- Header -->
    <div class="flex items-center gap-4 mb-8">
      <div class="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-slate-100">
        <i class="pi pi-shopping-cart text-xl"></i>
      </div>
      <div class="flex flex-col">
        <span class="text-3xl font-bold">Bestellung aufgeben</span>
        <span class="text-base text-gray-600">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</span>
      </div>
    </div>

    <div class="flex flex-col gap-6 max-w-[728px]">
      <!-- Steps -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :showValue="false" style="height: 6px" />
      </div>

      <!-- Cart Table -->
      <DataTable :value="cartItems" class="text-sm">
        <Column field="name" header="Produkt" />
        <Column header="Menge">
          <template #body="slotProps">
            <InputNumber
              v-model="slotProps.data.quantity"
              showButtons
              buttonLayout="horizontal"
              :min="1"
              inputStyle="width: 3rem"
              decrementButtonClass="p-button-secondary"
              incrementButtonClass="p-button-secondary"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" />
        <Column header="">
          <template #body="slotProps">
            <Button icon="pi pi-trash" text severity="danger" @click="removeItem(slotProps.data)" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <!-- Address Form -->
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label for="firstname">Vorname</label>
          <InputText id="firstname" v-model="firstName" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname">Nachname</label>
          <InputText id="lastname" v-model="lastName" />
        </div>
        <div class="flex flex-col gap-2 col-span-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zipcity">PLZ / Ort</label>
          <InputText id="zipcity" v-model="zipCity" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Dropdown
            id="country"
            v-model="selectedCountry"
            :options="countries"
            optionLabel="name"
            placeholder="Land wählen"
            class="w-full"
          />
        </div>
      </div>

      <Divider />

      <!-- Shipping Method -->
      <div class="flex flex-col gap-3">
        <span class="font-semibold text-sm">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="standard" name="shipping" value="standard" />
          <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="express" name="shipping" value="express" />
          <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" inputId="sameday" name="shipping" value="sameday" />
          <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider />

      <!-- Actions -->
      <div class="flex justify-between">
        <Button label="Abbrechen" severity="secondary" outlined />
        <Button label="Speichern" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProgressBar from 'primevue/progressbar'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import Button from 'primevue/button'
import Divider from 'primevue/divider'

const cartItems = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

function removeItem(item) {
  cartItems.value = cartItems.value.filter((i) => i !== item)
}

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')

const countries = ref([
  { name: 'Deutschland' },
  { name: 'Spanien' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
])
const selectedCountry = ref(countries.value[0])

const shippingMethod = ref('standard')
</script>