<template>
  <main class="flex min-h-screen justify-center bg-white px-6 py-5 text-slate-700">
    <section class="w-full max-w-[520px]">
      <header class="mb-7 flex items-start gap-3">
        <Button
          icon="pi pi-times"
          severity="secondary"
          variant="outlined"
          rounded
          size="small"
          aria-label="Schließen"
          class="mt-0.5"
        />
        <div>
          <h1 class="text-xl font-bold leading-none text-slate-700">Bestellung aufgeben</h1>
          <p class="mt-1 text-xs text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </header>

      <div class="mb-4">
        <div class="mb-1 flex justify-between text-xs">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-cyan-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1" aria-label="Bestellfortschritt" />
      </div>

      <DataTable
        :value="cartItems"
        size="small"
        table-style="width: 100%"
        :pt="{
          table: 'text-xs',
          headerCell: '!bg-white !border-x-0 !border-t-0 !px-3 !py-2',
          bodyCell: '!border-x-0 !px-3 !py-2',
        }"
      >
        <Column field="product" header="Produkt" />
        <Column header="Menge" header-class="w-28" body-class="w-28">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              show-buttons
              button-layout="horizontal"
              increment-button-icon="pi pi-chevron-up"
              decrement-button-icon="pi pi-chevron-down"
              class="w-[94px]"
              input-class="!w-12 !py-1 !text-xs"
              :pt="{
                incrementButton: { class: '!w-6 !border-l !p-0' },
                decrementButton: { class: '!w-6 !border-l !p-0' },
              }"
            />
          </template>
        </Column>
        <Column header="Preis" header-class="w-20" body-class="w-20">
          <template #body="{ data }">{{ data.price }}</template>
        </Column>
        <Column header-class="w-8" body-class="w-8">
          <template #body>
            <Button
              icon="pi pi-trash"
              severity="danger"
              variant="text"
              size="small"
              aria-label="Artikel entfernen"
              class="!h-6 !w-6 !p-0"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-5" />

      <form class="flex flex-col gap-3" @submit.prevent>
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label for="first-name" class="text-xs">Vorname</label>
            <InputText id="first-name" v-model="firstName" size="small" fluid />
          </div>
          <div class="flex flex-col gap-1">
            <label for="last-name" class="text-xs">Nachname</label>
            <InputText id="last-name" v-model="lastName" size="small" fluid />
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="street" class="text-xs">Straße</label>
          <InputText id="street" v-model="street" size="small" fluid />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label for="postal-code" class="text-xs">PLZ / Ort</label>
            <InputText id="postal-code" v-model="postalCode" size="small" fluid />
          </div>
          <div class="flex flex-col gap-1">
            <label for="country" class="text-xs">Land</label>
            <Select
              ref="countrySelect"
              v-model="country"
              input-id="country"
              :options="countries"
              size="small"
              fluid
              append-to="self"
              :pt="{
                overlay: { class: '!mt-0 !w-full' },
                list: { class: '!p-1' },
                option: { class: '!px-2 !py-1.5 !text-xs' },
              }"
            />
          </div>
        </div>
      </form>

      <Divider class="!my-5" />

      <div class="flex flex-col gap-2">
        <span class="text-xs font-bold">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="standard" name="shipping" value="Standard" size="small" />
          <label for="standard" class="text-xs">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="express" name="shipping" value="Express" size="small" />
          <label for="express" class="text-xs">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="same-day" name="shipping" value="Same Day" size="small" />
          <label for="same-day" class="text-xs">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider class="!my-5" />

      <footer class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" size="small" />
        <Button label="Speichern" severity="success" size="small" type="submit" />
      </footer>
    </section>
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
const shipping = ref('')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const countrySelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(() => {
  countrySelect.value?.show()
})
</script>