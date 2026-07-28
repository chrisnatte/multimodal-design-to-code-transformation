<template>
  <div class="flex items-end gap-8 p-6">
    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        filter
        filterPlaceholder="Suche..."
        placeholder="Zielort auswählen"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        class="w-64"
        showIcon
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        class="w-40"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <Button label="Suche" class="bg-emerald-500 border-emerald-500" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const cities = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
const selectedCity = ref(null)
const dateRange = ref(null)
const persons = ref(2)
</script>