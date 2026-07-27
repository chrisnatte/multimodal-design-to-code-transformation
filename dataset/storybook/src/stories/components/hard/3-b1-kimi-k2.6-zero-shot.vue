<template>
  <div class="flex flex-row items-start gap-8">
    <div class="flex flex-col gap-1.5 w-[216px]">
      <label for="select-zielort" class="text-sm font-normal text-gray-900">Zielort</label>
      <Select
        id="select-zielort"
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        placeholder="Zielort auswählen"
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>

    <div class="flex flex-col gap-1.5 w-[268px]">
      <label for="datepicker-reisezeitraum" class="text-sm font-normal text-gray-900">Reisezeitraum</label>
      <DatePicker
        id="datepicker-reisezeitraum"
        v-model="dateRange"
        placeholder="Reisezeitraum wählen"
        class="w-[216px]"
      />
    </div>

    <div class="flex flex-col gap-1.5 w-[192px]">
      <label for="inputnumber-personen" class="text-sm font-normal text-gray-900">Personen</label>
      <InputNumber
        id="inputnumber-personen"
        v-model="personen"
        showButtons
        buttonLayout="horizontal"
        class="w-full"
      />
    </div>

    <div class="flex flex-col justify-end w-[65px] h-[60px]">
      <Button label="Suche" severity="primary" class="w-full h-[33px]" />
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
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
])

const dateRange = ref(null)
const personen = ref(2)
</script>