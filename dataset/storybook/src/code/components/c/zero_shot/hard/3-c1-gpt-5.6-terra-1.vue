<template>
  <div class="flex min-h-[381px] items-start gap-8 bg-white px-6 py-7 font-sans text-slate-700">
    <div class="flex flex-col gap-2">
      <label for="destination" class="text-sm">Zielort</label>
      <Select
        ref="destinationSelect"
        v-model="destination"
        inputId="destination"
        :options="destinations"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-[216px]"
        appendTo="self"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="travel-period" class="text-sm">Reisezeitraum</label>
      <DatePicker
        ref="travelDatePicker"
        v-model="travelDate"
        inputId="travel-period"
        placeholder="Reisezeitraum wählen"
        selectionMode="range"
        :viewDate="calendarViewDate"
        dateFormat="dd.mm.yy"
        :manualInput="false"
        class="w-[269px]"
        appendTo="self"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label for="persons" class="text-sm">Personen</label>
      <InputNumber
        v-model="persons"
        inputId="persons"
        :min="1"
        showButtons
        buttonLayout="horizontal"
        decrementButtonIcon="pi pi-minus"
        incrementButtonIcon="pi pi-plus"
        class="w-[192px]"
      />
    </div>

    <div class="pt-6">
      <Button label="Suche" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destination = ref(null)
const travelDate = ref(null)
const persons = ref(2)
const destinationSelect = ref()
const travelDatePicker = ref()
const calendarViewDate = ref(new Date(2024, 6, 1))

const destinations = ref([
  'Berlin',
  'Amsterdam',
  'Barcelona',
  'Paris'
])

onMounted(() => {
  destinationSelect.value?.show()
  travelDatePicker.value?.show()
})
</script>