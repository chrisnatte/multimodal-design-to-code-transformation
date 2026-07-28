<template>
  <div class="flex items-start gap-8">
    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm font-normal text-slate-700">Zielort</label>
      <Select
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-0.5 w-[216px]">
      <label class="text-sm font-normal text-slate-700">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-0.5 w-[192px]">
      <label class="text-sm font-normal text-slate-700">Personen</label>
      <InputNumber
        v-model="persons"
        inputId="personen"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        class="w-full"
      />
    </div>

    <div class="flex flex-col justify-end w-[65px] h-[60px]">
      <Button label="Suche" severity="primary" class="w-full" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const selectedDestination = ref(null)
const destinations = [
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]
const dateRange = ref(null)
const persons = ref(2)
</script>