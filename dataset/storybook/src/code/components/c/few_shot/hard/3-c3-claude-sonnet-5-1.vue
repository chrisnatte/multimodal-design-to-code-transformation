<template>
  <div class="flex items-end gap-6 p-6">
    <div class="flex flex-col gap-2">
      <label for="destination">Zielort</label>
      <Select
        v-model="destination"
        input-id="destination"
        :options="destinations"
        filter
        placeholder="Zielort auswählen"
        class="w-52"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="date-range">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        input-id="date-range"
        selection-mode="range"
        placeholder="Reisezeitraum wählen"
        class="w-52"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="persons">Personen</label>
      <InputNumber
        v-model="persons"
        input-id="persons"
        show-buttons
        button-layout="horizontal"
        :min="1"
        class="w-44"
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

  const destinations = ['Berlin', 'Amsterdam', 'Barcelona', 'Paris']
  const destination = ref('Berlin')
  const dateRange = ref()
  const persons = ref(2)
</script>