<template>
  <main class="flex min-h-screen flex-col items-center bg-white pt-[92px] font-sans text-slate-700">
    <header class="flex w-[802px] items-center gap-4">
      <Button
        icon="pi pi-times-circle"
        severity="secondary"
        variant="text"
        rounded
        aria-label="Bestellung schließen"
        class="!h-[50px] !w-[50px] !bg-slate-100 !text-[32px]"
      />
      <div class="flex flex-col gap-1">
        <h1 class="m-0 text-[32px] leading-[39px] font-bold text-slate-700">Bestellung aufgeben</h1>
        <p class="m-0 text-base leading-[19px] text-slate-500">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </header>

    <section class="mt-[47px] flex w-[728px] flex-col gap-4">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base leading-[19px]">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-[6px]" />
      </div>

      <DataTable
        :value="products"
        table-style="width: 100%"
        :pt="{
          root: 'px-4',
          table: 'text-sm',
          headerCell: '!bg-white !px-[14px] !py-[10px] !text-slate-700',
          bodyCell: '!border-x-0 !border-t !border-b-0 !border-slate-200 !px-[14px] !py-[10px]',
        }"
      >
        <Column field="name" header="Produkt" style="width: 384px" />
        <Column header="Menge" style="width: 156px">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              :min="1"
              show-buttons
              button-layout="vertical"
              increment-button-icon="pi pi-angle-up"
              decrement-button-icon="pi pi-angle-down"
              class="w-[130px]"
              input-class="!w-[96px] !h-[31px] !text-sm"
              :pt="{
                incrementButton: '!w-[35px] !h-[16px]',
                decrementButton: '!w-[35px] !h-[16px]',
              }"
            />
          </template>
        </Column>
        <Column field="price" header="Preis" style="width: 92px">
          <template #body="{ data }">
            {{ data.price }}
          </template>
        </Column>
        <Column style="width: 64px">
          <template #body>
            <Button
              icon="pi pi-trash"
              severity="danger"
              variant="text"
              aria-label="Produkt entfernen"
              class="!h-7 !w-[35px]"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-0" />

      <div class="grid h-[356px] grid-cols-2 content-start gap-x-4 gap-y-4 px-4">
        <div class="flex flex-col gap-2">
          <label for="firstname">Vorname</label>
          <InputText id="firstname" v-model="firstName" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label for="lastname">Nachname</label>
          <InputText id="lastname" v-model="lastName" fluid />
        </div>

        <div class="col-span-2 flex flex-col gap-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label for="postal-city">PLZ / Ort</label>
          <InputText id="postal-city" v-model="postalCity" fluid />
        </div>

        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Select
            ref="countrySelect"
            v-model="country"
            input-id="country"
            :options="countries"
            fluid
            append-to="self"
            class="!border-emerald-500"
          />
        </div>
      </div>

      <Divider class="!my-0" />

      <div class="flex flex-col gap-4 px-4">
        <span class="text-sm font-semibold">Versandart</span>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" input-id="standard" name="shipping" value="standard" />
            <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" input-id="express" name="shipping" value="express" />
            <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shippingMethod" input-id="same-day" name="shipping" value="same-day" />
            <label for="same-day">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider class="!my-0" />

      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" />
      </div>
    </section>
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

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref('')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const countrySelect = ref<InstanceType<typeof Select> | null>(null)

onMounted(async () => {
  await nextTick()
  countrySelect.value?.show()
})
</script>