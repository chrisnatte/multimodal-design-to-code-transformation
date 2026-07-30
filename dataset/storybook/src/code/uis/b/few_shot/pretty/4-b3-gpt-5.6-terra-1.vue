<template>
  <main class="flex min-h-screen flex-col items-center bg-white pt-[92px]">
    <header class="flex w-[802px] items-center gap-4">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        text
        rounded
        size="large"
        aria-label="Checkout schließen"
        class="!h-[50px] !w-[50px] !bg-surface-100"
      />
      <div class="flex h-[58px] flex-col gap-1">
        <h1 class="text-[32px] font-bold leading-[39px]">Bestellung aufgeben</h1>
        <p class="text-base leading-[19px]">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </header>

    <section class="mt-[47px] flex w-[728px] flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between text-base leading-[19px]">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <div class="px-4">
        <DataTable
          :value="cartItems"
          table-style="width: 100%; table-layout: fixed"
          class="text-sm"
        >
          <Column field="product" header="Produkt" style="width: 55.2%" />
          <Column header="Menge" style="width: 22.4%">
            <template #body="{ data, index }">
              <InputNumber
                v-model="cartItems[index].quantity"
                :input-id="`quantity-${data.product}`"
                :min="1"
                show-buttons
                button-layout="vertical"
                class="w-[130px]"
                input-class="w-[96px]"
              />
            </template>
          </Column>
          <Column field="price" header="Preis" style="width: 13.2%" />
          <Column header="" style="width: 9.2%">
            <template #body>
              <Button
                icon="pi pi-trash"
                severity="danger"
                text
                aria-label="Produkt entfernen"
                class="!h-7 !w-[35px]"
              />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider class="!m-0 !py-[14px]" />

      <div class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
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
            input-id="country"
            v-model="country"
            :options="countries"
            option-label="label"
            option-value="value"
            fluid
          />
        </div>
      </div>

      <Divider class="!m-0 !py-[14px]" />

      <fieldset class="flex flex-col gap-4 border-0 px-4 py-0">
        <legend class="p-0 text-sm font-semibold">Versandart</legend>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="shippingMethod"
            input-id="standard-shipping"
            name="shipping"
            value="standard"
          />
          <label for="standard-shipping" class="text-sm">
            Standard (3 - 5 Tage) - kostenlos
          </label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="shippingMethod"
            input-id="express-shipping"
            name="shipping"
            value="express"
          />
          <label for="express-shipping" class="text-sm">
            Express (1 - 2 Tage) - 4,99 €
          </label>
        </div>

        <div class="flex items-center gap-2">
          <RadioButton
            v-model="shippingMethod"
            input-id="same-day-shipping"
            name="shipping"
            value="same-day"
          />
          <label for="same-day-shipping" class="text-sm">
            Same Day (Gleicher Tag) - 9,99 €
          </label>
        </div>
      </fieldset>

      <Divider class="!m-0 !py-[14px]" />

      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" />
      </div>
    </section>
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
</script>