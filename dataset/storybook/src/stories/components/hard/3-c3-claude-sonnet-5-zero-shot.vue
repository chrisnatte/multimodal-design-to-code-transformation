<template>
  <div class="flex items-start gap-8 p-6">
    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-56"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selectionMode="range"
        :numberOfMonths="1"
        placeholder="Reisezeitraum wählen"
        showIcon
        class="w-56"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        :max="20"
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

    <div class="flex flex-col gap-2">
      <label class="text-sm invisible">Suche</label>
      <Button label="Suche" severity="success" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const cities = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
])

const selectedCity = ref(null)
const dateRange = ref(null)
const persons = ref(2)
</script>