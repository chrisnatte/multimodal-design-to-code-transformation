<template>
  <div class="p-6 bg-gray-100 min-h-screen">
    <div class="flex items-start gap-8">
      <div class="flex flex-col gap-1 w-[216px]">
        <label class="text-sm text-slate-700">Zielort</label>
        <Select
          v-model="state.destination"
          :options="destinations"
          optionLabel="name"
          placeholder="Zielort auswählen"
          class="w-full"
          showClear
        />
        <div class="bg-white border border-slate-200 rounded-md shadow-md mt-0.5 p-2 flex flex-col gap-1">
          <InputText v-model="state.destinationSearch" placeholder="Suche..." fluid />
          <div class="flex flex-col">
            <div class="px-3 py-2 rounded bg-slate-100 text-slate-700">Berlin</div>
            <div class="px-3 py-2 text-slate-700">Amsterdam</div>
            <div class="px-3 py-2 text-slate-700">Barcelona</div>
            <div class="px-3 py-2 text-slate-700">Paris</div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-1 w-[300px]">
        <label class="text-sm text-slate-700">Reisezeitraum</label>
        <DatePicker
          v-model="state.travelDate"
          placeholder="Reisezeitraum wählen"
          dateFormat="dd/mm/yy"
          class="w-full"
        />
        <DatePicker v-model="state.travelDate" inline />
      </div>

      <div class="flex flex-col gap-1 w-[190px]">
        <label class="text-sm text-slate-700 text-center">Personen</label>
        <InputNumber
          v-model="state.persons"
          showButtons
          buttonLayout="horizontal"
          :step="1"
          :min="1"
          inputClass="text-center"
          fluid
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>

      <div class="pt-7">
        <Button label="Suche" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const state = reactive({
  destination: null,
  destinationSearch: '',
  travelDate: new Date(2024, 6, 1),
  persons: 2
})

const destinations = [
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' }
]
</script>