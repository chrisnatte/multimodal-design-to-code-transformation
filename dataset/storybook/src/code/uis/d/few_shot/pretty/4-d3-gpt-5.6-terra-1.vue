<template>
  <main class="flex min-h-screen flex-col items-center bg-white pt-8 text-slate-700">
    <header class="flex w-[834px] items-center gap-4">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        text
        rounded
        aria-label="Schließen"
        class="!h-12 !w-12"
      />
      <div class="flex flex-col gap-1">
        <h1 class="m-0 text-3xl font-bold">Bestellung aufgeben</h1>
        <span class="text-base text-slate-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </span>
      </div>
    </header>

    <section class="mt-10 flex w-[728px] flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5 w-full" />
      </div>

      <DataTable
        :value="products"
        table-class="w-full"
        :pt="{
          root: 'px-4',
          headerCell: 'text-sm',
          bodyCell: 'py-2.5',
        }"
      >
        <Column field="name" header="Produkt" style="width: 55%" />
        <Column header="Menge" style="width: 22%">
          <template #body="{ index }">
            <InputNumber
              v-model="quantities[index]"
              :min="1"
              show-buttons
              button-layout="vertical"
              increment-button-icon="pi pi-angle-up"
              decrement-button-icon="pi pi-angle-down"
              class="w-[130px]"
              input-class="w-[96px]"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" style="width: 13%" />
        <Column style="width: 10%">
          <template #body="{ index }">
            <Button
              icon="pi pi-trash"
              severity="danger"
              text
              aria-label="Produkt entfernen"
              @click="removeProduct(index)"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-0" />

      <form class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
        <div class="flex flex-col gap-2">
          <label for="first-name" class="text-sm">Vorname</label>
          <InputText id="first-name" v-model="firstName" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label for="last-name" class="text-sm">Nachname</label>
          <InputText id="last-name" v-model="lastName" fluid />
        </div>

        <div class="col-span-2 flex flex-col gap-2">
          <label for="street" class="text-sm">Straße</label>
          <InputText id="street" v-model="street" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label for="postal-city" class="text-sm">PLZ / Ort</label>
          <InputText id="postal-city" v-model="postalCity" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label for="country" class="text-sm">Land</label>
          <Select
            ref="countrySelect"
            input-id="country"
            v-model="country"
            :options="countries"
            fluid
          />
        </div>
      </form>

      <Divider class="!my-0" />

      <div class="flex flex-col gap-4 px-4">
        <span class="text-sm font-semibold">Versandart</span>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" input-id="standard" value="standard" />
            <label for="standard" class="text-sm">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" input-id="express" value="express" />
            <label for="express" class="text-sm">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" input-id="same-day" value="same-day" />
            <label for="same-day" class="text-sm">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="!my-0" />

      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="success" />
      </div>
    </section>
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

const products = ref([
  { name: 'Wireless Kopfhörer', price: '79,99 €' },
  { name: 'USB-C Kabel 2m', price: '14,97 €' },
])

const quantities = ref([1, 1])
const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref<string | null>(null)
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

const countrySelect = useTemplateRef('countrySelect')

onMounted(() => {
  countrySelect.value?.show()
})

function removeProduct(index: number) {
  products.value.splice(index, 1)
  quantities.value.splice(index, 1)
}
</script>