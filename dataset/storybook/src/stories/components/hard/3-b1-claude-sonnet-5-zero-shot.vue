<template>
  <div class="flex flex-row gap-8 items-start">
    <!-- Select: Zielort -->
    <div class="flex flex-col gap-0.5" style="width: 216px">
      <label class="text-sm">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>

    <!-- DatePicker: Reisezeitraum -->
    <div class="flex flex-col gap-0.5" style="width: 216px">
      <label class="text-sm">Reisezeitraum</label>
      <DatePicker
        v-model="dateRange"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        showIcon
        class="w-full"
      />
    </div>

    <!-- InputNumber: Personen -->
    <div class="flex flex-col gap-0.5" style="width: 192px">
      <label class="text-sm">Personen</label>
      <InputNumber
        v-model="personen"
        showButtons
        buttonLayout="horizontal"
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

    <!-- Search Button -->
    <div class="flex flex-col items-end justify-end" style="width: 65px; height: 60px">
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
const personen = ref(2)
</script>