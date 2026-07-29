<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="destination" class="text-sm">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination"
          :options="destinations"
          option-label="name"
          placeholder="Zielort auswählen"
          filter
          autofocus
          class="w-full"
        />
      </div>

      <div class="flex w-[268px] flex-col gap-0.5">
        <label for="travel-period" class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="travelPeriod"
          input-id="travel-period"
          selection-mode="range"
          placeholder="Reisezeitraum wählen"
          class="w-[216px]"
        />
        <DatePicker
          v-model="travelPeriod"
          selection-mode="range"
          inline
          :view-date="calendarViewDate"
          class="mt-0.5"
        />
      </div>

      <div class="flex w-[192px] flex-col gap-0.5">
        <label for="people" class="text-sm">Personen</label>
        <InputNumber
          v-model="people"
          input-id="people"
          :min="1"
          show-buttons
          button-layout="horizontal"
          decrement-button-icon="pi pi-minus"
          increment-button-icon="pi pi-plus"
          class="w-full"
          input-class="w-full text-center"
        />
      </div>

      <div class="flex h-[61px] w-[65px] flex-col justify-end">
        <Button label="Suche" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destinations = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' },
])

const destination = ref(null)
const travelPeriod = ref<Date[] | null>(null)
const calendarViewDate = ref(new Date(2024, 6, 1))
const people = ref(2)
</script>