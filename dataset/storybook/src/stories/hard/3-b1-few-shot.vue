<template>
  <div class="flex items-start gap-8">
    <div class="flex flex-col gap-1">
      <div class="flex flex-col gap-1">
        <label class="text-sm">Zielort</label>
        <Select
          v-model="form.destination"
          :options="destinationOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Zielort auswählen"
        />
      </div>
      <div class="border rounded-md bg-white p-1">
        <div class="flex flex-col px-3 py-2">
          <IconField iconPosition="right">
            <InputText v-model="form.destinationSearch" placeholder="Suche..." />
            <InputIcon class="pi pi-search" />
          </IconField>
        </div>
        <div class="flex flex-col gap-1 p-1">
          <div class="px-2 py-1 rounded bg-gray-100">Berlin</div>
          <div class="px-2 py-1 rounded">Amsterdam</div>
          <div class="px-2 py-1 rounded">Barcelona</div>
          <div class="px-2 py-1 rounded">Paris</div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm">Reisezeitraum</label>
      <DatePicker v-model="form.travelPeriod" selectionMode="range" placeholder="Reisezeitraum wählen" />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm">Personen</label>
      <InputNumber v-model="form.people" showButtons buttonLayout="horizontal" :step="1" />
    </div>

    <div class="flex flex-col items-end justify-end gap-2">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const form = reactive({
  destination: null,
  destinationSearch: '',
  travelPeriod: null,
  people: 2
})

const destinationOptions = [
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Paris', value: 'Paris' }
]
</script>