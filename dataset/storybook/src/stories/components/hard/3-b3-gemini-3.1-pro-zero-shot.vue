<template>
  <div class="flex flex-row gap-8">
    <!-- Select -->
    <div class="flex flex-col gap-2">
      <label class="text-sm font-normal font-inter text-surface-700">Zielort</label>
      <Select
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-[216px]"
      />
    </div>

    <!-- DatePicker -->
    <div class="flex flex-col gap-2">
      <label class="text-sm font-normal font-inter text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="selectedDate"
        placeholder="Reisezeitraum wählen"
        class="w-[216px]"
      />
    </div>

    <!-- InputNumber -->
    <div class="flex flex-col gap-2">
      <label class="text-sm font-normal font-inter text-surface-700">Personen</label>
      <InputNumber
        v-model="persons"
        showButtons
        buttonLayout="horizontal"
        class="w-[192px]"
      >
        <template #incrementbuttonicon>
          <span class="pi pi-plus" />
        </template>
        <template #decrementbuttonicon>
          <span class="pi pi-minus" />
        </template>
      </InputNumber>
    </div>

    <!-- Button -->
    <div class="flex flex-col justify-end h-[60px]">
      <Button label="Suche" class="w-[65px]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const selectedCity = ref(null)
const cities = ref([
  { name: 'Berlin', code: 'DE' },
  { name: 'Amsterdam', code: 'NL' },
  { name: 'Barcelona', code: 'ES' },
  { name: 'Paris', code: 'FR' }
])

const selectedDate = ref(null)
const persons = ref(2)
</script>