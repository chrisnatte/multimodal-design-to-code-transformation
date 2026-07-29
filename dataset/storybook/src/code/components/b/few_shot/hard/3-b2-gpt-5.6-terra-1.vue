<template>
  <div class="w-[885px] bg-white p-6">
    <div class="flex items-start gap-8">
      <div class="w-[216px]">
        <label for="destination" class="mb-2 block text-sm">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination"
          :options="destinations"
          option-label="name"
          placeholder="Zielort auswählen"
          filter
          filter-placeholder="Suche..."
          class="w-full"
        />
      </div>

      <div class="w-[268px]">
        <label for="travel-period" class="mb-2 block text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="travelPeriod"
          input-id="travel-period"
          placeholder="Reisezeitraum wählen"
          class="w-[216px]"
        />
      </div>

      <div class="w-[192px]">
        <label for="people" class="mb-2 block text-sm">Personen</label>
        <InputNumber
          v-model="people"
          input-id="people"
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

      <div class="flex h-[61px] w-[65px] items-end">
        <Button label="Suche" class="w-full" />
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
const travelPeriod = ref<Date | null>(null)
const people = ref(2)

const destinations = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' },
])
</script>