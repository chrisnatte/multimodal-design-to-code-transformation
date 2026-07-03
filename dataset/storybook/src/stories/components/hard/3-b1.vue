<template>
  <div class="flex gap-8 items-start">
    <div class="flex flex-col gap-0.5">
      <div class="flex flex-col gap-0.5">
        <label class="text-sm">Zielort</label>
        <Select
          v-model="state.destination"
          :options="destinationOptions"
          optionLabel="label"
          placeholder="Zielort auswählen"
          class="w-64"
        />
      </div>
      <div class="border border-surface-200 rounded-md bg-white flex flex-col">
        <div class="p-2.5 pb-1 flex flex-col">
          <InputText v-model="state.destinationSearch" placeholder="Suche..." class="w-full" />
        </div>
        <div class="p-1 flex flex-col gap-0.5">
          <Button label="Berlin" text severity="secondary" class="justify-start" />
          <Button label="Amsterdam" text severity="secondary" class="justify-start" />
          <Button label="Barcelona" text severity="secondary" class="justify-start" />
          <Button label="Paris" text severity="secondary" class="justify-start" />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-0.5">
      <label class="text-sm">Reisezeitraum</label>
      <DatePicker v-model="state.travelDate" placeholder="Reisezeitraum wählen" showIcon />
    </div>

    <div class="flex items-end gap-2">
      <Button icon="pi pi-minus" severity="secondary" outlined rounded @click="decrementPersons" />
      <div class="flex flex-col gap-0.5">
        <label class="text-sm">Personen</label>
        <InputNumber v-model="state.persons" :min="0" :useGrouping="false" class="w-24" />
      </div>
      <Button icon="pi pi-plus" severity="secondary" outlined rounded @click="incrementPersons" />
    </div>

    <div class="flex flex-col gap-2 justify-end">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const state = reactive({
  destination: null,
  destinationSearch: '',
  travelDate: null,
  persons: 2
})

const destinationOptions = [
  { label: 'Berlin', code: 'DE' },
  { label: 'Amsterdam', code: 'NL' },
  { label: 'Barcelona', code: 'ES' },
  { label: 'Paris', code: 'FR' }
]

const incrementPersons = () => {
  state.persons += 1
}

const decrementPersons = () => {
  if (state.persons > 0) state.persons -= 1
}
</script>