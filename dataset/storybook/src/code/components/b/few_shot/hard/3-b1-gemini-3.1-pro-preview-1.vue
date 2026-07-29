<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex flex-row items-end gap-8">
      <div class="flex flex-col gap-1">
        <label for="destination" class="text-sm text-surface-700">Zielort</label>
        <Select
          v-model="destination"
          :options="destinations"
          filter
          placeholder="Zielort auswählen"
          input-id="destination"
          class="w-[216px]"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="date" class="text-sm text-surface-700">Reisezeitraum</label>
        <DatePicker
          v-model="dateRange"
          selection-mode="range"
          placeholder="Reisezeitraum wählen"
          input-id="date"
          class="w-[216px]"
        />
      </div>

      <div class="flex flex-col gap-1">
        <label for="persons" class="text-sm text-surface-700">Personen</label>
        <InputNumber
          v-model="persons"
          show-buttons
          button-layout="horizontal"
          input-id="persons"
          :min="1"
          class="w-[192px]"
        />
      </div>

      <Button label="Suche" severity="primary" class="h-[33px]" />
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