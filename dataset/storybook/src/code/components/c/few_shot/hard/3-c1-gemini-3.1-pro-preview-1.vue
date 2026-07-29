<template>
  <div class="flex items-end gap-6 p-8">
    <div class="flex flex-col gap-2">
      <label for="destination" class="text-sm text-surface-700">Zielort</label>
      <Select
        v-model="selectedDestination"
        :options="destinations"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        inputId="destination"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="travel-date" class="text-sm text-surface-700">Reisezeitraum</label>
      <DatePicker
        v-model="selectedDate"
        placeholder="Reisezeitraum wählen"
        inputId="travel-date"
        class="w-64"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="persons" class="text-sm text-surface-700">Personen</label>
      <InputNumber
        v-model="persons"
        inputId="persons"
        showButtons
        buttonLayout="horizontal"
        decrementButtonIcon="pi pi-minus"
        incrementButtonIcon="pi pi-plus"
        :min="1"
        class="w-36"
        inputClass="text-center"
      />
    </div>

    <Button label="Suche" severity="primary" class="px-6" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const selectedDestination = ref(null)
const destinations = ref([
  { name: 'Berlin', code: 'BER' },
  { name: 'Amsterdam', code: 'AMS' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Paris', code: 'PAR' }
])

const selectedDate = ref(null)
const persons = ref(2)
</script>