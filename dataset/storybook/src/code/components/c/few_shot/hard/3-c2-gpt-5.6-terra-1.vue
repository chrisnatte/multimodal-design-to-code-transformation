<template>
  <div class="flex items-start gap-8 p-6">
    <div class="flex w-54 flex-col gap-2">
      <label for="destination" class="text-sm">Zielort</label>
      <Select
        ref="destinationSelect"
        v-model="destination"
        input-id="destination"
        :options="destinations"
        placeholder="Zielort auswählen"
        filter
        filter-placeholder="Suche..."
        class="w-full"
      />
    </div>

    <div class="flex w-54 flex-col gap-2">
      <label for="travel-period" class="text-sm">Reisezeitraum</label>
      <DatePicker
        ref="travelDatePicker"
        v-model="travelPeriod"
        input-id="travel-period"
        placeholder="Reisezeitraum auswählen"
        selection-mode="range"
        :manual-input="false"
        class="w-full"
      />
    </div>

    <div class="ml-12 flex w-48 flex-col gap-2">
      <label for="travelers" class="text-sm">Personen</label>
      <InputNumber
        v-model="travelers"
        input-id="travelers"
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

    <div class="mt-6">
      <Button label="Suche" severity="success" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destination = ref(null)
const travelPeriod = ref(null)
const travelers = ref(2)
const destinationSelect = ref()
const travelDatePicker = ref()

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])

onMounted(() => {
  destinationSelect.value?.show()
  travelDatePicker.value?.show()
})
</script>