<template>
  <main class="min-h-screen bg-white px-6 py-7 font-[Inter] text-slate-900">
    <section class="mx-auto w-full max-w-[802px]">
      <header class="flex items-center gap-4">
        <Button
          icon="pi pi-arrow-left"
          rounded
          text
          class="!h-[50px] !w-[50px] !bg-[#f1f5f9] !text-slate-700"
          aria-label="Zurück"
        />
        <div class="flex flex-col gap-1">
          <h1 class="m-0 text-[32px] font-bold leading-[39px]">Bestellung aufgeben</h1>
          <p class="m-0 text-base leading-[19px]">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <section class="mx-auto mt-12 w-full max-w-[728px]">
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between text-base leading-[19px]">
            <span>Warenkorb</span>
            <span>Adresse</span>
            <span>Bestätigung</span>
          </div>
          <div class="flex h-[6px] overflow-hidden rounded-full bg-[#e2e8f0]">
            <div class="w-1/2 rounded-l-full bg-[#10b981]"></div>
          </div>
        </div>

        <div class="mt-4 px-4">
          <div class="grid grid-cols-[minmax(0,384px)_156px_92px_64px]">
            <div class="flex h-[39px] items-center border border-[#e2e8f0] bg-white px-3.5 text-sm font-semibold">
              Produkt
            </div>
            <div class="flex h-[39px] items-center border-y border-r border-[#e2e8f0] bg-white px-3.5 text-sm font-semibold">
              Menge
            </div>
            <div class="flex h-[39px] items-center justify-center border-y border-r border-[#e2e8f0] bg-white text-sm font-semibold">
              Preis
            </div>
            <div class="border-y border-r border-[#e2e8f0] bg-white"></div>

            <div class="flex h-[50px] items-center border-b border-l border-r border-[#e2e8f0] px-3.5 text-sm">
              Wireless Kopfhörer
            </div>
            <div class="flex h-[50px] items-center border-b border-r border-[#e2e8f0] px-3.5">
              <InputNumber
                v-model="headphonesQuantity"
                show-buttons
                button-layout="vertical"
                :min="1"
                class="w-[130px]"
                input-class="!h-[31px] !w-[96px] !rounded-r-none !text-sm"
                increment-button-class="!h-[16px] !w-[35px] !rounded-bl-none !rounded-r-[6px]"
                decrement-button-class="!h-[15px] !w-[35px] !rounded-tl-none !rounded-r-[6px]"
              />
            </div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-[#e2e8f0] text-sm">
              79,99 €
            </div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-[#e2e8f0]">
              <Button
                icon="pi pi-trash"
                text
                rounded
                severity="secondary"
                class="!h-7 !w-[35px]"
                aria-label="Wireless Kopfhörer entfernen"
              />
            </div>

            <div class="flex h-[50px] items-center border-b border-l border-r border-[#e2e8f0] px-3.5 text-sm">
              USB-C Kabel 2m
            </div>
            <div class="flex h-[50px] items-center border-b border-r border-[#e2e8f0] px-3.5">
              <InputNumber
                v-model="cableQuantity"
                show-buttons
                button-layout="vertical"
                :min="1"
                class="w-[130px]"
                input-class="!h-[31px] !w-[96px] !rounded-r-none !text-sm"
                increment-button-class="!h-[16px] !w-[35px] !rounded-bl-none !rounded-r-[6px]"
                decrement-button-class="!h-[15px] !w-[35px] !rounded-tl-none !rounded-r-[6px]"
              />
            </div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-[#e2e8f0] text-sm">
              14,97 €
            </div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-[#e2e8f0]">
              <Button
                icon="pi pi-trash"
                text
                rounded
                severity="secondary"
                class="!h-7 !w-[35px]"
                aria-label="USB-C Kabel entfernen"
              />
            </div>
          </div>
        </div>

        <div class="my-[29px] h-px bg-[#e2e8f0]"></div>

        <form class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
          <label class="flex flex-col gap-[7px] text-sm">
            <span>Vorname</span>
            <InputText v-model="firstName" class="!h-[33px] !w-full !text-sm" />
          </label>

          <label class="flex flex-col gap-[7px] text-sm">
            <span>Nachname</span>
            <InputText v-model="lastName" class="!h-[33px] !w-full !text-sm" />
          </label>

          <label class="col-span-2 flex flex-col gap-[7px] text-sm">
            <span>Straße</span>
            <InputText v-model="street" class="!h-[33px] !w-full !text-sm" />
          </label>

          <label class="flex flex-col gap-[7px] text-sm">
            <span>PLZ / Ort</span>
            <InputText v-model="postalCity" class="!h-[33px] !w-full !text-sm" />
          </label>

          <label class="flex flex-col gap-[7px] text-sm">
            <span>Land</span>
            <Select
              v-model="country"
              :options="countries"
              option-label="label"
              option-value="value"
              class="!h-[33px] !w-full !border-[#10b981] !text-sm"
            />
            <div class="rounded-md border border-[#e2e8f0] bg-white p-[3px]">
              <div
                v-for="option in countries"
                :key="option.value"
                class="flex h-[31px] items-center rounded px-2.5 text-sm"
                :class="{ 'bg-[#f1f5f9]': option.value === country }"
              >
                {{ option.label }}
              </div>
            </div>
          </label>
        </form>

        <div class="my-[29px] h-px bg-[#e2e8f0]"></div>

        <section class="px-4">
          <h2 class="m-0 text-sm font-semibold">Versandart</h2>
          <div class="mt-3 flex flex-col gap-4">
            <label class="flex cursor-pointer items-center gap-2 text-sm">
              <RadioButton v-model="shippingMethod" input-id="standard" name="shipping" value="standard" />
              <span>Standard (3 - 5 Tage) - kostenlos</span>
            </label>
            <label class="flex cursor-pointer items-center gap-2 text-sm">
              <RadioButton v-model="shippingMethod" input-id="express" name="shipping" value="express" />
              <span>Express (1 - 2 Tage) - 4,99 €</span>
            </label>
            <label class="flex cursor-pointer items-center gap-2 text-sm">
              <RadioButton v-model="shippingMethod" input-id="same-day" name="shipping" value="same-day" />
              <span>Same Day (Gleicher Tag) - 9,99 €</span>
            </label>
          </div>
        </section>

        <div class="my-[29px] h-px bg-[#e2e8f0]"></div>

        <div class="flex items-center justify-between">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-[33px] !border-[#f1f5f9] !bg-[#f1f5f9] !px-3 !text-sm !text-slate-700"
          />
          <Button label="Speichern" class="!h-[33px] !bg-[#10b981] !px-3 !text-sm !border-[#10b981]" />
        </div>
      </section>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const headphonesQuantity = ref(1)
const cableQuantity = ref(1)
const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const postalCity = ref('10115 Berlin')
const country = ref('de')
const shippingMethod = ref('')

const countries = ref([
  { label: 'Spanien', value: 'es' },
  { label: 'Deutschland', value: 'de' },
  { label: 'Österreich', value: 'at' },
  { label: 'Schweiz', value: 'ch' }
])
</script>