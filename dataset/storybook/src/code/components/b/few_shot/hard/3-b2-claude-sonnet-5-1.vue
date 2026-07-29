<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-8">
      <div class="flex w-56 flex-col gap-0.5">
        <label for="destination" class="text-sm">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination"
          :options="destinations"
          filter
          placeholder="Zielort auswählen"
          filter-placeholder="Suche..."
          class="w-full"
        />
      </div>
      <div class="flex flex-col gap-0.5">
        <label for="date-range" class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="dateRange"
          input-id="date-range"
          selection-mode="range"
          :manual-input="false"
          placeholder="Reisezeitraum wählen"
          class="w-56"
        />
      </div>
      <div class="flex flex-col gap-0.5">
        <label for="persons" class="text-sm">Personen</label>
        <InputNumber
          v-model="persons"
          input-id="persons"
          show-buttons
          button-layout="horizontal"
          :min="1"
          :max="20"
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
      <div class="flex h-[60px] w-[65px] items-end">
        <Button label="Suche" severity="primary" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const destination = ref()
  const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])

  const dateRange = ref()
  const persons = ref(2)
</script>