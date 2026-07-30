<template>
  <main class="min-h-screen bg-white pt-6 font-sans text-slate-700">
    <section class="mx-auto w-[518px]">
      <header class="mb-7 flex items-start gap-3">
        <Button
          icon="pi pi-times"
          rounded
          outlined
          severity="secondary"
          aria-label="Schließen"
          class="mt-0.5 !h-9 !w-9 !border-slate-100 !bg-slate-50 !text-slate-500"
        />
        <div>
          <h1 class="text-[23px] font-bold leading-6 text-slate-700">Bestellung aufgeben</h1>
          <p class="mt-1 text-[11px] leading-3 text-slate-500">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <div class="mb-5">
        <div class="flex justify-between text-[11px]">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <div class="mt-1 h-1 overflow-hidden rounded bg-slate-200">
          <div class="h-full w-1/2 bg-emerald-500"></div>
        </div>
      </div>

      <DataTable
        :value="cartItems"
        class="checkout-table text-[10px]"
        table-class="w-full"
      >
        <Column field="product" header="Produkt" header-class="!font-semibold">
          <template #body="{ data }">
            <span>{{ data.product }}</span>
          </template>
        </Column>
        <Column header="Menge" class="w-[114px]">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              :use-grouping="false"
              show-buttons
              button-layout="vertical"
              increment-button-icon="pi pi-chevron-up"
              decrement-button-icon="pi pi-chevron-down"
              class="quantity-input w-[94px]"
              input-class="!h-[23px] !w-[66px] !px-2 !text-[10px]"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" class="w-[72px] text-center" header-class="text-center !font-semibold">
          <template #body="{ data }">
            <span>{{ data.price }}</span>
          </template>
        </Column>
        <Column class="w-[44px]">
          <template #body>
            <Button
              icon="pi pi-trash"
              text
              severity="danger"
              aria-label="Produkt entfernen"
              class="!h-7 !w-7 !p-0 !text-[11px]"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-5" />

      <div class="grid grid-cols-2 gap-x-3 gap-y-3 px-3">
        <div class="flex flex-col gap-1">
          <label for="firstName" class="text-[10px]">Vorname</label>
          <InputText id="firstName" v-model="firstName" class="!h-6 !w-full !px-2 !text-[10px]" />
        </div>

        <div class="flex flex-col gap-1">
          <label for="lastName" class="text-[10px]">Nachname</label>
          <InputText id="lastName" v-model="lastName" class="!h-6 !w-full !px-2 !text-[10px]" />
        </div>

        <div class="col-span-2 flex flex-col gap-1">
          <label for="street" class="text-[10px]">Straße</label>
          <InputText id="street" v-model="street" class="!h-6 !w-full !px-2 !text-[10px]" />
        </div>

        <div class="flex flex-col gap-1">
          <label for="city" class="text-[10px]">PLZ / Ort</label>
          <InputText id="city" v-model="city" class="!h-6 !w-full !px-2 !text-[10px]" />
        </div>

        <div class="relative flex flex-col gap-1">
          <label for="country" class="text-[10px]">Land</label>
          <Select
            id="country"
            v-model="country"
            :options="countries"
            class="!h-6 !w-full !border-emerald-400 !text-[10px]"
            label-class="!px-2 !text-[10px]"
            dropdown-icon="pi pi-chevron-down"
          />
          <Listbox
            v-model="country"
            :options="countries"
            class="country-options absolute left-0 top-[43px] z-10 w-full !rounded !text-[10px] shadow-md"
            list-class="!p-1"
            option-class="!px-2 !py-1"
          />
        </div>
      </div>

      <Divider class="!mb-5 !mt-[121px]" />

      <div class="px-3">
        <h2 class="mb-3 text-[10px] font-semibold">Versandart</h2>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-1">
            <RadioButton v-model="shippingMethod" input-id="standard" value="standard" />
            <label for="standard" class="text-[10px]">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-1">
            <RadioButton v-model="shippingMethod" input-id="express" value="express" />
            <label for="express" class="text-[10px]">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-1">
            <RadioButton v-model="shippingMethod" input-id="same-day" value="same-day" />
            <label for="same-day" class="text-[10px]">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="!my-5" />

      <div class="flex items-center justify-between">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="!h-6 !border-slate-100 !bg-slate-100 !px-2 !text-[10px] !text-slate-600"
        />
        <Button
          label="Speichern"
          severity="success"
          class="!h-6 !px-2 !text-[10px]"
        />
      </div>
    </section>
  </main>
</template>

<script setup>
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

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref(null)

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

const cartItems = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])
</script>