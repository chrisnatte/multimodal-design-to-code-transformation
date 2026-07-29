<template>
  <div class="flex items-start gap-8 p-6">
    <div class="flex w-54 flex-col gap-2">
      <label for="destination" class="text-sm text-surface-700">Zielort</label>
      <Select
        v-model="destination"
        input-id="destination"
        :options="destinations"
        option-label="label"
        option-value="value"
        placeholder="Zielort auswählen"
        class="w-full"
      />
      <div class="rounded-md border border-surface-200 bg-white p-2 shadow-md">
        <IconField class="mb-2">
          <InputText v-model="destinationSearch" placeholder="Suche..." class="w-full" />
          <InputIcon class="pi pi-search" />
        </IconField>
        <Listbox
          v-model="destination"
          :options="filteredDestinations"
          option-label="label"
          option-value="value"
          class="border-0"
          :pt="{
            list: '!p-0',
            option: '!px-2 !py-1.5',
          }"
        />
      </div>
    </div>

    <div class="flex w-65 flex-col gap-2">
      <label for="travel-period" class="text-sm text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="travelPeriod"
        input-id="travel-period"
        selection-mode="range"
        placeholder="Reisezeitraum wählen"
        class="w-full"
      />
      <DatePicker
        v-model="travelPeriod"
        v-model:view-date="calendarViewDate"
        selection-mode="range"
        inline
        class="w-full rounded-md border border-surface-200 shadow-md"
      />
    </div>

    <div class="flex w-40 flex-col gap-2">
      <label for="people" class="text-center text-sm text-surface-700">Personen</label>
      <InputNumber
        v-model="people"
        input-id="people"
        :min="1"
        show-buttons
        button-layout="horizontal"
        decrement-button-icon="pi pi-minus"
        increment-button-icon="pi pi-plus"
        class="w-full"
        :pt="{
          pcInput: { root: 'w-full' },
          incrementButton: { root: '!border-l !border-surface-300' },
          decrementButton: { root: '!border-r !border-surface-300' },
        }"
      />
    </div>

    <Button label="Suche" class="mt-7" />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'

const destination = ref<string | null>(null)
const destinationSearch = ref('')
const travelPeriod = ref<Date[] | null>(null)
const calendarViewDate = ref(new Date(2024, 6, 1))
const people = ref(2)

const destinations = [
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Paris', value: 'Paris' },
]

const filteredDestinations = computed(() => {
  const search = destinationSearch.value.toLowerCase()
  return destinations.filter((city) => city.label.toLowerCase().includes(search))
})
</script>