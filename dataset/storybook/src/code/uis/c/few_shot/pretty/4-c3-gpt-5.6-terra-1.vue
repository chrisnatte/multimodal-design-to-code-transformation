<template>
  <main class="mx-auto w-full max-w-[520px] py-6 text-xs">
    <header class="mb-7 flex items-start gap-3">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        variant="text"
        rounded
        aria-label="Bestellung schließen"
        class="!mt-0.5 !h-8 !w-8 !p-0"
      />
      <div>
        <h1 class="m-0 text-2xl font-bold leading-6">Bestellung aufgeben</h1>
        <p class="m-0 mt-1 text-xs text-surface-500">
          Schließe deine Bestellung mit den Produktdaten im Warenkorb ab.
        </p>
      </div>
    </header>

    <div class="mb-5">
      <div class="mb-1 flex items-center justify-between text-xs">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-sky-500">Adresse</span>
        <span class="text-surface-500">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :show-value="false" class="!h-1" />
    </div>

    <DataTable
      :value="cartItems"
      size="small"
      :pt="{
        table: 'text-xs',
        headerCell: '!px-3 !py-2 text-xs',
        bodyCell: '!px-3 !py-1.5',
      }"
    >
      <Column field="product" header="Produkt" />
      <Column header="Menge" class="w-28">
        <template #body="{ data }">
          <InputNumber
            v-model="data.quantity"
            :min="1"
            show-buttons
            button-layout="horizontal"
            increment-button-icon="pi pi-chevron-up"
            decrement-button-icon="pi pi-chevron-down"
            class="w-24"
            input-class="!w-16 !py-1 !text-xs"
          />
        </template>
      </Column>
      <Column field="price" header="Preis" class="w-20" />
      <Column class="w-10">
        <template #body>
          <Button
            icon="pi pi-trash"
            severity="danger"
            variant="text"
            rounded
            aria-label="Produkt entfernen"
            class="!h-7 !w-7 !p-0"
          />
        </template>
      </Column>
    </DataTable>

    <Divider class="!my-5" />

    <section class="flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="first-name">Vorname</label>
          <InputText id="first-name" v-model="firstName" fluid class="!py-1 !text-xs" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="last-name">Nachname</label>
          <InputText id="last-name" v-model="lastName" fluid class="!py-1 !text-xs" />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <label for="street">Straße</label>
        <InputText id="street" v-model="street" fluid class="!py-1 !text-xs" />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="postal-code">PLZ / Ort</label>
          <InputText id="postal-code" v-model="postalCode" fluid class="!py-1 !text-xs" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="country">Land</label>
          <Select
            ref="countrySelect"
            v-model="country"
            :options="countries"
            input-id="country"
            fluid
            class="!text-xs"
            :pt="{
              label: '!py-1 !text-xs',
              dropdown: '!w-8',
              option: '!px-2 !py-1.5 !text-xs',
            }"
          />
        </div>
      </div>
    </section>

    <Divider class="!my-5" />

    <section>
      <h2 class="m-0 mb-3 text-xs font-bold">Versandart</h2>
      <div class="flex flex-col gap-2">
        <div v-for="shippingOption in shippingOptions" :key="shippingOption.value" class="flex items-center gap-2">
          <RadioButton
            v-model="shippingMethod"
            :input-id="shippingOption.value"
            name="shipping"
            :value="shippingOption.value"
            size="small"
          />
          <label :for="shippingOption.value">{{ shippingOption.label }}</label>
        </div>
      </div>
    </section>

    <Divider class="!my-5" />

    <footer class="flex items-center justify-between">
      <Button label="Abbrechen" severity="secondary" size="small" />
      <Button label="Speichern" severity="success" size="small" />
    </footer>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
const postalCode = ref('10115 Berlin')
const country = ref('Deutschland')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const shippingMethod = ref('')

const shippingOptions = ref([
  { value: 'standard', label: 'Standard (3 - 5 Tage) - kostenlos' },
  { value: 'express', label: 'Express (1 - 2 Tage) - 4,99 €' },
  { value: 'same-day', label: 'Same Day (Gleicher Tag) - 9,99 €' },
])

const countrySelect = ref()

onMounted(() => {
  countrySelect.value?.show?.()
})
</script>