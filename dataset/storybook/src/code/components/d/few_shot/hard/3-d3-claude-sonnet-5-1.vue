<template>
  <div class="flex items-end gap-8 rounded-lg bg-white p-6">
    <div class="flex w-56 flex-col gap-0.5">
      <label for="destination" class="text-sm">Zielort</label>
      <Select
        v-model="destination"
        :options="destinations"
        filter
        filter-placeholder="Suche..."
        placeholder="Zielort auswählen"
        input-id="destination"
        class="w-full"
      />
    </div>
    <div class="flex w-56 flex-col gap-0.5">
      <label for="daterange" class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selection-mode="range"
        placeholder="Reisezeitraum wählen"
        input-id="daterange"
        class="w-full"
      />
    </div>
    <div class="flex w-48 flex-col gap-0.5">
      <label for="persons" class="text-sm">Personen</label>
      <InputNumber
        v-model="persons"
        input-id="persons"
        show-buttons
        button-layout="horizontal"
        :min="1"
        class="w-full"
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