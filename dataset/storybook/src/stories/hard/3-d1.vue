<template>
  <div class="p-6 bg-gray-100 min-h-[380px]">
    <div class="flex gap-8 items-start">
      <div class="flex flex-col gap-1 w-[216px]">
        <label class="text-sm text-slate-700">Zielort</label>
        <Select
          v-model="state.destination"
          :options="destinations"
          optionLabel="label"
          placeholder="Zielort auswählen"
          class="w-full"
        />
        <Card class="w-full shadow-md">
          <template #content>
            <div class="flex flex-col gap-2">
              <IconField>
                <InputIcon class="pi pi-search" />
                <InputText v-model="state.destinationSearch" placeholder="Suche..." class="w-full" />
              </IconField>
              <Listbox
                v-model="state.destination"
                :options="destinations"
                optionLabel="label"
                class="border-0 p-0"
              />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex flex-col gap-1 w-[270px]">
        <label class="text-sm text-slate-700">Reisezeitraum</label>
        <DatePicker v-model="state.dateRange" selectionMode="range" placeholder="Reisezeitraum wählen" class="w-full" :manualInput="false" />
        <DatePicker v-model="state.dateRange" inline selectionMode="range" :manualInput="false" class="shadow-md rounded-md" />
      </div>

      <div class="flex flex-col gap-1 w-[192px]">
        <label class="text-sm text-slate-700 text-center">Personen</label>
        <InputNumber
          v-model="state.persons"
          showButtons
          buttonLayout="horizontal"
          decrementButtonClass="p-button-text"
          incrementButtonClass="p-button-text"
          incrementButtonIcon="pi pi-plus"
          decrementButtonIcon="pi pi-minus"
          class="w-full"
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
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Listbox from 'primevue/listbox'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Card from 'primevue/card'

const destinations = [
  { label: 'Berlin', value: 'Berlin' },
  { label: 'Amsterdam', value: 'Amsterdam' },
  { label: 'Barcelona', value: 'Barcelona' },
  { label: 'Paris', value: 'Paris' }
]

const state = reactive({
  destination: destinations[0],
  destinationSearch: '',
  dateRange: null,
  persons: 2
})
</script>