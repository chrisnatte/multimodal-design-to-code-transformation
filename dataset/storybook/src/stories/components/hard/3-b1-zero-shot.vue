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

      <div class="flex flex-col rounded-md border border-surface-200 bg-white">
        <div class="flex flex-col px-3 py-2">
          <IconField iconPosition="right">
            <InputText v-model="state.destinationSearch" placeholder="Suche..." class="w-full" />
            <InputIcon class="pi pi-search" />
          </IconField>
        </div>
        <div class="flex flex-col gap-0.5 p-1">
          <div class="px-2 py-2 rounded bg-surface-100 text-sm">Berlin</div>
          <div class="px-2 py-2 rounded text-sm">Amsterdam</div>
          <div class="px-2 py-2 rounded text-sm">Barcelona</div>
          <div class="px-2 py-2 rounded text-sm">Paris</div>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-1">
      <label class="text-sm">Reisezeitraum</label>
      <DatePicker v-model="state.travelPeriod" selectionMode="range" placeholder="Reisezeitraum wählen" showIcon />
    </div>

    <div class="flex flex-col gap-1">
      <label class="text-sm">Personen</label>
      <InputNumber v-model="state.persons" :min="0" showButtons buttonLayout="horizontal" />
    </div>

    <div class="flex flex-col gap-2.5 justify-end">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'

const state = reactive({
  destination: null,
  destinationSearch: '',
  travelPeriod: null,
  persons: 2
})

const destinationOptions = reactive([
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Paris', value: 'Paris' }
])
</script>