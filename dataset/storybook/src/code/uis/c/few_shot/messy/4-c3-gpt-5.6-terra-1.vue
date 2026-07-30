<template>
  <main class="mx-auto flex w-full max-w-3xl flex-col px-6 py-8 text-sm">
    <header class="mx-auto flex w-full max-w-[640px] items-start gap-3">
      <Button icon="pi pi-times" severity="secondary" text rounded aria-label="Schließen" class="mt-0.5" />
      <div>
        <h1 class="m-0 text-2xl font-semibold leading-tight">Bestellung aufgeben</h1>
        <p class="mt-1 text-sm text-surface-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </header>

    <section class="mx-auto mt-10 w-full max-w-[728px]">
      <div class="flex justify-between px-0.5 text-sm">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-sky-500">Adresse</span>
        <span class="text-surface-500">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :show-value="false" class="mt-2 !h-1.5" />
    </section>

    <section class="mx-auto mt-6 w-full max-w-[696px]">
      <DataTable :value="cartItems" size="small" class="text-sm">
        <Column field="product" header="Produkt" />
        <Column header="Menge" class="w-40">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              show-buttons
              button-layout="horizontal"
              increment-button-icon="pi pi-chevron-up"
              decrement-button-icon="pi pi-chevron-down"
              class="w-[130px]"
              input-class="w-16"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" class="w-24" />
        <Column class="w-10">
          <template #body>
            <Button icon="pi pi-trash" severity="danger" text rounded size="small" aria-label="Produkt entfernen" />
          </template>
        </Column>
      </DataTable>
    </section>

    <Divider class="mx-auto my-7 w-full max-w-[728px]" />

    <section class="mx-auto w-full max-w-[696px]">
      <div class="grid grid-cols-2 gap-x-4 gap-y-4">
        <div class="flex flex-col gap-1.5">
          <label for="first-name">Vorname</label>
          <InputText id="first-name" v-model="firstName" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="last-name">Nachname</label>
          <InputText id="last-name" v-model="lastName" />
        </div>
        <div class="col-span-2 flex flex-col gap-1.5">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="postal-city">PLZ / Ort</label>
          <InputText id="postal-city" v-model="postalCity" />
        </div>
        <div class="flex flex-col gap-1.5">
          <label for="country">Land</label>
          <Select
            ref="countrySelect"
            input-id="country"
            v-model="country"
            :options="countries"
            class="w-full"
          />
        </div>
      </div>
    </section>

    <Divider class="mx-auto my-7 w-full max-w-[728px]" />

    <section class="mx-auto w-full max-w-[696px]">
      <h2 class="m-0 mb-4 text-sm font-semibold">Versandart</h2>
      <div class="flex flex-col gap-3">
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

    <Divider class="mx-auto my-7 w-full max-w-[728px]" />

    <footer class="mx-auto flex w-full max-w-[728px] items-center justify-between">
      <Button label="Abbrechen" severity="secondary" text size="small" />
      <Button label="Speichern" severity="primary" size="small" />
    </footer>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
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
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref('')

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const countrySelect = useTemplateRef('countrySelect')

onMounted(() => {
  countrySelect.value?.show()
})
</script>