<template>
  <div class="min-h-screen bg-slate-100 p-6">
    <div class="flex items-start gap-8">
      <div class="flex flex-col gap-2 w-[230px]">
        <label class="text-slate-700 text-2xl">Zielort</label>
        <Select
          v-model="state.destination"
          :options="destinations"
          optionLabel="label"
          optionValue="value"
          placeholder="Zielort auswählen"
          class="w-full"
        />
        <div class="bg-white border border-slate-200 rounded-lg shadow p-3 flex flex-col gap-2">
          <span class="p-input-icon-right">
            <InputText v-model="state.destinationSearch" placeholder="Suche..." class="w-full" />
            <i class="pi pi-search text-slate-400" />
          </span>
          <div class="flex flex-col">
            <div
              v-for="(city, idx) in filteredCities"
              :key="city"
              class="px-3 py-2 rounded text-slate-700"
              :class="idx === 0 ? 'bg-slate-100' : ''"
            >
              {{ city }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-2 w-[300px]">
        <label class="text-slate-700 text-2xl">Reisezeitraum</label>
        <DatePicker
          v-model="state.travelDate"
          placeholder="Reisezeitraum wählen"
          class="w-full"
          dateFormat="dd.mm.yy"
        />
        <DatePicker v-model="state.travelDateInline" inline class="w-full" />
      </div>

      <div class="flex flex-col gap-2 w-[220px]">
        <label class="text-slate-700 text-2xl">Personen</label>
        <InputNumber
          v-model="state.persons"
          showButtons
          buttonLayout="horizontal"
          :step="1"
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

      <div class="pt-10">
        <Button label="Suche" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const state = reactive({
  destination: null,
  destinationSearch: '',
  travelDate: null,
  travelDateInline: new Date(2024, 6, 10),
  persons: 2
})

const destinations = reactive([
  { label: 'Berlin', value: 'berlin' },
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Paris', value: 'paris' }
])

const filteredCities = computed(() => {
  if (!state.destinationSearch) return destinations.map((d) => d.label)
  return destinations
    .map((d) => d.label)
    .filter((city) => city.toLowerCase().includes(state.destinationSearch.toLowerCase()))
})
</script>