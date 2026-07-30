<template>
  <main class="mx-auto w-full max-w-[560px] px-6 py-5 text-sm text-slate-700">
    <header class="mb-7 flex items-start gap-3">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        text
        rounded
        aria-label="Schließen"
        class="!mt-0.5 !h-9 !w-9 !text-xl"
      />
      <div>
        <h1 class="text-2xl font-bold leading-7 text-slate-700">Bestellung aufgeben</h1>
        <p class="mt-0.5 text-xs text-slate-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </header>

    <section>
      <div class="flex justify-between text-xs font-medium">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-sky-500">Adresse</span>
        <span class="text-slate-500">Bestätigung</span>
      </div>
      <div class="mt-2 flex h-1 overflow-hidden rounded-full bg-slate-200">
        <div class="w-1/2 bg-emerald-500"></div>
        <div class="w-1/2 bg-sky-500"></div>
      </div>
    </section>

    <DataTable :value="cartItems" class="mt-4 text-xs">
      <Column field="product" header="Produkt" />
      <Column header="Menge" class="w-28">
        <template #body="{ data }">
          <InputNumber
            v-model="data.quantity"
            show-buttons
            button-layout="horizontal"
            :min="1"
            input-class="!w-16"
            class="!w-24"
          />
        </template>
      </Column>
      <Column field="price" header="Preis" class="w-20" />
      <Column class="w-8">
        <template #body>
          <Button icon="pi pi-trash" severity="danger" text rounded size="small" aria-label="Entfernen" />
        </template>
      </Column>
    </DataTable>

    <Divider class="!my-6" />

    <form class="flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="first-name" class="text-xs">Vorname</label>
          <InputText id="first-name" v-model="firstName" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="last-name" class="text-xs">Nachname</label>
          <InputText id="last-name" v-model="lastName" />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <label for="street" class="text-xs">Straße</label>
        <InputText id="street" v-model="street" />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="city" class="text-xs">PLZ / Ort</label>
          <InputText id="city" v-model="city" />
        </div>
        <div class="relative flex flex-col gap-1">
          <label for="country" class="text-xs">Land</label>
          <Select
            id="country"
            v-model="country"
            :options="countries"
            class="w-full"
          />
          <Listbox
            v-model="country"
            :options="countries"
            class="absolute top-[52px] z-10 w-full shadow-md"
            list-style="max-height: 100px"
          />
        </div>
      </div>
    </form>

    <Divider class="!mb-5 !mt-28" />

    <section>
      <h2 class="mb-3 text-xs font-semibold">Versandart</h2>
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="standard" name="shipping" value="standard" />
          <label for="standard" class="text-xs">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="express" name="shipping" value="express" />
          <label for="express" class="text-xs">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="same-day" name="shipping" value="same-day" />
          <label for="same-day" class="text-xs">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>
    </section>

    <Divider class="!my-6" />

    <footer class="flex items-center justify-between">
      <Button label="Abbrechen" severity="secondary" size="small" />
      <Button label="Speichern" severity="primary" size="small" />
    </footer>
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
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref('')

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
</script>