<template>
  <div class="flex items-start gap-8">
    <div class="flex flex-col gap-1 w-64">
      <span class="text-sm">Zielort</span>
      <Select
        v-model="form.destination"
        :options="destinationOptions"
        optionLabel="label"
        optionValue="value"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-1 w-64">
      <span class="text-sm">Reisezeitraum</span>
      <DatePicker
        v-model="form.travelPeriod"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        :showButtonBar="false"
        :showWeek="false"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-1 w-48">
      <span class="text-sm">Personen</span>
      <InputNumber
        v-model="form.people"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        :step="1"
        fluid
      />
    </div>

    <div class="flex flex-col items-end justify-end gap-2">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const form = reactive({
  destination: null,
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