<template>
  <main class="min-h-screen bg-white px-6 py-7">
    <div class="mx-auto flex w-full max-w-[802px] flex-col">
      <header class="mb-10 flex items-center gap-4">
        <Button icon="pi pi-shopping-cart" severity="secondary" rounded aria-label="Warenkorb" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight">Bestellung aufgeben</h1>
          <p class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </header>

      <section class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-base">
            <span>Warenkorb</span>
            <span>Adresse</span>
            <span>Bestätigung</span>
          </div>
          <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
        </div>

        <DataTable :value="cartItems" class="mx-4">
          <Column field="product" header="Produkt" header-class="w-[55%]" />
          <Column header="Menge" header-class="w-[22%]">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                :min="1"
                show-buttons
                button-layout="vertical"
                increment-button-icon="pi pi-chevron-up"
                decrement-button-icon="pi pi-chevron-down"
                class="w-32"
                input-class="w-24"
              />
            </template>
          </Column>
          <Column field="price" header="Preis" header-class="w-[13%]" />
          <Column header="" header-class="w-[10%]">
            <template #body="{ index }">
              <Button
                icon="pi pi-trash"
                severity="secondary"
                text
                rounded
                aria-label="Produkt entfernen"
                @click="removeItem(index)"
              />
            </template>
          </Column>
        </DataTable>

        <Divider />

        <form class="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
          <div class="flex flex-col gap-2">
            <label for="first-name">Vorname</label>
            <InputText id="first-name" v-model="firstName" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="last-name">Nachname</label>
            <InputText id="last-name" v-model="lastName" />
          </div>
          <div class="flex flex-col gap-2 md:col-span-2">
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
              option-label="label"
              option-value="value"
              class="w-full"
            />
          </div>
        </form>

        <Divider />

        <section class="flex flex-col gap-4 px-4">
          <h2 class="text-sm font-semibold">Versandart</h2>
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
        </section>

        <Divider />

        <footer class="flex items-center justify-between">
          <Button label="Abbrechen" severity="secondary" @click="cancelCheckout" />
          <Button label="Speichern" severity="primary" @click="saveCheckout" />
        </footer>
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
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref('')

const countries = ref([
  { label: 'Spanien', value: 'Spanien' },
  { label: 'Deutschland', value: 'Deutschland' },
  { label: 'Österreich', value: 'Österreich' },
  { label: 'Schweiz', value: 'Schweiz' },
])

function removeItem(index: number) {
  cartItems.value.splice(index, 1)
}

function cancelCheckout() {}

function saveCheckout() {}
</script>