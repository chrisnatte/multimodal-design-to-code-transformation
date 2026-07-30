<template>
  <main class="flex min-h-screen flex-col items-center bg-white px-6 py-[92px]">
    <header class="mb-12 flex w-full max-w-[802px] items-center gap-4">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        rounded
        aria-label="Schließen"
        class="!h-[50px] !w-[50px]"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-[32px] leading-tight font-bold">Bestellung aufgeben</h1>
        <p class="text-base">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </header>

    <section class="flex w-full max-w-[728px] flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between text-base">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <div class="px-4">
        <DataTable :value="cartItems" class="w-full">
          <Column field="product" header="Produkt" header-class="w-[55%]" />
          <Column header="Menge" header-class="w-[22%]">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
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
          <Column field="price" header="Preis" header-class="w-[13%]" body-class="text-center" />
          <Column header-class="w-[10%]" body-class="text-center">
            <template #body="{ data }">
              <Button
                icon="pi pi-trash"
                severity="danger"
                aria-label="Produkt entfernen"
                @click="removeItem(data.id)"
              />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider />

      <div class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
        <div class="flex flex-col gap-2">
          <label for="first-name">Vorname</label>
          <InputText id="first-name" v-model="firstName" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="last-name">Nachname</label>
          <InputText id="last-name" v-model="lastName" />
        </div>

        <div class="col-span-2 flex flex-col gap-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="postal-city">PLZ / Ort</label>
          <InputText id="postal-city" v-model="postalCity" />
        </div>

        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Select id="country" v-model="country" :options="countries" class="w-full" />
          <Listbox v-model="country" :options="countries" class="w-full" />
        </div>
      </div>

      <Divider />

      <fieldset class="flex flex-col gap-4 px-4">
        <legend class="text-sm font-semibold">Versandart</legend>

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
      </fieldset>

      <Divider />

      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
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
import Listbox from 'primevue/listbox'
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const cartItems = ref([
  { id: 1, product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { id: 2, product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref('')

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

function removeItem(id: number) {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)
}
</script>