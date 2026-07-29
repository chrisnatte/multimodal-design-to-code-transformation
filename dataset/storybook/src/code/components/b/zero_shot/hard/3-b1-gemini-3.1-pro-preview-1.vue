<template>
  <div class="flex flex-col p-6 gap-2.5 bg-white w-fit">
    <div class="flex flex-row gap-8 items-start">
      <!-- Destination Select -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm font-normal font-sans text-surface-700">Zielort</label>
        <Select 
          v-model="selectedDestination" 
          :options="destinations" 
          optionLabel="label" 
          placeholder="Zielort auswählen" 
          class="w-full" 
        />
      </div>

      <!-- Travel Dates DatePicker -->
      <div class="flex flex-col gap-0.5 w-[216px]">
        <label class="text-sm font-normal font-sans text-surface-700">Reisezeitraum</label>
        <DatePicker 
          v-model="travelDates" 
          placeholder="Reisezeitraum wählen" 
          class="w-full" 
        />
      </div>

      <!-- Persons InputNumber -->
      <div class="flex flex-col gap-0.5 w-[192px]">
        <label class="text-sm font-normal font-sans text-surface-700">Personen</label>
        <InputNumber 
          v-model="persons" 
          showButtons 
          buttonLayout="horizontal" 
          class="w-full" 
        />
      </div>

      <!-- Search Button -->
      <div class="flex flex-col justify-end h-[60px] w-[65px]">
        <Button 
          label="Suche" 
          severity="primary" 
          class="w-full" 
        />
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

const selectedDestination = ref(null)
const destinations = ref([
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Paris', value: 'Paris' }
])

const travelDates = ref(null)
const persons = ref(2)
</script>