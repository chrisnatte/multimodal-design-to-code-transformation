<template>
  <main class="mx-auto flex w-full max-w-[728px] flex-col gap-8 px-6 py-6 text-sm">
    <header class="flex items-start gap-3">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        text
        rounded
        aria-label="Bestellung schließen"
        class="!mt-0.5"
      />
      <div class="flex flex-col">
        <h1 class="text-2xl font-bold leading-tight">Bestellung aufgeben</h1>
        <p class="text-sm text-surface-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </header>

    <section class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-sm">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-cyan-500">Adresse</span>
          <span class="text-surface-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <DataTable
        :value="cartItems"
        size="small"
        :pt="{
          table: 'text-sm',
          headerCell: 'bg-transparent border-x-0 px-4 py-3 font-semibold',
          bodyCell: 'border-x-0 px-4 py-2',
        }"
      >
        <Column field="product" header="Produkt" />
        <Column header="Menge" class="w-40">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              :max="99"
              show-buttons
              button-layout="vertical"
              class="w-[94px]"
              input-class="!w-[64px]"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" class="w-24">
          <template #body="{ data }">
            {{ data.price }}
          </template>
        </Column>
        <Column class="w-16">
          <template #body="{ index }">
            <Button
              icon="pi pi-trash"
              severity="danger"
              text
              rounded
              size="small"
              aria-label="Produkt entfernen"
              @click="cartItems.splice(index, 1)"
            />
          </template>
        </Column>
      </DataTable>
    </section>

    <Divider class="!my-0" />

    <section class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
      <div class="flex flex-col gap-1">
        <label for="first-name">Vorname</label>
        <InputText id="first-name" v-model="firstName" class="w-full" />
      </div>

      <div class="flex flex-col gap-1">
        <label for="last-name">Nachname</label>
        <InputText id="last-name" v-model="lastName" class="w-full" />
      </div>

      <div class="col-span-2 flex flex-col gap-1">
        <label for="street">Straße</label>
        <InputText id="street" v-model="street" class="w-full" />
      </div>

      <div class="flex flex-col gap-1">
        <label for="postal-city">PLZ / Ort</label>
        <InputText id="postal-city" v-model="postalCity" class="w-full" />
      </div>

      <div class="flex flex-col gap-1">
        <label for="country">Land</label>
        <Select
          ref="countrySelect"
          v-model="country"
          input-id="country"
          :options="countries"
          class="w-full"
        />
      </div>
    </section>

    <Divider class="!my-0" />

    <section class="flex flex-col gap-3 px-4">
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
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
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