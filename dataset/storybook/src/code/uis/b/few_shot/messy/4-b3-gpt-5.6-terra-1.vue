<template>
  <main class="min-h-screen bg-white px-6 py-7">
    <div class="mx-auto w-full max-w-[838px]">
      <header class="mb-11 flex items-center gap-4">
        <Avatar icon="pi pi-shopping-cart" shape="circle" class="!h-[50px] !w-[50px] !bg-slate-100 !text-2xl !text-slate-700" />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight text-slate-950">Bestellung aufgeben</h1>
          <p class="text-base text-slate-950">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <section class="mx-auto flex w-full max-w-[728px] flex-col">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-base text-slate-950">
            <span>Warenkorb</span>
            <span>Adresse</span>
            <span>Bestätigung</span>
          </div>
          <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
        </div>

        <DataTable
          :value="cartItems"
          class="mt-4"
          :pt="{
            table: 'border-collapse',
            headerCell: '!border !border-slate-200 !bg-white !px-3.5 !py-2.5 !text-sm !font-semibold !text-slate-950',
            bodyCell: '!border !border-slate-200 !bg-white !px-3.5 !py-2',
          }"
        >
          <Column field="product" header="Produkt" header-class="w-[55%]" />
          <Column header="Menge" header-class="w-[22%]">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                :min="1"
                show-buttons
                button-layout="vertical"
                increment-button-icon="pi pi-chevron-up"
                decrement-button-icon="pi pi-chevron-down"
                class="w-[130px]"
                input-class="!w-24 !h-[31px] !text-sm"
                :pt="{
                  incrementButton: '!h-4 !w-[35px] !rounded-none !bg-slate-950 !p-0',
                  decrementButton: '!h-4 !w-[35px] !rounded-none !bg-slate-950 !p-0',
                }"
              />
            </template>
          </Column>
          <Column header="Preis" header-class="w-[13%]" body-class="text-right">
            <template #body="{ data }">
              {{ formatPrice(data.price) }}
            </template>
          </Column>
          <Column header="" header-class="w-[10%]" body-class="text-center">
            <template #body="{ data }">
              <Button
                icon="pi pi-trash"
                severity="secondary"
                text
                rounded
                aria-label="Produkt entfernen"
                @click="removeItem(data)"
              />
            </template>
          </Column>
        </DataTable>

        <Divider class="!my-7" />

        <form class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
          <div class="flex flex-col gap-1.5">
            <label for="first-name" class="text-sm text-slate-950">Vorname</label>
            <InputText id="first-name" v-model="firstName" class="!h-[33px] !text-sm" />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="last-name" class="text-sm text-slate-950">Nachname</label>
            <InputText id="last-name" v-model="lastName" class="!h-[33px] !text-sm" />
          </div>

          <div class="col-span-2 flex flex-col gap-1.5">
            <label for="street" class="text-sm text-slate-950">Straße</label>
            <InputText id="street" v-model="street" class="!h-[33px] !text-sm" />
          </div>

          <div class="flex flex-col gap-1.5">
            <label for="postal-city" class="text-sm text-slate-950">PLZ / Ort</label>
            <InputText id="postal-city" v-model="postalCity" class="!h-[33px] !text-sm" />
          </div>

          <div class="relative flex flex-col gap-1.5">
            <label for="country" class="text-sm text-slate-950">Land</label>
            <Select
              id="country"
              v-model="country"
              :options="countries"
              class="!h-[33px] !border-primary !text-sm"
            />
            <Listbox
              v-model="country"
              :options="countries"
              class="absolute top-[63px] z-10 w-full !rounded-md !border-slate-200 !text-sm shadow-none"
              :pt="{
                list: '!p-1',
                option: '!rounded !px-2.5 !py-2',
              }"
            />
          </div>
        </form>

        <Divider class="!my-7" />

        <section class="flex flex-col gap-3 px-4">
          <h2 class="text-sm font-semibold text-slate-950">Versandart</h2>
          <div class="flex flex-col gap-3">
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="standard" value="standard" />
              <label for="standard" class="text-sm text-slate-950">Standard (3 - 5 Tage) - kostenlos</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="express" value="express" />
              <label for="express" class="text-sm text-slate-950">Express (1 - 2 Tage) - 4,99 €</label>
            </div>
            <div class="flex items-center gap-2">
              <RadioButton v-model="shippingMethod" input-id="same-day" value="same-day" />
              <label for="same-day" class="text-sm text-slate-950">Same Day (Gleicher Tag) - 9,99 €</label>
            </div>
          </div>
        </section>

        <Divider class="!my-7" />

        <footer class="flex items-center justify-between">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Speichern" severity="primary" />
        </footer>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
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
  { product: 'Wireless Kopfhörer', quantity: 1, price: 79.99 },
  { product: 'USB-C Kabel 2m', quantity: 1, price: 14.97 },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref('')

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

function formatPrice(price: number) {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(price)
}

function removeItem(item: { product: string; quantity: number; price: number }) {
  cartItems.value = cartItems.value.filter((cartItem) => cartItem !== item)
}
</script>