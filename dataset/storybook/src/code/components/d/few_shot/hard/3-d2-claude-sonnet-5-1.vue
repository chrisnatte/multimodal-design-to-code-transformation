<template>
  <div class="flex flex-row items-start gap-8 p-6 bg-white">
    <div class="flex flex-col gap-2 w-56">
      <label for="destination" class="text-sm">Zielort</label>
      <Select
        v-model="destination"
        :options="destinations"
        filter
        filter-placeholder="Suche..."
        option-label="name"
        placeholder="Zielort auswählen"
        input-id="destination"
        class="w-full"
      />
    </div>
    <div class="flex flex-col gap-2 w-56">
      <label for="daterange" class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selection-mode="range"
        :manual-input="false"
        placeholder="Reisezeitraum wählen"
        input-id="daterange"
        class="w-full"
      />
    </div>
    <div class="flex flex-col gap-2">
      <label for="persons" class="text-sm">Personen</label>
      <InputNumber
        v-model="persons"
        input-id="persons"
        show-buttons
        button-layout="horizontal"
        :min="1"
        :max="20"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>
    <Button label="Suche" severity="primary" class="self-end" />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Select from 'primevue/select'
  import DatePicker from 'primevue/datepicker'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const destination = ref(null)
  const destinations = ref([
    { name: 'Berlin' },
    { name: 'Amsterdam' },
    { name: 'Barcelona' },
    { name: 'Paris' },
  ])

  const dateRange = ref(null)
  const persons = ref(2)
</script>