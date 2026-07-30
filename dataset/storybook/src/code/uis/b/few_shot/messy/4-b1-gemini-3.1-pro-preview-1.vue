<template>
  <div class="mx-auto flex min-h-screen max-w-4xl flex-col gap-12 bg-white p-8">
    <!-- Header -->
    <div class="flex items-center gap-6">
      <Button
        icon="pi pi-arrow-left"
        rounded
        text
        severity="secondary"
        class="!h-12 !w-12 bg-surface-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="text-3xl font-bold text-surface-900">Bestellung aufgeben</h1>
        <p class="text-surface-600">Schließe deine Bestellung mit den Produkten im Warenkorb ab.</p>
      </div>
    </div>

    <!-- Content -->
    <div class="flex w-full max-w-3xl flex-col gap-8">
      <!-- Stepper -->
      <div class="flex flex-col gap-3">
        <div class="flex justify-between font-medium text-surface-900">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <div class="flex h-1.5 overflow-hidden rounded-full bg-surface-200">
          <div class="w-1/2 bg-primary-500"></div>
        </div>
      </div>

      <!-- Products -->
      <DataTable
        :value="products"
        class="w-full overflow-hidden rounded-lg border border-surface-200"
      >
        <Column field="name" header="Produkt" class="w-1/2 font-medium" />
        <Column field="quantity" header="Menge">
          <template #body="{ data }">
            <InputNumber
              v-model="data.quantity"
              show-buttons
              button-layout="stacked"
              class="w-16"
            />
          </template>
        </Column>
        <Column field="price" header="Preis">
          <template #body="{ data }"> {{ data.price }} € </template>
        </Column>
        <Column>
          <template #body>
            <Button icon="pi pi-trash" text severity="secondary" rounded />
          </template>
        </Column>
      </DataTable>

      <hr class="border-surface-200" />

      <!-- Form -->
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col gap-2">
          <label for="vorname" class="text-sm text-surface-700">Vorname</label>
          <InputText id="vorname" v-model="form.vorname" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname" class="text-sm text-surface-700">Nachname</label>
          <InputText id="nachname" v-model="form.nachname" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="strasse" class="text-sm text-surface-700">Straße</label>
          <InputText id="strasse" v-model="form.strasse" class="w-full" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plzOrt" class="text-sm text-surface-700">PLZ / Ort</label>
          <InputText id="plzOrt" v-model="form.plzOrt" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land" class="text-sm text-surface-700">Land</label>
          <Select id="land" v-model="form.land" :options="countries" class="w-full" />
        </div>
      </div>

      <hr class="border-surface-200" />

      <!-- Shipping -->
      <div class="flex flex-col gap-4">
        <h3 class="font-semibold text-surface-900">Versandart</h3>
        <div class="flex flex-col gap-3">
          <div class="flex items-center gap-3">
            <RadioButton v-model="form.versandart" input-id="versand1" value="Standard" />
            <label for="versand1" class="text-surface-700"
              >Standard (3 - 5 Tage) - kostenlos</label
            >
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="form.versandart" input-id="versand2" value="Express" />
            <label for="versand2" class="text-surface-700">Express (1 - 2 Tage) - 4,99 €</label>
          </div>
          <div class="flex items-center gap-3">
            <RadioButton v-model="form.versandart" input-id="versand3" value="Same Day" />
            <label for="versand3" class="text-surface-700"
              >Same Day (Gleicher Tag) - 9,99 €</label
            >
          </div>
        </div>
      </div>

      <hr class="border-surface-200" />

      <!-- Footer -->
      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" outlined />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import InputNumber from 'primevue/inputnumber'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'

  const products = ref([
    { id: 1, name: 'Wireless Kopfhörer', quantity: 1, price: '79,99' },
    { id: 2, name: 'USB-C Kabel 2m', quantity: 1, price: '14,97' },
  ])

  const form = ref({
    vorname: 'Max',
    nachname: 'Mustermann',
    strasse: 'Musterstraße 42',
    plzOrt: '10115 Berlin',
    land: 'Deutschland',
    versandart: 'Standard',
  })

  const countries = ref(['Deutschland', 'Spanien', 'Österreich', 'Schweiz'])
</script>