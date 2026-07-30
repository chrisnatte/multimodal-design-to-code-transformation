<template>
  <main class="min-h-screen bg-white pt-5 text-slate-600">
    <section class="relative mx-auto w-[518px]">
      <Button
        icon="pi pi-times"
        rounded
        outlined
        severity="secondary"
        aria-label="Schließen"
        class="absolute -left-11 top-1 !h-9 !w-9 !border-slate-200 !text-slate-500"
      />

      <header class="mb-7 pl-1">
        <h1 class="text-[23px] font-semibold leading-6 text-slate-700">Bestellung aufgeben</h1>
        <p class="mt-1 text-xs text-slate-400">Schließe deine Bestellung mit dem Produktkauf im Warenkorb ab.</p>
      </header>

      <nav class="mb-4">
        <div class="flex justify-between text-xs">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="ml-9 text-cyan-500">Adresse</span>
          <span class="text-slate-400">Bestätigung</span>
        </div>
        <div class="mt-1 h-1 w-full overflow-hidden rounded bg-slate-200">
          <div class="h-full w-1/2 bg-emerald-500"></div>
        </div>
      </nav>

      <DataTable
        :value="products"
        size="small"
        class="w-full text-xs"
        :pt="{
          table: { class: 'w-full' },
          headerCell: { class: '!border-x-0 !border-t-0 !border-slate-200 !px-3 !py-2 !text-[10px] !font-semibold !text-slate-600' },
          bodyCell: { class: '!border-x-0 !border-slate-200 !px-3 !py-1.5 !text-[10px] !text-slate-600' }
        }"
      >
        <Column field="product" header="Produkt" headerClass="w-[55%]"></Column>

        <Column header="Menge" headerClass="w-[24%]">
          <template #body="{ data }">
            <InputNumber
              v-model="quantities[data.id]"
              :min="1"
              showButtons
              buttonLayout="vertical"
              class="w-[94px]"
              inputClass="!w-[94px] !py-1 !text-[10px]"
              :pt="{
                incrementButton: { class: '!w-5 !p-0' },
                decrementButton: { class: '!w-5 !p-0' }
              }"
            />
          </template>
        </Column>

        <Column field="price" header="Preis" headerClass="w-[14%]" bodyClass="whitespace-nowrap"></Column>

        <Column headerClass="w-[7%]">
          <template #body>
            <Button
              icon="pi pi-trash"
              text
              rounded
              severity="danger"
              aria-label="Produkt entfernen"
              class="!h-6 !w-6 !p-0"
            />
          </template>
        </Column>
      </DataTable>

      <Divider class="!my-5" />

      <section class="min-h-[276px] px-3">
        <div class="grid grid-cols-2 gap-x-3">
          <div class="flex flex-col gap-1">
            <label for="firstName" class="text-[11px]">Vorname</label>
            <InputText id="firstName" v-model="firstName" class="w-full !py-1 !text-[11px]" />
          </div>

          <div class="flex flex-col gap-1">
            <label for="lastName" class="text-[11px]">Nachname</label>
            <InputText id="lastName" v-model="lastName" class="w-full !py-1 !text-[11px]" />
          </div>
        </div>

        <div class="mt-3 flex flex-col gap-1">
          <label for="street" class="text-[11px]">Straße</label>
          <InputText id="street" v-model="street" class="w-full !py-1 !text-[11px]" />
        </div>

        <div class="mt-3 grid grid-cols-2 gap-x-3">
          <div class="flex flex-col gap-1">
            <label for="postalCode" class="text-[11px]">PLZ / Ort</label>
            <InputText id="postalCode" v-model="postalCode" class="w-full !py-1 !text-[11px]" />
          </div>

          <div class="relative flex flex-col gap-1">
            <label for="country" class="text-[11px]">Land</label>
            <Select
              id="country"
              v-model="country"
              :options="countries"
              class="w-full !text-[11px]"
              :pt="{ label: { class: '!py-1 !text-[11px]' }, dropdown: { class: '!w-7' } }"
            />

            <Listbox
              v-model="country"
              :options="countries"
              class="absolute left-0 top-[49px] z-10 w-full overflow-hidden !border-slate-200 !text-[11px] shadow-md"
              :pt="{
                list: { class: '!p-1' },
                option: { class: '!px-2 !py-1 !text-[11px]' }
              }"
            />
          </div>
        </div>
      </section>

      <Divider class="!my-0" />

      <section class="px-3 pt-5">
        <h2 class="mb-3 text-[11px] font-semibold text-slate-600">Versandart</h2>

        <div class="flex flex-col gap-2">
          <label class="flex items-center gap-1.5 text-[11px]">
            <RadioButton v-model="shipping" inputId="standard" name="shipping" value="standard" />
            <span>Standard (3 - 5 Tage) - kostenlos</span>
          </label>

          <label class="flex items-center gap-1.5 text-[11px]">
            <RadioButton v-model="shipping" inputId="express" name="shipping" value="express" />
            <span>Express (1 - 2 Tage) - 4,99 €</span>
          </label>

          <label class="flex items-center gap-1.5 text-[11px]">
            <RadioButton v-model="shipping" inputId="sameDay" name="shipping" value="sameDay" />
            <span>Same Day (Gleicher Tag) - 9,99 €</span>
          </label>
        </div>
      </section>

      <Divider class="!my-5" />

      <footer class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" size="small" class="!px-2 !py-1 !text-[10px]" />
        <Button label="Speichern" size="small" class="!px-2 !py-1 !text-[10px]" />
      </footer>
    </section>
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
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const products = [
  { id: 'headphones', product: 'Wireless Kopfhörer', price: '79,99 €' },
  { id: 'cable', product: 'USB-C Kabel 2m', price: '14,97 €' }
]

const quantities = ref({
  headphones: 1,
  cable: 1
})

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCode = ref('10115 Berlin')
const country = ref('Deutschland')
const countries = ['Spanien', 'Deutschland', 'Österreich', 'Schweiz']
const shipping = ref('')
</script>