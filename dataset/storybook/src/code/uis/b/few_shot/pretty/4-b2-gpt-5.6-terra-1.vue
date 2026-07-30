<template>
  <div class="min-h-screen bg-white pt-[92px]">
    <div class="mx-auto flex w-[728px] flex-col gap-10">
      <div class="flex items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          severity="secondary"
          rounded
          aria-label="Bestellung schließen"
          class="!h-[50px] !w-[50px]"
        />
        <div class="flex h-[58px] flex-col gap-1">
          <h1 class="text-[32px] leading-[39px] font-bold">Bestellung aufgeben</h1>
          <p class="text-base leading-[19px]">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </div>

      <main class="flex flex-col gap-4">
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
            table-style="width: 100%"
            table-class="text-sm"
            :pt="{
              headerCell: { class: '!px-3.5 !py-2.5' },
              bodyCell: { class: '!px-3.5 !py-2.5' },
            }"
          >
            <Column field="product" header="Produkt" style="width: 55.2%" />
            <Column header="Menge" style="width: 22.4%">
              <template #body="{ data }">
                <InputNumber
                  v-model="data.quantity"
                  :input-id="`quantity-${data.id}`"
                  :min="1"
                  show-buttons
                  button-layout="vertical"
                  decrement-button-icon="pi pi-angle-down"
                  increment-button-icon="pi pi-angle-up"
                  class="w-[130px]"
                  input-class="w-[96px]"
                />
              </template>
            </Column>
            <Column field="price" header="Preis" style="width: 13.2%">
              <template #body="{ data }">
                <span class="whitespace-nowrap">{{ data.price }}</span>
              </template>
            </Column>
            <Column style="width: 9.2%">
              <template #body="{ data }">
                <Button
                  icon="pi pi-trash"
                  severity="danger"
                  variant="text"
                  aria-label="Produkt entfernen"
                  @click="removeItem(data.id)"
                />
              </template>
            </Column>
          </DataTable>
        </div>

        <Divider class="!my-0" />

        <div class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
          <div class="flex flex-col gap-2">
            <label for="first-name" class="text-sm">Vorname</label>
            <InputText id="first-name" v-model="firstName" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="last-name" class="text-sm">Nachname</label>
            <InputText id="last-name" v-model="lastName" />
          </div>
          <div class="col-span-2 flex flex-col gap-2">
            <label for="street" class="text-sm">Straße</label>
            <InputText id="street" v-model="street" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="postal-city" class="text-sm">PLZ / Ort</label>
            <InputText id="postal-city" v-model="postalCity" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="country" class="text-sm">Land</label>
            <Select
              v-model="country"
              input-id="country"
              :options="countries"
              class="w-full"
              :overlay-style="{ maxHeight: '139px' }"
            />
          </div>
        </div>

        <Divider class="!my-0" />

        <section class="flex flex-col gap-4 px-4">
          <h2 class="text-sm font-semibold">Versandart</h2>
          <div class="flex flex-col gap-4">
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
          </div>
        </section>

        <Divider class="!my-0" />

        <div class="flex items-center justify-between">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Speichern" />
        </div>
      </main>
    </div>
  </div>
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
  {
    id: 1,
    product: 'Wireless Kopfhörer',
    quantity: 1,
    price: '79,99 €',
  },
  {
    id: 2,
    product: 'USB-C Kabel 2m',
    quantity: 1,
    price: '14,97 €',
  },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const shippingMethod = ref('')

function removeItem(id: number) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)
}
</script>