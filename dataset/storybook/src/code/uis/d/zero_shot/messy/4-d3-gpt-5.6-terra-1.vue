<template>
  <main class="min-h-screen bg-white pt-6 font-sans text-slate-600">
    <div class="mx-auto w-[598px]">
      <header class="ml-1 flex items-start gap-3">
        <Button
          icon="pi pi-times"
          rounded
          outlined
          severity="secondary"
          aria-label="Schließen"
          class="!h-9 !w-9 !border-slate-200 !bg-slate-50 !text-slate-500"
        />
        <div class="pt-0.5">
          <h1 class="m-0 text-[24px] font-bold leading-7 text-slate-700">Bestellung aufgeben</h1>
          <p class="m-0 mt-0.5 text-[10px] leading-3 text-slate-400">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <section class="ml-[41px] mt-8 w-[518px]">
        <div class="flex text-[10px] font-medium">
          <span class="w-1/2 text-emerald-500">Warenkorb</span>
          <span class="w-1/4 text-center text-sky-500">Adresse</span>
          <span class="w-1/4 text-right text-slate-400">Bestätigung</span>
        </div>
        <div class="mt-1 flex h-[5px] overflow-hidden rounded-full bg-slate-200">
          <span class="w-1/2 bg-emerald-500"></span>
        </div>

        <DataTable
          :value="products"
          class="mt-3 text-[9px]"
          :pt="{
            table: { class: 'w-full border-collapse' },
            headerCell: {
              class: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3 !py-0 !h-7 !text-[9px] !font-semibold !text-slate-600'
            },
            bodyCell: {
              class: '!border-x-0 !border-t-0 !border-b !border-slate-200 !bg-white !px-3 !py-0 !h-9 !text-[9px] !text-slate-600'
            }
          }"
        >
          <Column field="name" header="Produkt" headerStyle="width: 55%" />
          <Column header="Menge" headerStyle="width: 22%">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                :min="1"
                showButtons
                buttonLayout="vertical"
                class="!h-6 !w-[92px]"
                :pt="{
                  input: { class: '!h-6 !w-[68px] !px-2 !py-0 !text-[10px]' },
                  incrementButton: { class: '!h-3 !w-6 !p-0' },
                  decrementButton: { class: '!h-3 !w-6 !p-0' }
                }"
              />
            </template>
          </Column>
          <Column header="Preis" headerStyle="width: 15%" bodyStyle="text-align: center">
            <template #body="{ data }">
              {{ data.price }}
            </template>
          </Column>
          <Column header="" headerStyle="width: 8%" bodyStyle="text-align: center">
            <template #body="{ index }">
              <Button
                icon="pi pi-trash"
                text
                severity="danger"
                aria-label="Produkt entfernen"
                class="!h-6 !w-6 !p-0 !text-[10px]"
                @click="removeProduct(index)"
              />
            </template>
          </Column>
        </DataTable>

        <div class="mt-5 border-t border-slate-200"></div>

        <form class="mt-6 px-3">
          <div class="grid grid-cols-2 gap-x-3 gap-y-3">
            <div class="flex flex-col">
              <label for="firstName" class="mb-1 text-[9px] text-slate-600">Vorname</label>
              <InputText
                id="firstName"
                v-model="firstName"
                class="!h-6 !w-full !px-2 !py-0 !text-[10px]"
              />
            </div>

            <div class="flex flex-col">
              <label for="lastName" class="mb-1 text-[9px] text-slate-600">Nachname</label>
              <InputText
                id="lastName"
                v-model="lastName"
                class="!h-6 !w-full !px-2 !py-0 !text-[10px]"
              />
            </div>

            <div class="col-span-2 flex flex-col">
              <label for="street" class="mb-1 text-[9px] text-slate-600">Straße</label>
              <InputText
                id="street"
                v-model="street"
                class="!h-6 !w-full !px-2 !py-0 !text-[10px]"
              />
            </div>

            <div class="flex flex-col">
              <label for="postalCode" class="mb-1 text-[9px] text-slate-600">PLZ / Ort</label>
              <InputText
                id="postalCode"
                v-model="postalCode"
                class="!h-6 !w-full !px-2 !py-0 !text-[10px]"
              />
            </div>

            <div class="relative z-10 flex flex-col">
              <label for="country" class="mb-1 text-[9px] text-slate-600">Land</label>
              <Select
                id="country"
                ref="countrySelect"
                v-model="country"
                :options="countryOptions"
                appendTo="self"
                class="!h-6 !w-full !border-emerald-400 !text-[10px]"
                :pt="{
                  label: { class: '!px-2 !py-0 !leading-6 !text-[10px]' },
                  dropdown: { class: '!w-7' },
                  dropdownIcon: { class: '!h-3 !w-3 !text-[10px]' },
                  overlay: { class: '!mt-0.5 !border-slate-200 !shadow-md' },
                  list: { class: '!p-1' },
                  option: { class: '!min-h-0 !px-2 !py-1.5 !text-[10px]' }
                }"
              />
            </div>
          </div>
        </form>

        <div class="mt-[121px] border-t border-slate-200"></div>

        <section class="mt-5 px-3">
          <h2 class="m-0 text-[9px] font-semibold text-slate-600">Versandart</h2>
          <div class="mt-3 flex flex-col gap-2">
            <label class="flex cursor-pointer items-center gap-1.5 text-[9px] text-slate-600">
              <RadioButton v-model="shippingMethod" inputId="standard" value="standard" class="scale-[0.72]" />
              <span>Standard (3 - 5 Tage) - kostenlos</span>
            </label>
            <label class="flex cursor-pointer items-center gap-1.5 text-[9px] text-slate-600">
              <RadioButton v-model="shippingMethod" inputId="express" value="express" class="scale-[0.72]" />
              <span>Express (1 - 2 Tage) - 4,99 €</span>
            </label>
            <label class="flex cursor-pointer items-center gap-1.5 text-[9px] text-slate-600">
              <RadioButton v-model="shippingMethod" inputId="sameDay" value="sameDay" class="scale-[0.72]" />
              <span>Same Day (Gleicher Tag) - 9,99 €</span>
            </label>
          </div>
        </section>

        <div class="mt-5 border-t border-slate-200"></div>

        <div class="mt-5 flex items-center justify-between">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-6 !border-slate-100 !bg-slate-100 !px-2 !py-0 !text-[9px] !text-slate-500"
          />
          <Button
            label="Speichern"
            severity="success"
            class="!h-6 !px-2 !py-0 !text-[9px]"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const products = ref([
  { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCode = ref('10115 Berlin')
const country = ref('Deutschland')
const countryOptions = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const shippingMethod = ref(null)
const countrySelect = ref(null)

const removeProduct = (index) => {
  products.value.splice(index, 1)
}

onMounted(() => {
  nextTick(() => {
    countrySelect.value?.show()
  })
})
</script>