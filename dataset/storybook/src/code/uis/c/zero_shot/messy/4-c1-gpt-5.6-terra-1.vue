<template>
  <main class="mx-auto w-[518px] pt-6 text-xs text-slate-600">
    <header class="flex items-start gap-3">
      <Button
        icon="pi pi-times"
        rounded
        text
        severity="secondary"
        aria-label="Schließen"
        class="!mt-0.5 !h-9 !w-9 !bg-slate-100 !text-slate-500"
      />
      <div>
        <h1 class="m-0 text-2xl font-semibold leading-7 text-slate-700">Bestellung aufgeben</h1>
        <p class="mt-1 text-xs text-slate-400">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </header>

    <section class="mt-7">
      <div class="flex items-center justify-between text-xs font-medium">
        <span class="text-emerald-500">Warenkorb</span>
        <span class="text-sky-500">Adresse</span>
        <span class="text-slate-400">Bestätigung</span>
      </div>
      <div class="mt-1 flex h-1 overflow-hidden rounded-full bg-slate-200">
        <div class="w-1/2 bg-emerald-500"></div>
      </div>
    </section>

    <section class="mt-4 px-3">
      <table class="w-full border-collapse text-left">
        <thead class="border-y border-slate-100 text-[10px] font-semibold text-slate-600">
          <tr>
            <th class="py-2.5 pl-2">Produkt</th>
            <th class="w-28 py-2.5">Menge</th>
            <th class="w-16 py-2.5">Preis</th>
            <th class="w-7 py-2.5"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-slate-100">
            <td class="py-2.5 pl-2 text-[10px]">Wireless Kopfhörer</td>
            <td class="py-1.5">
              <InputNumber
                v-model="headphonesQuantity"
                :min="1"
                :max="99"
                showButtons
                buttonLayout="vertical"
                spinnerMode="vertical"
                inputClass="!w-16 !text-[10px] !py-1"
                class="!w-[94px]"
              />
            </td>
            <td class="py-2.5 text-[10px]">79,99&nbsp; €</td>
            <td class="py-2.5">
              <Button
                icon="pi pi-trash"
                text
                severity="danger"
                aria-label="Wireless Kopfhörer entfernen"
                class="!h-6 !w-6 !p-0 !text-[10px]"
              />
            </td>
          </tr>
          <tr class="border-b border-slate-100">
            <td class="py-2.5 pl-2 text-[10px]">USB-C Kabel 2m</td>
            <td class="py-1.5">
              <InputNumber
                v-model="cableQuantity"
                :min="1"
                :max="99"
                showButtons
                buttonLayout="vertical"
                spinnerMode="vertical"
                inputClass="!w-16 !text-[10px] !py-1"
                class="!w-[94px]"
              />
            </td>
            <td class="py-2.5 text-[10px]">14,97&nbsp; €</td>
            <td class="py-2.5">
              <Button
                icon="pi pi-trash"
                text
                severity="danger"
                aria-label="USB-C Kabel entfernen"
                class="!h-6 !w-6 !p-0 !text-[10px]"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </section>

    <Divider class="!my-5" />

    <form class="px-3">
      <div class="grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="firstname">Vorname</label>
          <InputText id="firstname" v-model="firstName" class="!h-6 !w-full !text-[10px]" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="lastname">Nachname</label>
          <InputText id="lastname" v-model="lastName" class="!h-6 !w-full !text-[10px]" />
        </div>
      </div>

      <div class="mt-3 flex flex-col gap-1">
        <label for="street">Straße</label>
        <InputText id="street" v-model="street" class="!h-6 !w-full !text-[10px]" />
      </div>

      <div class="mt-3 grid grid-cols-2 gap-3">
        <div class="flex flex-col gap-1">
          <label for="zip">PLZ / Ort</label>
          <InputText id="zip" v-model="zipCity" class="!h-6 !w-full !text-[10px]" />
        </div>
        <div class="flex flex-col gap-1">
          <label for="country">Land</label>
          <Select
            ref="countrySelect"
            inputId="country"
            v-model="country"
            :options="countries"
            class="!h-6 !w-full !text-[10px]"
          />
        </div>
      </div>
    </form>

    <Divider class="!mt-5 !mb-5" />

    <section class="px-3">
      <h2 class="m-0 mb-3 text-xs font-semibold text-slate-600">Versandart</h2>
      <div class="flex flex-col gap-2">
        <label class="flex items-center gap-1.5 text-[10px]">
          <RadioButton v-model="shipping" inputId="standard" name="shipping" value="standard" />
          <span>Standard (3 - 5 Tage) - kostenlos</span>
        </label>
        <label class="flex items-center gap-1.5 text-[10px]">
          <RadioButton v-model="shipping" inputId="express" name="shipping" value="express" />
          <span>Express (1 - 2 Tage) - 4,99 €</span>
        </label>
        <label class="flex items-center gap-1.5 text-[10px]">
          <RadioButton v-model="shipping" inputId="same-day" name="shipping" value="same-day" />
          <span>Same Day (Gleicher Tag) - 9,99 €</span>
        </label>
      </div>
    </section>

    <Divider class="!mt-5 !mb-5" />

    <footer class="flex items-center justify-between">
      <Button label="Abbrechen" severity="secondary" size="small" class="!text-[10px]" />
      <Button label="Speichern" severity="success" size="small" class="!text-[10px]" />
    </footer>
  </main>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import RadioButton from 'primevue/radiobutton'
import Select from 'primevue/select'

const headphonesQuantity = ref(1)
const cableQuantity = ref(1)
const firstName = ref('Max')
const lastName = ref('Mustermann')
const street = ref('Musterstraße 42')
const zipCity = ref('10115 Berlin')
const country = ref('Deutschland')
const shipping = ref(null)
const countrySelect = ref(null)

const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

onMounted(async () => {
  await nextTick()
  countrySelect.value?.show()
})
</script>