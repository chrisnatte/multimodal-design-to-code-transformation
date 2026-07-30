<template>
  <div class="flex min-h-screen w-full justify-center bg-white py-16">
    <div class="flex w-full max-w-[728px] flex-col gap-8">
      <!-- Header -->
      <div class="mb-4 flex items-center gap-4 md:-ml-16">
        <Button
          icon="pi pi-times"
          rounded
          text
          severity="secondary"
          class="h-12 w-12 shrink-0 !bg-slate-100"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-3xl font-bold text-slate-800">Bestellung aufgeben</h1>
          <p class="text-slate-500">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
        </div>
      </div>

      <!-- Stepper -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-sm">
          <span class="text-emerald-500">Warenkorb</span>
          <span class="text-emerald-500">Adresse</span>
          <span class="text-slate-500">Bestätigung</span>
        </div>
        <ProgressBar
          :value="50"
          :show-value="false"
          class="!h-1.5"
          :pt="{ value: { class: '!bg-emerald-500' } }"
        />
      </div>

      <!-- DataTable -->
      <DataTable :value="products" class="w-full">
        <Column field="name" header="Produkt" class="w-1/2 font-medium"></Column>
        <Column field="quantity" header="Menge">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              show-buttons
              button-layout="stacked"
              class="w-20"
            />
          </template>
        </Column>
        <Column field="price" header="Preis"></Column>
        <Column>
          <template #body>
            <Button icon="pi pi-trash" severity="danger" text rounded />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <!-- Form -->
      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="firstName" class="text-sm">Vorname</label>
          <InputText id="firstName" v-model="form.firstName" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastName" class="text-sm">Nachname</label>
          <InputText id="lastName" v-model="form.lastName" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="street" class="text-sm">Straße</label>
          <InputText id="street" v-model="form.street" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="city" class="text-sm">PLZ / Ort</label>
          <InputText id="city" v-model="form.city" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country" class="text-sm">Land</label>
          <Select id="country" v-model="form.country" :options="countries" />
        </div>
      </div>

      <Divider />

      <!-- Shipping -->
      <div class="flex flex-col gap-4">
        <h3 class="text-sm font-semibold text-slate-800">Versandart</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-2">
            <RadioButton
              v-model="shipping"
              input-id="shipping1"
              value="Standard (3 - 5 Tage) - kostenlos"
            />
            <label for="shipping1" class="text-sm">Standard (3 - 5 Tage) - kostenlos</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton
              v-model="shipping"
              input-id="shipping2"
              value="Express (1 - 2 Tage) - 4,99 €"
            />
            <label for="shipping2" class="text-sm">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-2">
            <RadioButton
              v-model="shipping"
              input-id="shipping3"
              value="Same Day (Gleicher Tag) - 9,99 €"
            />
            <label for="shipping3" class="text-sm">Same Day (Gleicher Tag) - 9,99 €</label>
          </div>
        </div>
      </div>

      <Divider />

      <!-- Footer -->
      <div class="flex items-center justify-between">
        <Button
          label="Abbrechen"
          severity="secondary"
          class="!border-none !bg-slate-100 !text-slate-800"
        />
        <Button label="Speichern" severity="primary" class="!border-none !bg-emerald-500" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import ProgressBar from 'primevue/progressbar'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import InputNumber from 'primevue/inputnumber'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'
  import Divider from 'primevue/divider'

  const products = ref([
    { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  const form = ref({
    firstName: 'Max',
    lastName: 'Mustermann',
    street: 'Musterstraße 42',
    city: '10115 Berlin',
    country: 'Deutschland',
  })

  const countries = ref(['Spanien', 'Deutschland', 'Österreich', 'Schweiz'])

  const shipping = ref('Standard (3 - 5 Tage) - kostenlos')
</script>