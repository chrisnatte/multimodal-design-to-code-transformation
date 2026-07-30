<template>
  <main class="min-h-screen bg-white pt-6 font-sans text-slate-600">
    <section class="mx-auto w-[588px]">
      <header class="flex items-center gap-3">
        <Button
          icon="pi pi-times-circle"
          rounded
          text
          severity="secondary"
          aria-label="Schließen"
          class="!h-9 !w-9 !bg-slate-100 !text-slate-500"
        />
        <div class="flex flex-col gap-0.5">
          <h1 class="m-0 text-[23px] font-bold leading-7 text-slate-700">Bestellung aufgeben</h1>
          <p class="m-0 text-[11px] leading-4 text-slate-500">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <section class="ml-10 mt-7 w-[518px]">
        <div class="flex justify-between text-[10px]">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-sky-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="mt-1 !h-[5px]" />

        <DataTable
          :value="products"
          class="mt-3 !text-[10px]"
          table-style="min-width: 100%"
        >
          <Column field="product" header="Produkt" header-class="!text-[10px] !py-2" body-class="!py-1.5 !px-2">
            <template #body="{ data }">
              <span class="text-[10px]">{{ data.product }}</span>
            </template>
          </Column>
          <Column header="Menge" header-class="!text-[10px] !py-2 !w-[116px]" body-class="!py-1.5 !px-2">
            <template #body="{ data }">
              <InputNumber
                v-model="data.quantity"
                :min="1"
                show-buttons
                button-layout="vertical"
                class="quantity-input w-[94px]"
                input-class="!h-6 !w-[68px] !px-2 !text-[10px]"
              />
            </template>
          </Column>
          <Column field="price" header="Preis" header-class="!text-[10px] !py-2 !w-[68px] !text-center" body-class="!py-1.5 !px-2 !text-center">
            <template #body="{ data }">
              <span class="whitespace-nowrap text-[10px]">{{ data.price }}</span>
            </template>
          </Column>
          <Column header-class="!w-[42px]" body-class="!py-1.5 !px-1 !text-center">
            <template #body="{ index }">
              <Button
                icon="pi pi-trash"
                severity="danger"
                text
                aria-label="Produkt entfernen"
                class="!h-6 !w-6 !p-0 !text-[10px]"
                @click="removeProduct(index)"
              />
            </template>
          </Column>
        </DataTable>

        <Divider class="!my-5" />

        <div class="grid grid-cols-2 gap-x-3 gap-y-3 px-3">
          <label class="flex flex-col gap-1 text-[10px]">
            <span>Vorname</span>
            <InputText v-model="firstName" class="!h-6 !w-full !px-2 !text-[10px]" />
          </label>

          <label class="flex flex-col gap-1 text-[10px]">
            <span>Nachname</span>
            <InputText v-model="lastName" class="!h-6 !w-full !px-2 !text-[10px]" />
          </label>

          <label class="col-span-2 flex flex-col gap-1 text-[10px]">
            <span>Straße</span>
            <InputText v-model="street" class="!h-6 !w-full !px-2 !text-[10px]" />
          </label>

          <label class="flex flex-col gap-1 text-[10px]">
            <span>PLZ / Ort</span>
            <InputText v-model="postalCity" class="!h-6 !w-full !px-2 !text-[10px]" />
          </label>

          <div class="flex flex-col gap-1 text-[10px]">
            <span>Land</span>
            <Select
              ref="countrySelect"
              v-model="country"
              :options="countries"
              class="country-select !h-6 !w-full !text-[10px]"
              :pt="{
                label: { class: '!py-1 !px-2 !text-[10px]' },
                dropdown: { class: '!w-7' },
                overlay: { class: '!text-[10px]' },
                option: { class: '!py-1.5 !px-2 !text-[10px]' }
              }"
            />
          </div>
        </div>

        <Divider class="!my-5" />

        <div class="flex flex-col gap-3 px-3">
          <span class="text-[10px] font-semibold">Versandart</span>

          <label class="flex items-center gap-1.5 text-[10px]">
            <RadioButton v-model="shipping" input-id="standard" name="shipping" value="standard" class="!h-3 !w-3" />
            <span>Standard (3 - 5 Tage) - kostenlos</span>
          </label>

          <label class="flex items-center gap-1.5 text-[10px]">
            <RadioButton v-model="shipping" input-id="express" name="shipping" value="express" class="!h-3 !w-3" />
            <span>Express (1 - 2 Tage) - 4,99 €</span>
          </label>

          <label class="flex items-center gap-1.5 text-[10px]">
            <RadioButton v-model="shipping" input-id="sameday" name="shipping" value="sameday" class="!h-3 !w-3" />
            <span>Same Day (Gleicher Tag) - 9,99 €</span>
          </label>
        </div>

        <Divider class="!my-5" />

        <div class="flex items-center justify-between">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-6 !bg-slate-100 !px-2 !text-[10px]"
          />
          <Button label="Speichern" class="!h-6 !px-2 !text-[10px]" />
        </div>
      </section>
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
import ProgressBar from 'primevue/progressbar'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref(null)
const countrySelect = ref()

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

const products = ref([
  { product: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
  { product: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' }
])

const removeProduct = (index) => {
  products.value.splice(index, 1)
}

onMounted(() => {
  countrySelect.value?.show()
})
</script>