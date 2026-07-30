<template>
  <main class="mx-auto w-full max-w-[520px] pt-5 text-[11px] text-slate-600">
    <header class="mb-7 flex items-start gap-3">
      <Button
        icon="pi pi-times"
        severity="secondary"
        text
        rounded
        aria-label="Bestellung schließen"
        class="!h-9 !w-9 !bg-slate-100 !text-slate-500"
      />
      <div>
        <h1 class="m-0 text-[24px] font-semibold leading-7 text-slate-700">Bestellung aufgeben</h1>
        <p class="m-0 mt-0.5 text-[12px] text-slate-400">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </header>

    <section class="mb-5">
      <div class="flex justify-between text-[11px]">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-sky-500">Adresse</span>
        <span class="text-slate-500">Bestätigung</span>
      </div>
      <ProgressBar :value="50" :show-value="false" class="mt-1 !h-1" />
    </section>

    <DataTable :value="cartItems" class="text-[10px]">
      <Column field="product" header="Produkt" header-class="!py-2" body-class="!py-2" />
      <Column header="Menge" header-class="!py-2" body-class="!py-1">
        <template #body="{ data }">
          <InputNumber
            v-model="data.quantity"
            :min="1"
            show-buttons
            button-layout="horizontal"
            :step="1"
            input-class="!w-14 !text-[10px]"
            class="!w-[94px]"
          />
        </template>
      </Column>
      <Column header="Preis" header-class="!py-2" body-class="!py-2">
        <template #body="{ data }">{{ data.price }}</template>
      </Column>
      <Column body-class="!py-1 !text-right">
        <template #body>
          <Button
            icon="pi pi-trash"
            severity="danger"
            text
            rounded
            aria-label="Artikel entfernen"
            class="!h-7 !w-7 !text-[11px]"
          />
        </template>
      </Column>
    </DataTable>

    <Divider class="!my-5" />

    <form class="flex flex-col gap-3">
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="first-name">Vorname</label>
          <InputText id="first-name" v-model="firstName" class="!h-6 !text-[10px]" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="last-name">Nachname</label>
          <InputText id="last-name" v-model="lastName" class="!h-6 !text-[10px]" />
        </div>
      </div>

      <div class="flex flex-col gap-1">
        <label for="street">Straße</label>
        <InputText id="street" v-model="street" class="!h-6 !text-[10px]" />
      </div>

      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="postal-code">PLZ / Ort</label>
          <InputText id="postal-code" v-model="postalCode" class="!h-6 !text-[10px]" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="country">Land</label>
          <Select
            ref="countrySelect"
            id="country"
            v-model="country"
            :options="countries"
            class="!h-6 !text-[10px]"
          />
        </div>
      </div>
    </form>

    <Divider class="!my-5" />

    <section>
      <h2 class="mb-3 text-[11px] font-semibold text-slate-600">Versandart</h2>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-1.5">
          <RadioButton v-model="shipping" input-id="standard" value="standard" />
          <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-1.5">
          <RadioButton v-model="shipping" input-id="express" value="express" />
          <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-1.5">
          <RadioButton v-model="shipping" input-id="same-day" value="same-day" />
          <label for="same-day">Same Day (Gleicher Tag) - 9,99 €</label>
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
import { nextTick, onMounted, ref } from 'vue'
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
const postalCode = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref('')

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const countrySelect = ref()

onMounted(async () => {
  await nextTick()
  countrySelect.value?.show()
})
</script>