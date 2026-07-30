<template>
  <main class="flex min-h-screen flex-col items-center bg-white py-6 text-sm text-slate-700">
    <header class="mb-8 flex w-[728px] items-center gap-4">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        text
        rounded
        aria-label="Bestellung schließen"
        class="!h-10 !w-10 !bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-2xl font-bold leading-none text-slate-700">Bestellung aufgeben</h1>
        <span class="text-xs text-slate-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </span>
      </div>
    </header>

    <div class="flex w-[728px] flex-col gap-4">
      <section class="flex flex-col gap-2">
        <div class="flex justify-between">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </section>

      <DataTable
        :value="products"
        class="px-4"
        :pt="{
          table: 'text-sm',
          headerCell: '!px-3.5 !py-2.5 !font-semibold',
          bodyCell: '!border-x-0 !px-3.5 !py-2',
        }"
      >
        <Column field="product" header="Produkt" />
        <Column header="Menge" class="w-40">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              show-buttons
              button-layout="stacked"
              class="w-[130px]"
              input-class="!w-[96px]"
              :pt="{
                incrementButton: '!w-9 !h-4',
                decrementButton: '!w-9 !h-4',
              }"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" class="w-24 text-center" />
        <Column class="w-16">
          <template #body="{ index }">
            <Button
              icon="pi pi-trash"
              severity="danger"
              text
              aria-label="Produkt löschen"
              @click="removeProduct(index)"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-0" />

      <section class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
        <div class="flex flex-col gap-1">
          <label for="first-name">Vorname</label>
          <InputText id="first-name" v-model="firstName" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="last-name">Nachname</label>
          <InputText id="last-name" v-model="lastName" />
        </div>
        <div class="col-span-2 flex flex-col gap-1">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="postal-city">PLZ / Ort</label>
          <InputText id="postal-city" v-model="postalCity" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="country">Land</label>
          <Select
            id="country"
            v-model="country"
            :options="countries"
            class="w-full"
            :pt="{ root: '!border-emerald-500' }"
          />
          <Listbox
            v-model="country"
            :options="countries"
            class="w-full shadow-md"
            :pt="{
              root: '!rounded-md !border-slate-200',
              list: '!p-1',
              option: '!px-2.5 !py-1.5',
            }"
          />
        </div>
      </section>

      <Divider class="!my-0" />

      <section class="flex flex-col gap-4 px-4">
        <span class="font-semibold">Versandart</span>
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

      <Divider class="!my-0" />

      <footer class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
      </footer>
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

const products = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const country = ref('Deutschland')
const shippingMethod = ref('')

function removeProduct(index: number) {
  products.value.splice(index, 1)
}
</script>