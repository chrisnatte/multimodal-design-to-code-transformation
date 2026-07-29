<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex flex-wrap items-end gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="destination-select" class="text-sm">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination-select"
          :options="destinationOptions"
          option-label="label"
          option-value="value"
          filter
          placeholder="Zielort auswählen"
          class="w-full"
        />
      </div>
      <div class="flex w-[268px] flex-col gap-0.5">
        <label for="date-range" class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="dateRange"
          input-id="date-range"
          selection-mode="range"
          placeholder="Reisezeitraum wählen"
          class="w-full"
        />
      </div>
      <div class="flex w-[124px] flex-col gap-0.5">
        <label for="persons-input" class="text-sm">Personen</label>
        <InputNumber
          v-model="persons"
          input-id="persons-input"
          show-buttons
          button-layout="horizontal"
          :min="1"
          class="w-full"
        >
          <template #incrementicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementicon>
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
  const destinationOptions = ref([
    { label: 'Berlin', value: 'berlin' },
    { label: 'Amsterdam', value: 'amsterdam' },
    { label: 'Barcelona', value: 'barcelona' },
    { label: 'Paris', value: 'paris' },
  ])

  const dateRange = ref(null)
  const persons = ref(2)
</script>