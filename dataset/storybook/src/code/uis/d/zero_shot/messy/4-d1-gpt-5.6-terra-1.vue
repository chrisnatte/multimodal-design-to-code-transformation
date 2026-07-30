<template>
  <main class="min-h-screen bg-white px-6 py-5 font-sans text-slate-600">
    <div class="mx-auto w-full max-w-[728px]">
      <header class="-ml-[58px] mb-8 flex w-[540px] items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          rounded
          text
          severity="secondary"
          aria-label="Schließen"
          class="!h-[50px] !w-[50px] !bg-slate-100 !text-slate-500"
        />
        <div class="flex flex-col">
          <h1 class="m-0 text-[32px] font-bold leading-[39px] text-slate-700">
            Bestellung aufgeben
          </h1>
          <p class="m-0 text-base leading-5 text-slate-400">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <section class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <div class="flex justify-between text-base">
            <span class="text-emerald-500">Warenkorb</span>
            <span class="text-sky-500">Adresse</span>
            <span class="text-slate-400">Bestätigung</span>
          </div>
          <div class="flex h-[6px] overflow-hidden rounded-full bg-slate-200">
            <div class="w-1/2 bg-emerald-500"></div>
          </div>
        </div>

        <DataTable
          :value="cartItems"
          dataKey="id"
          class="text-sm"
          :pt="{
            table: { class: 'w-full border-collapse' },
            headerCell: { class: 'border-y border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700' },
            bodyCell: { class: 'border-b border-slate-200 bg-white px-4 py-2' }
          }"
        >
          <Column field="product" header="Produkt" headerStyle="width: 55%">
            <template #body="{ data }">
              <span>{{ data.product }}</span>
            </template>
          </Column>
          <Column header="Menge" headerStyle="width: 22%">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                :min="1"
                showButtons
                buttonLayout="vertical"
                incrementButtonIcon="pi pi-chevron-up"
                decrementButtonIcon="pi pi-chevron-down"
                inputClass="!w-[96px] !h-[31px] !px-3 !py-1 !text-sm"
                class="w-[130px]"
              />
            </template>
          </Column>
          <Column header="Preis" headerStyle="width: 14%" bodyStyle="white-space: nowrap">
            <template #body="{ data }">
              <span>{{ data.price }}</span>
            </template>
          </Column>
          <Column header="" headerStyle="width: 9%" bodyStyle="text-align: center">
            <template #body="{ data }">
              <Button
                icon="pi pi-trash"
                text
                rounded
                severity="danger"
                size="small"
                :aria-label="`${data.product} entfernen`"
                @click="removeItem(data.id)"
              />
            </template>
          </Column>
        </DataTable>

        <div class="my-2 h-px bg-slate-200"></div>

        <section class="grid grid-cols-2 gap-x-3 gap-y-4 px-4">
          <div class="flex flex-col gap-1">
            <label for="firstName" class="text-sm">Vorname</label>
            <InputText id="firstName" v-model="firstName" class="h-[33px] w-full !text-sm" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="lastName" class="text-sm">Nachname</label>
            <InputText id="lastName" v-model="lastName" class="h-[33px] w-full !text-sm" />
          </div>

          <div class="col-span-2 flex flex-col gap-1">
            <label for="street" class="text-sm">Straße</label>
            <InputText id="street" v-model="street" class="h-[33px] w-full !text-sm" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="postalCity" class="text-sm">PLZ / Ort</label>
            <InputText id="postalCity" v-model="postalCity" class="h-[33px] w-full !text-sm" />
          </div>

          <div class="relative flex h-[202px] flex-col gap-1">
            <label for="country" class="text-sm">Land</label>
            <Select
              id="country"
              v-model="country"
              :options="countries"
              class="h-[33px] w-full !border-emerald-500 !text-sm"
            />
            <Listbox
              v-model="country"
              :options="countries"
              class="absolute left-0 top-[61px] z-10 w-full shadow-md"
              :pt="{
                list: { class: '!p-1' },
                option: { class: '!min-h-[31px] !px-3 !py-[7px] !text-sm' }
              }"
            />
          </div>
        </section>

        <div class="my-2 h-px bg-slate-200"></div>

        <section class="flex flex-col gap-3 px-4">
          <h2 class="m-0 text-sm font-semibold text-slate-700">Versandart</h2>
          <div class="flex flex-col gap-3">
            <label class="flex items-center gap-2 text-sm">
              <RadioButton v-model="shippingMethod" inputId="standard" value="standard" />
              <span>Standard (3 - 5 Tage) - kostenlos</span>
            </label>
            <label class="flex items-center gap-2 text-sm">
              <RadioButton v-model="shippingMethod" inputId="express" value="express" />
              <span>Express (1 - 2 Tage) - 4,99 €</span>
            </label>
            <label class="flex items-center gap-2 text-sm">
              <RadioButton v-model="shippingMethod" inputId="same-day" value="same-day" />
              <span>Same Day (Gleicher Tag) - 9,99 €</span>
            </label>
          </div>
        </section>

        <div class="my-2 h-px bg-slate-200"></div>

        <div class="flex items-center justify-between">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-[33px] !border-slate-100 !bg-slate-100 !px-3 !text-sm !text-slate-600"
            @click="cancelled = true"
          />
          <Button
            label="Speichern"
            class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-3 !text-sm"
            @click="saved = true"
          />
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
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shippingMethod = ref(null)
const cancelled = ref(false)
const saved = ref(false)

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

const cartItems = ref([
  { id: 1, product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { id: 2, product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const removeItem = (id) => {
  cartItems.value = cartItems.value.filter((item) => item.id !== id)
}
</script>