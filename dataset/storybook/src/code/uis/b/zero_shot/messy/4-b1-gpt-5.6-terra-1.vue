<template>
  <main class="min-h-screen bg-white px-6 py-10 font-sans text-slate-900">
    <section class="mx-auto w-full max-w-[802px]">
      <header class="mb-12 flex items-center gap-4">
        <Button
          icon="pi pi-arrow-left"
          rounded
          text
          aria-label="Zurück"
          class="!h-[50px] !w-[50px] !bg-slate-100 !text-slate-700"
        />
        <div>
          <h1 class="text-[32px] font-bold leading-[39px]">Bestellung aufgeben</h1>
          <p class="mt-1 text-base leading-5">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </header>

      <div class="mx-auto flex w-full max-w-[728px] flex-col">
        <section class="mb-4">
          <div class="flex justify-between text-base leading-5">
            <span>Warenkorb</span>
            <span>Adresse</span>
            <span>Bestätigung</span>
          </div>
          <div class="mt-2 flex h-1.5 overflow-hidden rounded-full bg-slate-200">
            <div class="w-1/2 rounded-l-full bg-emerald-500"></div>
            <div class="w-1/2 rounded-r-full bg-slate-200"></div>
          </div>
        </section>

        <section class="px-4">
          <div class="grid grid-cols-[minmax(0,384px)_156px_92px_64px] text-sm">
            <div class="flex h-[39px] items-center border border-slate-200 px-3.5 font-semibold">Produkt</div>
            <div class="flex h-[39px] items-center border-y border-r border-slate-200 px-3.5 font-semibold">Menge</div>
            <div class="flex h-[39px] items-center justify-center border-y border-r border-slate-200 font-semibold">Preis</div>
            <div class="h-[39px] border-y border-r border-slate-200"></div>

            <div class="flex h-[50px] items-center border-b border-l border-r border-slate-200 px-3.5">
              Wireless Kopfhörer
            </div>
            <div class="flex h-[50px] items-center border-b border-r border-slate-200 px-3.5">
              <InputNumber
                v-model="headphonesQuantity"
                :min="1"
                show-buttons
                button-layout="vertical"
                increment-button-icon="pi pi-chevron-up"
                decrement-button-icon="pi pi-chevron-down"
                input-class="!h-[31px] !w-[96px] !rounded-r-none !border-slate-300 !py-1 !text-sm"
                increment-button-class="!h-[16px] !w-[35px] !rounded-none !border-slate-300 !bg-white !p-0 !text-slate-800"
                decrement-button-class="!h-[15px] !w-[35px] !rounded-none !border-slate-300 !bg-white !p-0 !text-slate-800"
                class="h-[31px]"
              />
            </div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-slate-200">79,99 €</div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-slate-200">
              <Button icon="pi pi-trash" text rounded size="small" aria-label="Wireless Kopfhörer entfernen" />
            </div>

            <div class="flex h-[50px] items-center border-b border-l border-r border-slate-200 px-3.5">
              USB-C Kabel 2m
            </div>
            <div class="flex h-[50px] items-center border-b border-r border-slate-200 px-3.5">
              <InputNumber
                v-model="cableQuantity"
                :min="1"
                show-buttons
                button-layout="vertical"
                increment-button-icon="pi pi-chevron-up"
                decrement-button-icon="pi pi-chevron-down"
                input-class="!h-[31px] !w-[96px] !rounded-r-none !border-slate-300 !py-1 !text-sm"
                increment-button-class="!h-[16px] !w-[35px] !rounded-none !border-slate-300 !bg-white !p-0 !text-slate-800"
                decrement-button-class="!h-[15px] !w-[35px] !rounded-none !border-slate-300 !bg-white !p-0 !text-slate-800"
                class="h-[31px]"
              />
            </div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-slate-200">14,97 €</div>
            <div class="flex h-[50px] items-center justify-center border-b border-r border-slate-200">
              <Button icon="pi pi-trash" text rounded size="small" aria-label="USB-C Kabel entfernen" />
            </div>
          </div>
        </section>

        <div class="my-7 h-px bg-slate-200"></div>

        <section class="grid grid-cols-2 gap-x-4 gap-y-4 px-4">
          <label class="flex flex-col gap-1.5 text-sm">
            <span>Vorname</span>
            <InputText v-model="firstName" class="!h-[33px] !w-full !text-sm" />
          </label>

          <label class="flex flex-col gap-1.5 text-sm">
            <span>Nachname</span>
            <InputText v-model="lastName" class="!h-[33px] !w-full !text-sm" />
          </label>

          <label class="col-span-2 flex flex-col gap-1.5 text-sm">
            <span>Straße</span>
            <InputText v-model="street" class="!h-[33px] !w-full !text-sm" />
          </label>

          <label class="flex flex-col gap-1.5 text-sm">
            <span>PLZ / Ort</span>
            <InputText v-model="city" class="!h-[33px] !w-full !text-sm" />
          </label>

          <div class="relative flex flex-col gap-1.5 text-sm">
            <label for="country">Land</label>
            <Select
              id="country"
              v-model="country"
              :options="countries"
              class="!h-[33px] !w-full !border-emerald-500 !text-sm"
            />
            <Listbox
              v-model="country"
              :options="countries"
              class="absolute left-0 top-[63px] z-10 w-full !rounded-md !border-slate-200 !text-sm"
              list-style="max-height: 137px"
            />
          </div>
        </section>

        <div class="mt-[154px] mb-7 h-px bg-slate-200"></div>

        <section class="px-4">
          <h2 class="text-sm font-semibold">Versandart</h2>
          <div class="mt-3 flex flex-col gap-3">
            <label class="flex items-center gap-2 text-sm">
              <RadioButton v-model="shipping" input-id="standard" name="shipping" value="standard" />
              <span>Standard (3 - 5 Tage) - kostenlos</span>
            </label>
            <label class="flex items-center gap-2 text-sm">
              <RadioButton v-model="shipping" input-id="express" name="shipping" value="express" />
              <span>Express (1 - 2 Tage) - 4,99 €</span>
            </label>
            <label class="flex items-center gap-2 text-sm">
              <RadioButton v-model="shipping" input-id="same-day" name="shipping" value="same-day" />
              <span>Same Day (Gleicher Tag) - 9,99 €</span>
            </label>
          </div>
        </section>

        <div class="my-7 h-px bg-slate-200"></div>

        <footer class="flex items-center justify-between">
          <Button
            label="Abbrechen"
            severity="secondary"
            class="!h-[33px] !border-slate-100 !bg-slate-100 !px-3 !py-2 !text-sm !text-slate-800"
          />
          <Button
            label="Speichern"
            class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-3 !py-2 !text-sm"
          />
        </footer>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const headphonesQuantity = ref(1)
const cableQuantity = ref(1)
const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const city = ref('10115 Berlin')
const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])
const country = ref('Deutschland')
const shipping = ref('')
</script>