<template>
  <div class="flex w-[885px] flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="destination" class="text-sm font-normal text-surface-900">Zielort</label>
        <Select
          id="destination"
          v-model="destination"
          :options="destinations"
          optionLabel="label"
          placeholder="Zielort auswählen"
          class="h-[33px] w-full"
        />
        <div class="w-full rounded-md border border-surface-200 bg-white">
          <Listbox
            v-model="destination"
            :options="destinations"
            optionLabel="label"
            filter
            filterPlaceholder="Suche..."
            class="border-0"
            listStyle="max-height: 133px"
          >
            <template #option="{ option }">
              <span class="text-sm">{{ option.label }}</span>
            </template>
          </Listbox>
        </div>
      </div>

      <div class="flex w-[268px] flex-col">
        <label for="travel-period" class="mb-[7px] text-sm font-normal text-surface-900">
          Reisezeitraum
        </label>
        <InputText
          id="travel-period"
          v-model="travelPeriodText"
          placeholder="Reisezeitraum wählen"
          class="h-[33px] w-[216px]"
        />
        <div class="mt-0.5 w-[268px] rounded-md border border-surface-200 bg-white p-[10px]">
          <DatePicker
            v-model="travelPeriod"
            inline
            :manualInput="false"
            :viewDate="calendarViewDate"
            class="w-full"
          />
        </div>
      </div>

      <div class="flex w-[192px] flex-col">
        <label for="people" class="mb-[7px] ml-[34px] text-sm font-normal text-surface-900">
          Personen
        </label>
        <InputNumber
          id="people"
          v-model="people"
          :min="0"
          showButtons
          buttonLayout="horizontal"
          decrementButtonIcon="pi pi-minus"
          incrementButtonIcon="pi pi-plus"
          class="h-[33px] w-full"
        />
      </div>

      <div class="flex h-[60px] w-[65px] flex-col justify-end">
        <Button label="Suche" class="h-[33px] w-[65px]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'

const destinations = ref([
  { label: 'Berlin' },
  { label: 'Amsterdam' },
  { label: 'Barcelona' },
  { label: 'Paris' }
])

const destination = ref(null)
const travelPeriod = ref(null)
const travelPeriodText = ref('')
const calendarViewDate = ref(new Date(2024, 0, 1))
const people = ref(2)
</script>