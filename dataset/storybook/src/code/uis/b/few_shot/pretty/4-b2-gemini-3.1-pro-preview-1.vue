<template>
  <div class="flex min-h-screen flex-col items-center gap-8 bg-white p-16">
    <!-- Header -->
    <div class="flex w-full max-w-[728px] items-center gap-4">
      <Button
        icon="pi pi-times"
        rounded
        severity="secondary"
        variant="text"
        class="!h-12 !w-12 bg-slate-100"
      />
      <div class="flex flex-col gap-1">
        <h1 class="m-0 text-3xl font-bold text-black">Bestellung aufgeben</h1>
        <p class="m-0 text-base text-black">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </div>

    <!-- Main Column -->
    <div class="flex w-full max-w-[728px] flex-col gap-4">
      <!-- Progress -->
      <div class="flex flex-col gap-2">
        <div class="flex justify-between text-base text-black">
          <span>Warenkorb</span>
          <span>Adresse</span>
          <span>Bestätigung</span>
        </div>
        <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
      </div>

      <!-- DataTable -->
      <div class="px-4">
        <DataTable :value="products" class="w-full">
          <Column field="produkt" header="Produkt" />
          <Column field="menge" header="Menge">
            <template #body="{ data }">
              <InputNumber
                v-model="data.menge"
                show-buttons
                button-layout="stacked"
                class="w-24"
              />
            </template>
          </Column>
          <Column field="preis" header="Preis" />
          <Column>
            <template #body>
              <Button icon="pi pi-trash" severity="danger" variant="text" rounded />
            </template>
          </Column>
        </DataTable>
      </div>

      <Divider class="!my-0" />

      <!-- Form Grid -->
      <div class="grid grid-cols-2 gap-4 px-4">
        <div class="flex flex-col gap-2">
          <label for="vorname" class="text-sm text-black">Vorname</label>
          <InputText id="vorname" v-model="form.vorname" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="nachname" class="text-sm text-black">Nachname</label>
          <InputText id="nachname" v-model="form.nachname" placeholder="Name eingeben" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="strasse" class="text-sm text-black">Straße</label>
          <InputText id="strasse" v-model="form.strasse" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="plz" class="text-sm text-black">PLZ / Ort</label>
          <InputText id="plz" v-model="form.plz" placeholder="Name eingeben" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="land" class="text-sm text-black">Land</label>
          <Select
            id="land"
            v-model="form.land"
            :options="countries"
            option-label="name"
            placeholder="Deutschland"
            class="w-full"
          />
        </div>
      </div>

      <Divider class="!my-0" />

      <!-- Versandart -->
      <div class="flex flex-col gap-4 px-4">
        <span class="text-sm font-semibold text-black">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="shipping1" value="standard" />
          <label for="shipping1" class="text-sm text-black"
            >Standard (3 - 5 Tage) - kostenlos</label
          >
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="shipping2" value="express" />
          <label for="shipping2" class="text-sm text-black"
            >Express (1 - 2 Tage) - 4,99 €</label
          >
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shipping" input-id="shipping3" value="sameday" />
          <label for="shipping3" class="text-sm text-black"
            >Same Day (Gleicher Tag) - 9,99 €</label
          >
        </div>
      </div>

      <Divider class="!my-0" />

      <!-- Footer Buttons -->
      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" />
        <Button label="Speichern" severity="primary" />
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
  import Divider from 'primevue/divider'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'

  const products = ref([
    { produkt: 'Wireless Kopfhörer', menge: 1, preis: '79,99 €' },
    { produkt: 'USB-C Kabel 2m', menge: 1, preis: '14,97 €' },
  ])

  const form = ref({
    vorname: 'Max',
    nachname: 'Mustermann',
    strasse: 'Musterstraße 42',
    plz: '10115 Berlin',
    land: { name: 'Deutschland', code: 'DE' },
  })

  const countries = ref([
    { name: 'Deutschland', code: 'DE' },
    { name: 'Österreich', code: 'AT' },
    { name: 'Schweiz', code: 'CH' },
    { name: 'Spanien', code: 'ES' },
  ])

  const shipping = ref('standard')
</script>