<template>
  <div class="flex items-start gap-6 p-4">
    <div class="flex flex-col gap-2">
      <label for="zielort" class="text-sm">Zielort</label>
      <Select
        v-model="selectedCity"
        input-id="zielort"
        :options="cities"
        filter
        placeholder="Zielort auswählen"
        class="w-56"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        input-id="reisezeitraum"
        selection-mode="range"
        :manual-input="false"
        placeholder="Reisezeitraum wählen"
        class="w-56"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="personen" class="text-sm">Personen</label>
      <InputNumber
        v-model="persons"
        input-id="personen"
        show-buttons
        button-layout="horizontal"
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
    <Button label="Suche" severity="primary" class="mt-6" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const selectedCity = ref('Berlin')
const cities = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
const dateRange = ref()
const persons = ref(2)
</script>