<template>
  <div class="flex min-h-screen flex-col items-center bg-white py-16">
    <div class="flex w-full max-w-[728px] flex-col gap-16">
      <!-- Header -->
      <div class="flex items-center gap-4">
        <Button
          icon="pi pi-times-circle"
          severity="secondary"
          rounded
          text
          class="!h-[50px] !w-[50px] !bg-slate-100"
        />
        <div class="flex flex-col gap-1">
          <h1 class="text-[32px] font-bold leading-tight text-black">Bestellung aufgeben</h1>
          <p class="text-base text-black">
            Schließe deine Bestellung mit den Produkten im Warenkorb ab.
          </p>
        </div>
      </div>

      <!-- Main Content -->
      <div class="flex flex-col gap-4">
        <!-- Progress -->
        <div class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <span class="text-base text-black">Warenkorb</span>
            <span class="text-base text-black">Adresse</span>
            <span class="text-base text-black">Bestätigung</span>
          </div>
          <ProgressBar :value="50" :show-value="false" class="!h-1.5" />
        </div>

        <!-- DataTable -->
        <div class="px-4">
          <DataTable :value="products" class="w-full">
            <Column field="name" header="Produkt" header-class="font-semibold">
              <template #body="{ data }">
                <span class="text-sm">{{ data.name }}</span>
              </template>
            </Column>
            <Column field="quantity" header="Menge" header-class="font-semibold">
              <template #body="{ data }">
                <InputNumber
                  v-model="data.quantity"
                  show-buttons
                  button-layout="vertical"
                  class="w-[130px]"
                  input-class="!w-24"
                  increment-button-icon="pi pi-angle-up"
                  decrement-button-icon="pi pi-angle-down"
                />
              </template>
            </Column>
            <Column field="price" header="Preis" header-class="font-semibold">
              <template #body="{ data }">
                <span class="text-sm">{{ data.price }} €</span>
              </template>
            </Column>
            <Column header-class="w-16">
              <template #body>
                <Button icon="pi pi-trash" severity="danger" text rounded />
              </template>
            </Column>
          </DataTable>
        </div>

        <Divider />

        <!-- Form Grid -->
        <div class="grid grid-cols-2 gap-4 px-4">
          <div class="flex flex-col gap-2">
            <label for="firstName" class="text-sm text-black">Vorname</label>
            <InputText id="firstName" v-model="form.firstName" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="lastName" class="text-sm text-black">Nachname</label>
            <InputText id="lastName" v-model="form.lastName" placeholder="Name eingeben" />
          </div>
          <div class="col-span-2 flex flex-col gap-2">
            <label for="street" class="text-sm text-black">Straße</label>
            <InputText id="street" v-model="form.street" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="city" class="text-sm text-black">PLZ / Ort</label>
            <InputText id="city" v-model="form.city" placeholder="Name eingeben" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="country" class="text-sm text-black">Land</label>
            <Select
              id="country"
              v-model="form.country"
              :options="countries"
              placeholder="Deutschland"
              class="w-full"
            />
          </div>
        </div>

        <Divider />

        <!-- Shipping Options -->
        <div class="flex flex-col gap-4 px-4">
          <h3 class="text-sm font-semibold text-black">Versandart</h3>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" input-id="shipping-standard" value="standard" />
            <label for="shipping-standard" class="text-sm text-black"
              >Standard (3 - 5 Tage) - kostenlos</label
            >
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" input-id="shipping-express" value="express" />
            <label for="shipping-express" class="text-sm text-black"
              >Express (1 - 2 Tage) - 4,99 €</label
            >
          </div>
          <div class="flex items-center gap-2">
            <RadioButton v-model="shipping" input-id="shipping-sameday" value="sameday" />
            <label for="shipping-sameday" class="text-sm text-black"
              >Same Day (Gleicher Tag) - 9,99 €</label
            >
          </div>
        </div>

        <Divider />

        <!-- Footer Buttons -->
        <div class="flex items-center justify-between">
          <Button label="Abbrechen" severity="secondary" />
          <Button label="Speichern" severity="primary" />
        </div>
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
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97' },
  ])

  const form = ref({
    firstName: 'Max',
    lastName: 'Mustermann',
    street: 'Musterstraße 42',
    city: '10115 Berlin',
    country: 'Deutschland',
  })

  const countries = ref(['Deutschland', 'Spanien', 'Österreich', 'Schweiz'])

  const shipping = ref('standard')
</script>