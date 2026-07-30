<template>
  <main class="min-h-screen bg-white px-6 py-7 font-sans text-slate-900">
    <div class="mx-auto w-full max-w-[818px]">
      <header class="mb-11 flex items-center gap-4">
        <Button
          icon="pi pi-arrow-left"
          rounded
          text
          severity="secondary"
          class="!h-[50px] !w-[50px] !bg-slate-100"
          aria-label="Zurück"
        />
        <div>
          <h1 class="m-0 text-[32px] font-bold leading-[39px]">Bestellung aufgeben</h1>
          <p class="mt-1 text-base leading-[19px]">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <form class="mx-auto w-full max-w-[728px]" @submit.prevent>
        <section class="flex flex-col gap-4">
          <div>
            <div class="flex justify-between text-base leading-[19px]">
              <span>Warenkorb</span>
              <span>Adresse</span>
              <span>Bestätigung</span>
            </div>
            <div class="mt-2 flex h-[6px] overflow-hidden rounded-full bg-slate-200">
              <div class="w-1/2 bg-emerald-500"></div>
              <div class="w-1/2"></div>
            </div>
          </div>

          <div class="px-4">
            <div class="grid grid-cols-[minmax(0,384px)_156px_92px_64px] text-sm">
              <div class="border border-slate-200 px-[13px] py-[10px] font-semibold">Produkt</div>
              <div class="border border-slate-200 px-[13px] py-[10px] font-semibold">Menge</div>
              <div class="border border-slate-200 px-[28px] py-[10px] font-semibold">Preis</div>
              <div class="border border-slate-200"></div>

              <div class="flex items-center border border-slate-200 px-[13px]">Wireless Kopfhörer</div>
              <div class="flex items-center border border-slate-200 px-[13px]">
                <InputNumber
                  v-model="headphonesQuantity"
                  :min="1"
                  show-buttons
                  button-layout="vertical"
                  increment-button-icon="pi pi-chevron-up"
                  decrement-button-icon="pi pi-chevron-down"
                  class="w-[130px]"
                  input-class="!h-[31px] !w-[96px] !text-sm"
                />
              </div>
              <div class="flex items-center justify-center border border-slate-200">79,99 €</div>
              <div class="flex items-center justify-center border border-slate-200">
                <Button
                  icon="pi pi-trash"
                  text
                  severity="secondary"
                  class="!h-[28px] !w-[35px]"
                  aria-label="Wireless Kopfhörer entfernen"
                />
              </div>

              <div class="flex items-center border border-slate-200 px-[13px]">USB-C Kabel 2m</div>
              <div class="flex items-center border border-slate-200 px-[13px]">
                <InputNumber
                  v-model="cableQuantity"
                  :min="1"
                  show-buttons
                  button-layout="vertical"
                  increment-button-icon="pi pi-chevron-up"
                  decrement-button-icon="pi pi-chevron-down"
                  class="w-[130px]"
                  input-class="!h-[31px] !w-[96px] !text-sm"
                />
              </div>
              <div class="flex items-center justify-center border border-slate-200">14,97 €</div>
              <div class="flex items-center justify-center border border-slate-200">
                <Button
                  icon="pi pi-trash"
                  text
                  severity="secondary"
                  class="!h-[28px] !w-[35px]"
                  aria-label="USB-C Kabel entfernen"
                />
              </div>
            </div>
          </div>
        </section>

        <div class="my-[29px] border-t border-slate-200"></div>

        <section class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
          <div class="flex flex-col gap-[7px]">
            <label for="firstName" class="text-sm">Vorname</label>
            <InputText id="firstName" v-model="firstName" class="!h-[33px] !w-full !text-sm" />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="lastName" class="text-sm">Nachname</label>
            <InputText id="lastName" v-model="lastName" class="!h-[33px] !w-full !text-sm" />
          </div>

          <div class="col-span-2 flex flex-col gap-[7px]">
            <label for="street" class="text-sm">Straße</label>
            <InputText id="street" v-model="street" class="!h-[33px] !w-full !text-sm" />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="postalCity" class="text-sm">PLZ / Ort</label>
            <InputText id="postalCity" v-model="postalCity" class="!h-[33px] !w-full !text-sm" />
          </div>

          <div class="flex flex-col gap-[7px]">
            <label for="country" class="text-sm">Land</label>
            <Select
              id="country"
              ref="countrySelect"
              v-model="country"
              :options="countries"
              class="!h-[33px] !w-full !border-emerald-500 !text-sm"
            />
          </div>
        </section>

        <div class="my-[29px] border-t border-slate-200"></div>

        <section class="px-4">
          <h2 class="m-0 mb-3 text-sm font-semibold">Versandart</h2>
          <div class="flex flex-col gap-4">
            <label class="flex items-center gap-[7px] text-sm">
              <RadioButton v-model="shippingMethod" input-id="standard" name="shipping" value="standard" />
              <span>Standard (3 - 5 Tage) - kostenlos</span>
            </label>
            <label class="flex items-center gap-[7px] text-sm">
              <RadioButton v-model="shippingMethod" input-id="express" name="shipping" value="express" />
              <span>Express (1 - 2 Tage) - 4,99 €</span>
            </label>
            <label class="flex items-center gap-[7px] text-sm">
              <RadioButton v-model="shippingMethod" input-id="sameDay" name="shipping" value="sameDay" />
              <span>Same Day (Gleicher Tag) - 9,99 €</span>
            </label>
          </div>
        </section>

        <div class="my-[29px] border-t border-slate-200"></div>

        <div class="flex items-center justify-between">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-[33px] !border-slate-100 !bg-slate-100 !px-3 !text-sm !text-slate-700"
          />
          <Button
            label="Speichern"
            type="submit"
            class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-3 !text-sm"
          />
        </div>
      </form>
    </div>
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
const country = ref('Deutschland')
const shippingMethod = ref(null)

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const countrySelect = ref()
</script>