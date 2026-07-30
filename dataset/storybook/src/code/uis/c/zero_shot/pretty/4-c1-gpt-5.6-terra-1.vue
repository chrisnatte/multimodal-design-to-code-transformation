<template>
  <main class="min-h-screen bg-white pt-6 font-sans text-slate-600">
    <section class="mx-auto w-[518px]">
      <header class="relative mb-7">
        <Button
          icon="pi pi-times"
          rounded
          outlined
          severity="secondary"
          aria-label="Schließen"
          class="absolute -left-10 top-0 !h-9 !w-9 !border-slate-200 !p-0 !text-slate-500"
        />
        <h1 class="text-[24px] font-semibold leading-7 text-slate-700">Bestellung aufgeben</h1>
        <p class="mt-0.5 text-[12px] text-slate-400">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </header>

      <nav class="mb-4">
        <div class="flex items-end justify-between text-[12px]">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-400">Bestätigung</span>
        </div>
        <div class="mt-1 flex h-1 overflow-hidden rounded-full bg-slate-200">
          <div class="w-1/2 bg-emerald-500"></div>
          <div class="w-1/2 bg-sky-400"></div>
        </div>
      </nav>

      <DataTable
        :value="products"
        class="mb-5 text-[11px]"
        tableStyle="min-width: 100%"
      >
        <Column field="product" header="Produkt" headerClass="!py-2 !text-[10px] !font-semibold !text-slate-600" bodyClass="!py-1.5">
          <template #body="{ data }">
            <span>{{ data.product }}</span>
          </template>
        </Column>

        <Column header="Menge" headerClass="!w-[115px] !py-2 !text-[10px] !font-semibold !text-slate-600" bodyClass="!py-1.5">
          <template #body="{ index }">
            <InputNumber
              v-model="quantities[index]"
              :min="1"
              :showButtons="true"
              buttonLayout="vertical"
              incrementButtonIcon="pi pi-chevron-up"
              decrementButtonIcon="pi pi-chevron-down"
              class="w-[94px]"
              inputClass="!h-6 !w-[68px] !py-0 !text-[11px]"
              incrementButtonClass="!h-3 !w-6 !p-0"
              decrementButtonClass="!h-3 !w-6 !p-0"
            />
          </template>
        </Column>

        <Column header="Preis" headerClass="!w-[68px] !py-2 !text-[10px] !font-semibold !text-slate-600" bodyClass="!py-1.5 !text-right">
          <template #body="{ data }">
            <span>{{ data.price }}</span>
          </template>
        </Column>

        <Column headerClass="!w-8 !py-2" bodyClass="!py-1.5 !text-right">
          <template #body>
            <Button
              icon="pi pi-trash"
              text
              severity="danger"
              aria-label="Produkt entfernen"
              class="!h-6 !w-6 !p-0 !text-[11px]"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-5" />

      <form class="space-y-3">
        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label for="firstName" class="text-[11px]">Vorname</label>
            <InputText
              id="firstName"
              v-model="firstName"
              class="!h-6 !w-full !px-2 !py-0 !text-[11px]"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label for="lastName" class="text-[11px]">Nachname</label>
            <InputText
              id="lastName"
              v-model="lastName"
              class="!h-6 !w-full !px-2 !py-0 !text-[11px]"
            />
          </div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="street" class="text-[11px]">Straße</label>
          <InputText
            id="street"
            v-model="street"
            class="!h-6 !w-full !px-2 !py-0 !text-[11px]"
          />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="flex flex-col gap-1">
            <label for="city" class="text-[11px]">PLZ / Ort</label>
            <InputText
              id="city"
              v-model="city"
              class="!h-6 !w-full !px-2 !py-0 !text-[11px]"
            />
          </div>

          <div class="flex flex-col gap-1">
            <label for="country" class="text-[11px]">Land</label>
            <Select
              ref="countrySelect"
              inputId="country"
              v-model="country"
              :options="countries"
              appendTo="self"
              class="!h-6 !w-full !text-[11px]"
              pt:label="!py-0 !px-2 !text-[11px]"
              pt:dropdown="!w-6"
              pt:overlay="!text-[11px]"
              pt:option="!px-2 !py-1.5 !text-[11px]"
            />
          </div>
        </div>
      </form>

      <Divider class="!mb-5 !mt-[121px]" />

      <section>
        <h2 class="mb-2 text-[11px] font-semibold text-slate-600">Versandart</h2>
        <div class="flex flex-col gap-2">
          <label class="flex items-center gap-1.5 text-[11px]">
            <RadioButton v-model="shipping" inputId="standard" name="shipping" value="standard" class="!h-3 !w-3" />
            <span>Standard (3 - 5 Tage) - kostenlos</span>
          </label>
          <label class="flex items-center gap-1.5 text-[11px]">
            <RadioButton v-model="shipping" inputId="express" name="shipping" value="express" class="!h-3 !w-3" />
            <span>Express (1 - 2 Tage) - 4,99 €</span>
          </label>
          <label class="flex items-center gap-1.5 text-[11px]">
            <RadioButton v-model="shipping" inputId="sameDay" name="shipping" value="sameDay" class="!h-3 !w-3" />
            <span>Same Day (Gleicher Tag) - 9,99 €</span>
          </label>
        </div>
      </section>

      <Divider class="!mb-5 !mt-5" />

      <footer class="flex items-center justify-between">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="!h-6 !border-0 !bg-slate-100 !px-2 !py-0 !text-[10px] !text-slate-500"
        />
        <Button
          label="Speichern"
          class="!h-6 !border-0 !bg-emerald-500 !px-2 !py-0 !text-[10px]"
        />
      </footer>
    </section>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const products = [
  { product: 'Wireless Kopfhörer', price: '79,99 €' },
  { product: 'USB-C Kabel 2m', price: '14,97 €' }
]

const quantities = ref([1, 1])
const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref(null)
const countrySelect = ref(null)

const countries = ['Spanien', 'Deutschland', 'Österreich', 'Schweiz']

onMounted(() => {
  countrySelect.value?.show()
})
</script>