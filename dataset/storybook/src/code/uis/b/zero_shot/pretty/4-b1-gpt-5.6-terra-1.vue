<template>
  <main class="min-h-screen bg-white px-6 pt-[92px] pb-6 font-sans text-sm text-slate-900">
    <div class="mx-auto w-full max-w-[728px]">
      <header class="flex items-center gap-4 -translate-x-[58px]">
        <Button
          icon="pi pi-times-circle"
          rounded
          severity="secondary"
          class="!h-[50px] !w-[50px] !bg-slate-100 !text-[32px]"
          aria-label="Schließen"
        />
        <div class="flex h-[58px] flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-[39px]">Bestellung aufgeben</h1>
          <p class="text-base leading-[19px]">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <section class="mt-[47px] flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-base leading-[19px]">
            <span>Warenkorb</span>
            <span>Adresse</span>
            <span>Bestätigung</span>
          </div>
          <ProgressBar :value="50" :show-value="false" class="h-[6px]" />
        </div>

        <DataTable :value="cartItems" class="px-4">
          <Column field="product" header="Produkt" header-class="w-[55%]">
            <template #body="{ data }">
              <span>{{ data.product }}</span>
            </template>
          </Column>
          <Column header="Menge" header-class="w-[22%]">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                show-buttons
                button-layout="stacked"
                :min="1"
                class="w-[130px]"
                input-class="w-[96px]"
              />
            </template>
          </Column>
          <Column header="Preis" header-class="w-[13%]" body-class="text-center">
            <template #body="{ data }">
              <span>{{ data.price }}</span>
            </template>
          </Column>
          <Column header="" header-class="w-[10%]" body-class="text-center">
            <template #body>
              <Button
                icon="pi pi-trash"
                severity="danger"
                text
                size="small"
                aria-label="Artikel entfernen"
              />
            </template>
          </Column>
        </DataTable>

        <Divider class="!my-0" />

        <form class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
          <div class="flex flex-col gap-[7px]">
            <label for="firstName">Vorname</label>
            <InputText id="firstName" v-model="firstName" class="w-full" />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="lastName">Nachname</label>
            <InputText id="lastName" v-model="lastName" class="w-full" />
          </div>

          <div class="col-span-2 flex flex-col gap-[7px]">
            <label for="street">Straße</label>
            <InputText id="street" v-model="street" class="w-full" />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="postalPlace">PLZ / Ort</label>
            <InputText id="postalPlace" v-model="postalPlace" class="w-full" />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-[7px]">
              <label for="country">Land</label>
              <Select
                id="country"
                v-model="country"
                :options="countries"
                option-label="name"
                class="w-full"
              />
            </div>
            <Listbox
              v-model="country"
              :options="countries"
              option-label="name"
              class="h-[139px] w-full"
              list-class="!py-[3px]"
            />
          </div>
        </form>

        <Divider class="!my-0" />

        <section class="flex flex-col gap-4 px-4">
          <h2 class="font-semibold">Versandart</h2>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="standard" name="shipping" value="standard" />
              <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="express" name="shipping" value="express" />
              <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="sameDay" name="shipping" value="sameDay" />
              <label for="sameDay">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
          </div>
        </section>

        <Divider class="!my-0" />

        <div class="flex items-center justify-between">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Speichern" />
        </div>
      </section>
    </div>
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
const postalPlace = ref('10115 Berlin')
const countries = ref([
  { name: 'Spanien' },
  { name: 'Deutschland' },
  { name: 'Österreich' },
  { name: 'Schweiz' }
])
const country = ref(countries.value[1])
const shippingMethod = ref('')
</script>