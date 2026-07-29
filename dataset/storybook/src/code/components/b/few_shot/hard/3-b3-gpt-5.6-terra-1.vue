<template>
  <div class="flex w-[885px] flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="destination" class="text-sm">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination"
          :options="destinations"
          option-label="label"
          placeholder="Zielort auswählen"
          filter
          filter-placeholder="Suche..."
          class="w-full"
        />
      </div>

      <div class="flex w-[268px] flex-col gap-0.5">
        <label for="travel-period" class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="travelPeriod"
          input-id="travel-period"
          selection-mode="range"
          date-format="dd.mm.yy"
          placeholder="Reisezeitraum wählen"
          class="w-[216px]"
        />
        <DatePicker
          v-model="travelPeriod"
          selection-mode="range"
          inline
          class="mt-0.5 w-full"
        />
      </div>

      <div class="flex w-[192px] flex-col gap-0.5">
        <label for="people" class="text-sm">Personen</label>
        <InputNumber
          v-model="people"
          input-id="people"
          show-buttons
          button-layout="horizontal"
          :min="1"
          class="w-full"
        >
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
        </InputNumber>
      </div>

      <div class="flex h-[60px] w-[65px] flex-col justify-end">
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

const destination = ref(null)
const travelPeriod = ref<Date[] | null>(null)
const people = ref(2)

const destinations = ref([
  { label: 'Berlin' },
  { label: 'Amsterdam' },
  { label: 'Barcelona' },
  { label: 'Paris' }
])
</script>