<template>
  <div class="flex gap-8 items-start">
    <div class="flex flex-col gap-0.5 w-64">
      <div class="flex flex-col gap-1">
        <label class="text-sm">Zielort</label>
        <Select
          v-model="state.destination"
          :options="destinationOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Zielort auswählen"
          class="w-full"
        />
      </div>

      <div class="flex flex-col rounded-md border border-surface-200 bg-white">
        <div class="flex flex-col px-2.5 pt-2 pb-1">
          <InputText v-model="state.destinationSearch" placeholder="Suche..." class="w-full" />
        </div>
        <div class="flex flex-col gap-0.5 p-1">
          <span class="px-2.5 py-1.5 text-sm bg-surface-100 rounded">Berlin</span>
          <span class="px-2.5 py-1.5 text-sm rounded">Amsterdam</span>
          <span class="px-2.5 py-1.5 text-sm rounded">Barcelona</span>
          <span class="px-2.5 py-1.5 text-sm rounded">Paris</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-1 w-72">
      <label class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="state.travelPeriod"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        :showWeek="false"
        :showButtonBar="false"
        class="w-full"
      />
    </div>

    <div class="flex items-end">
      <div class="flex flex-col gap-1">
        <label class="text-sm">Personen</label>
        <InputNumber
          v-model="state.persons"
          :min="0"
          showButtons
          buttonLayout="horizontal"
          decrementButtonIcon="pi pi-minus"
          incrementButtonIcon="pi pi-plus"
        />
      </div>
    </div>

    <div class="flex flex-col justify-end gap-2">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const state = reactive({
  destination: null,
  destinationSearch: '',
  travelPeriod: null,
  persons: 2
})

const destinationOptions = [
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Paris', value: 'Paris' }
]
</script>