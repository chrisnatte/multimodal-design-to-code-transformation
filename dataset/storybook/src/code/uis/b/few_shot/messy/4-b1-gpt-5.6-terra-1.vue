<template>
  <main class="min-h-screen bg-white px-6 py-7">
    <div class="mx-auto flex max-w-[808px] flex-col gap-10">
      <header class="flex items-center gap-4">
        <Button icon="pi pi-shopping-cart" severity="secondary" text rounded class="!h-12 !w-12 !bg-surface-100" />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
          <span class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</span>
        </div>
      </header>

      <section class="mx-auto flex w-full max-w-[728px] flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-base">
            <span>Warenkorb</span>
            <span>Adresse</span>
            <span>Bestätigung</span>
          </div>
          <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
        </div>

        <DataTable :value="cartItems" show-gridlines class="text-sm">
          <Column field="product" header="Produkt" header-class="font-semibold" style="width: 55%" />
          <Column header="Menge" header-class="font-semibold" style="width: 22%">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                :min="1"
                show-buttons
                button-layout="vertical"
                increment-button-icon="pi pi-plus"
                decrement-button-icon="pi pi-minus"
                class="w-32"
                input-class="w-20"
              />
            </template>
          </Column>
          <Column header="Preis" header-class="font-semibold" style="width: 14%">
            <template #body="{ data }">
              {{ formatPrice(data.price * data.quantity) }}
            </template>
          </Column>
          <Column style="width: 9%">
            <template #body="{ index }">
              <Button
                icon="pi pi-trash"
                severity="secondary"
                text
                rounded
                aria-label="Produkt entfernen"
                @click="removeCartItem(index)"
              />
            </template>
          </Column>
        </DataTable>

        <Divider class="!my-0" />

        <div class="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="first-name">Vorname</label>
            <InputText id="first-name" v-model="firstName" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="last-name">Nachname</label>
            <InputText id="last-name" v-model="lastName" />
          </div>
          <div class="col-span-1 flex flex-col gap-2 sm:col-span-2">
            <label for="street">Straße</label>
            <InputText id="street" v-model="street" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="postal-city">PLZ / Ort</label>
            <InputText id="postal-city" v-model="postalCity" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="country">Land</label>
            <Select
              id="country"
              v-model="country"
              :options="countries"
              option-label="name"
              class="w-full"
            />
            <Listbox
              v-model="country"
              :options="countries"
              option-label="name"
              class="w-full"
              list-class="max-h-none"
            />
          </div>
        </div>

        <Divider class="!my-0" />

        <div class="flex flex-col gap-4 px-4">
          <span class="text-sm font-semibold">Versandart</span>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="standard" value="standard" />
              <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="express" value="express" />
              <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="same-day" value="same-day" />
              <label for="same-day">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
          </div>
        </div>

        <Divider class="!my-0" />

        <div class="flex items-center justify-between">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Speichern" severity="success" />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { product: 'USB-C Kabel 2m', quantity: 1, price: 14.97 },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' },
])
const country = ref(countries.value[1])
const shippingMethod = ref('')

function formatPrice(price: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

function removeCartItem(index: number) {
  cartItems.value.splice(index, 1)
}
</script>