<template>
  <div class="flex flex-row items-start gap-6 p-6">
    <div class="flex flex-col gap-2 w-56">
      <label class="text-sm text-gray-700">Zielort</label>
      <Dropdown
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-2 w-72">
      <label class="text-sm text-gray-700">Reisezeitraum</label>
      <Calendar
        v-model="dateRange"
        selectionMode="range"
        placeholder="Reisezeitraum wählen"
        :showIcon="false"
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-2 w-48">
      <label class="text-sm text-gray-700">Personen</label>
      <div class="flex items-center border border-gray-300 rounded-md overflow-hidden w-full">
        <Button
          icon="pi pi-minus"
          class="p-button-text p-button-sm p-0 w-10 h-10 text-gray-500"
          @click="decrementPersons"
        />
        <InputText
          v-model="personCount"
          class="w-full text-center border-0 h-10 p-0"
          readonly
        />
        <Button
          icon="pi pi-plus"
          class="p-button-text p-button-sm p-0 w-10 h-10 text-gray-500"
          @click="incrementPersons"
        />
      </div>
    </div>

    <div class="flex flex-col gap-2 pt-6">
      <Button
        label="Suche"
        severity="success"
        class="h-10 px-6"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const selectedDestination = ref(null)
const dateRange = ref(null)
const personCount = ref(2)

const destinations = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
])

const incrementPersons = () => {
  personCount.value++
}

const decrementPersons = () => {
  if (personCount.value > 1) {
    personCount.value--
  }
}
</script>