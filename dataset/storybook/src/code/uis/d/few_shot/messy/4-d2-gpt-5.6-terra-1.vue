<template>
  <main class="mx-auto flex w-full max-w-[728px] flex-col gap-6 px-6 py-6 text-sm">
    <header class="flex items-center gap-4">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        text
        rounded
        aria-label="Bestellung schließen"
        class="!h-12 !w-12"
      />
      <div class="flex flex-col">
        <h1 class="text-3xl font-bold leading-tight">Bestellung aufgeben</h1>
        <span class="text-sm text-surface-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </span>
      </div>
    </header>

    <section class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between">
          <span class="text-primary">Warenkorb</span>
          <span class="text-cyan-500">Adresse</span>
          <span class="text-surface-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <DataTable
        :value="products"
        size="small"
        :pt="{
          table: 'w-full',
          headerCell: 'text-left font-semibold',
          bodyCell: 'py-2',
        }"
      >
        <Column field="product" header="Produkt" header-class="w-[55%]" />
        <Column header="Menge" header-class="w-[18%]">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              show-buttons
              button-layout="vertical"
              input-class="!w-16"
              class="!w-[5.8rem]"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" header-class="w-[17%]" />
        <Column header-class="w-[10%]">
          <template #body>
            <Button
              icon="pi pi-trash"
              severity="danger"
              text
              rounded
              size="small"
              aria-label="Produkt entfernen"
            />
          </template>
        </Column>
      </DataTable>
    </section>

    <Divider />

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
      <div class="relative flex flex-col gap-1">
        <label for="country">Land</label>
        <Select
          ref="countrySelect"
          v-model="country"
          input-id="country"
          :options="countries"
          class="w-full"
          append-to="self"
        />
      </div>
    </section>

    <Divider />

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

    <Divider />

    <footer class="flex items-center justify-between">
      <Button label="Abbrechen" severity="secondary" size="small" />
      <Button label="Speichern" severity="primary" size="small" />
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

const products = ref([
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
const countrySelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(() => {
  countrySelect.value?.show()
})
</script>