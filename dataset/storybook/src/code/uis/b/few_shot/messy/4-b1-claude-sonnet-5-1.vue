<template>
  <div class="mx-auto max-w-4xl p-6">
    <div class="mb-8 flex items-center gap-4">
      <div class="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-slate-100">
        <i class="pi pi-shopping-cart text-2xl" />
      </div>
      <div>
        <h1 class="text-3xl font-bold">Bestellung aufgeben</h1>
        <p class="text-base text-slate-600">
          Schließe deine Bestellung mit den Produkten im Warenkorb ab.
        </p>
      </div>
    </div>

    <Steps :model="steps" :active-step="activeStep" class="mb-6" />

    <div class="flex flex-col gap-4">
      <DataTable :value="cartItems">
        <Column field="name" header="Produkt" />
        <Column header="Menge">
          <template #body="{ data }">
            <InputNumber v-model="data.quantity" show-buttons button-layout="horizontal" :min="1" class="w-32">
              <template #incrementbuttonicon>
                <i class="pi pi-plus" />
              </template>
              <template #decrementbuttonicon>
                <i class="pi pi-minus" />
              </template>
            </InputNumber>
          </template>
        </Column>
        <Column field="price" header="Preis" />
        <Column header="">
          <template #body="{ data }">
            <Button icon="pi pi-trash" severity="danger" text @click="removeItem(data)" />
          </template>
        </Column>
      </DataTable>

      <Divider />

      <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label for="firstname">Vorname</label>
          <InputText id="firstname" v-model="firstname" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="lastname">Nachname</label>
          <InputText id="lastname" v-model="lastname" />
        </div>
        <div class="col-span-2 flex flex-col gap-2">
          <label for="street">Straße</label>
          <InputText id="street" v-model="street" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="zipcity">PLZ / Ort</label>
          <InputText id="zipcity" v-model="zipCity" />
        </div>
        <div class="flex flex-col gap-2">
          <label for="country">Land</label>
          <Select id="country" v-model="country" :options="countries" option-label="name" class="w-full" />
        </div>
      </div>

      <Divider />

      <div class="flex flex-col gap-3">
        <span class="font-semibold">Versandart</span>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" input-id="standard" name="shipping" value="standard" />
          <label for="standard">Standard (3 - 5 Tage) - kostenlos</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" input-id="express" name="shipping" value="express" />
          <label for="express">Express (1 - 2 Tage) - 4,99 €</label>
        </div>
        <div class="flex items-center gap-2">
          <RadioButton v-model="shippingMethod" input-id="sameday" name="shipping" value="sameday" />
          <label for="sameday">Same Day (Gleicher Tag) - 9,99 €</label>
        </div>
      </div>

      <Divider />

      <div class="flex items-center justify-between">
        <Button label="Abbrechen" severity="secondary" text />
        <Button label="Speichern" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Steps from 'primevue/steps'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  import InputNumber from 'primevue/inputnumber'
  import InputText from 'primevue/inputtext'
  import Select from 'primevue/select'
  import RadioButton from 'primevue/radiobutton'
  import Divider from 'primevue/divider'
  import Button from 'primevue/button'

  const steps = [{ label: 'Warenkorb' }, { label: 'Adresse' }, { label: 'Bestätigung' }]
  const activeStep = ref(1)

  const cartItems = ref([
    { name: 'Wireless Kopfhörer', quantity: 1, price: '79,99 €' },
    { name: 'USB-C Kabel 2m', quantity: 1, price: '14,97 €' },
  ])

  function removeItem(item: { name: string }) {
    cartItems.value = cartItems.value.filter((i) => i.name !== item.name)
  }

  const firstname = ref('Max')
  const lastname = ref('Mustermann')
  const street = ref('Musterstraße 42')
  const zipCity = ref('10115 Berlin')

  const countries = [
    { name: 'Deutschland' },
    { name: 'Spanien' },
    { name: 'Österreich' },
    { name: 'Schweiz' },
  ]
  const country = ref(countries[0])

  const shippingMethod = ref('standard')
</script>