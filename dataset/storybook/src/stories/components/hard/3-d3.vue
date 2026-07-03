<template>
  <div class="p-6 bg-surface-100 min-h-[380px]">
    <div class="flex items-start gap-8">
      <div class="w-[216px] flex flex-col gap-1">
        <label class="text-sm text-slate-700">Zielort</label>
        <Select
          v-model="state.destination"
          :options="cities"
          placeholder="Zielort auswählen"
          optionLabel="label"
          optionValue="value"
          class="w-full"
        />
        <div class="mt-0.5 bg-white border border-slate-200 rounded-md shadow-md p-2">
          <div class="relative mb-2">
            <InputText
              v-model="state.citySearch"
              placeholder="Suche..."
              class="w-full pr-8"
            />
            <i class="pi pi-search absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm"></i>
          </div>
          <div class="flex flex-col gap-0.5 text-slate-700">
            <div class="px-3 py-2 rounded bg-slate-100">Berlin</div>
            <div class="px-3 py-2 rounded">Amsterdam</div>
            <div class="px-3 py-2 rounded">Barcelona</div>
            <div class="px-3 py-2 rounded">Paris</div>
          </div>
        </div>
      </div>

      <div class="w-[270px] flex flex-col gap-1">
        <label class="text-sm text-slate-700">Reisezeitraum</label>
        <DatePicker
          v-model="state.date"
          placeholder="Reisezeitraum wählen"
          :manualInput="false"
          class="w-full"
        />
        <div class="mt-0.5">
          <DatePicker
            v-model="state.date"
            inline
            :showWeek="false"
            :showButtonBar="false"
            :manualInput="false"
            class="shadow-md rounded-md border border-slate-200"
          />
        </div>
      </div>

      <div class="w-[190px] flex flex-col gap-1">
        <label class="text-sm text-slate-700">Personen</label>
        <InputNumber
          v-model="state.persons"
          showButtons
          buttonLayout="horizontal"
          :step="1"
          :min="1"
          :max="20"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          class="w-full"
          inputClass="text-center"
        />
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
  citySearch: '',
  date: null,
  persons: 2
})

const cities = reactive([
  { label: 'Berlin', value: 'berlin' },
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Paris', value: 'paris' }
])
</script>