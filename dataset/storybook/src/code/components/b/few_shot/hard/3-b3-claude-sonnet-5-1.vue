<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex items-end gap-8">
      <div class="flex flex-col gap-2">
        <label for="destination-select" class="text-sm">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination-select"
          :options="destinations"
          filter
          placeholder="Zielort auswählen"
          filter-placeholder="Suche..."
          class="w-54"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="date-range-picker" class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="dateRange"
          input-id="date-range-picker"
          selection-mode="range"
          placeholder="Reisezeitraum wählen"
          class="w-54"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="persons-input" class="text-sm">Personen</label>
        <InputNumber
          v-model="persons"
          input-id="persons-input"
          show-buttons
          button-layout="horizontal"
          :min="1"
          class="w-48"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>
      <Button label="Suche" severity="primary" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const destination = ref(null)
  const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
  const dateRange = ref(null)
  const persons = ref(2)
</script>