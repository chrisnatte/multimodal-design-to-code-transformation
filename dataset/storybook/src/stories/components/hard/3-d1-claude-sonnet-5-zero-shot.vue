<template>
  <div class="flex gap-8 items-start p-4">
    <!-- Zielort Select -->
    <div class="flex flex-col gap-0.5" style="width: 216px;">
      <label class="text-sm text-gray-700">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        filter
        placeholder="Zielort auswählen"
        class="w-full"
      />
    </div>

    <!-- Reisezeitraum Datepicker -->
    <div class="flex flex-col gap-0.5" style="width: 216px;">
      <label class="text-sm text-gray-700">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        dateFormat="dd.mm.yy"
        class="w-full"
        showIcon={false}
      />
    </div>

    <!-- Personen InputNumber -->
    <div class="flex flex-col gap-0.5" style="width: 192px;">
      <label class="text-sm text-gray-700">Personen</label>
      <InputNumber
        v-model="personCount"
        showButtons
        buttonLayout="horizontal"
        :min="1"
        decrementButtonClass="p-button-secondary"
        incrementButtonClass="p-button-secondary"
        incrementButtonIcon="pi pi-plus"
        decrementButtonIcon="pi pi-minus"
        class="w-full"
      />
    </div>

    <!-- Suche Button -->
    <div class="flex flex-col items-end justify-end" style="width: 65px; height: 60px;">
      <Button label="Suche" class="w-full" />
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
const personCount = ref(2)
</script>