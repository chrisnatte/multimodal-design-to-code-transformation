<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-row gap-8 items-start">
      <!-- Zielort Select -->
      <div class="flex flex-col gap-0.5" style="width: 216px;">
        <label class="text-sm font-normal">Zielort</label>
        <Select
          v-model="selectedCity"
          :options="cityOptions"
          optionLabel="name"
          filter
          placeholder="Zielort auswählen"
          class="w-full"
        />
      </div>

      <!-- Reisezeitraum Date Picker -->
      <div class="flex flex-col gap-0.5" style="width: 216px;">
        <label class="text-sm font-normal">Reisezeitraum</label>
        <DatePicker
          v-model="dateRange"
          selectionMode="range"
          placeholder="Reisezeitraum wählen"
          showIcon
          class="w-full"
        />
      </div>

      <!-- Personen InputNumber -->
      <div class="flex flex-col gap-0.5" style="width: 124px;">
        <label class="text-sm font-normal">Personen</label>
        <InputNumber
          v-model="personen"
          showButtons
          buttonLayout="horizontal"
          :min="1"
          :max="20"
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

      <!-- Suche Button -->
      <div class="flex flex-col justify-end" style="width: 65px; height: 60px;">
        <Button label="Suche" severity="primary" class="w-full" @click="onSearch" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const cityOptions = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
])

const selectedCity = ref(null)
const dateRange = ref(null)
const personen = ref(2)

function onSearch() {
  console.log('Suche', {
    city: selectedCity.value,
    dateRange: dateRange.value,
    personen: personen.value
  })
}
</script>