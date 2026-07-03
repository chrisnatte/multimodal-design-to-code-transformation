<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="flex items-start gap-8">
      <div class="flex flex-col gap-3 w-[215px]">
        <label class="text-[28px] leading-none text-slate-700">Zielort</label>
        <Dropdown
          v-model="state.selectedDestination"
          :options="destinations"
          optionLabel="label"
          optionValue="value"
          placeholder="Zielort auswählen"
          class="w-full"
          :pt="{
            root: { class: 'h-[46px] border-emerald-500 rounded-lg' },
            input: { class: 'text-[30px] text-slate-500 pl-3' },
            trigger: { class: 'text-slate-400' }
          }"
        />
        <Card
          class="w-full shadow-md"
          :pt="{
            root: { class: 'rounded-lg' },
            body: { class: 'p-3' },
            content: { class: 'p-0' }
          }"
        >
          <template #content>
            <div class="flex flex-col gap-2">
              <IconField>
                <InputText
                  v-model="state.search"
                  placeholder="Suche..."
                  class="w-full"
                  :pt="{ root: { class: 'h-[44px] text-[28px] text-slate-500 rounded-lg' } }"
                />
                <InputIcon class="pi pi-search text-slate-400" />
              </IconField>
              <Listbox
                v-model="state.selectedDestination"
                :options="destinations"
                optionLabel="label"
                optionValue="value"
                class="w-full border-0"
                :pt="{
                  root: { class: 'border-0' },
                  list: { class: 'p-0' },
                  option: { class: 'text-[30px] py-2 px-3 text-slate-700' },
                  optionSelected: { class: 'bg-slate-200 text-slate-700' }
                }"
              />
            </div>
          </template>
        </Card>
      </div>

      <div class="flex flex-col gap-3 w-[270px]">
        <label class="text-[28px] leading-none text-slate-700">Reisezeitraum</label>
        <Dropdown
          v-model="state.range"
          :options="rangeOptions"
          optionLabel="label"
          optionValue="value"
          placeholder="Reisezeitraum wählen"
          class="w-full"
          :pt="{
            root: { class: 'h-[46px] border-emerald-500 rounded-lg' },
            input: { class: 'text-[30px] text-slate-500 pl-3' },
            trigger: { class: 'text-slate-400' }
          }"
        />
        <Calendar
          v-model="state.calendarDate"
          inline
          showWeek
          class="w-full"
          :pt="{
            root: { class: 'shadow-md rounded-lg overflow-hidden' },
            panel: { class: 'border border-slate-200 rounded-lg' },
            header: { class: 'px-3 py-3' },
            title: { class: 'text-[28px] text-slate-700' },
            tableHeaderCell: { class: 'text-[24px] text-slate-600' },
            dayLabel: { class: 'text-[24px] text-slate-600 w-9 h-9' }
          }"
        />
      </div>

      <div class="flex items-start gap-6 pt-1">
        <div class="flex flex-col gap-3">
          <label class="text-[28px] leading-none text-slate-700">Personen</label>
          <InputGroup class="h-[46px]">
            <Button
              icon="pi pi-minus"
              severity="secondary"
              outlined
              @click="decrease"
              class="!w-[52px] !rounded-r-none !border-slate-300 !text-slate-400"
            />
            <InputNumber
              v-model="state.people"
              :min="1"
              :max="20"
              inputClass="!text-[30px] !text-slate-700 !text-left !pl-4"
              :pt="{
                root: { class: '!w-[140px]' },
                input: { class: '!h-[46px] !rounded-none !border-slate-300' }
              }"
              :useGrouping="false"
            />
            <Button
              icon="pi pi-plus"
              severity="secondary"
              outlined
              @click="increase"
              class="!w-[52px] !rounded-l-none !border-slate-300 !text-slate-400"
            />
          </InputGroup>
        </div>

        <Button
          label="Suche"
          class="!h-[46px] !px-6 !mt-[34px]"
          severity="success"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Dropdown from 'primevue/dropdown'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import IconField from 'primevue/iconfield'
import InputIcon from 'primevue/inputicon'
import Listbox from 'primevue/listbox'
import Calendar from 'primevue/calendar'
import InputGroup from 'primevue/inputgroup'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'

const state = reactive({
  selectedDestination: 'berlin',
  search: '',
  range: null,
  calendarDate: new Date(2024, 6, 1),
  people: 2
})

const destinations = [
  { label: 'Berlin', value: 'berlin' },
  { label: 'Amsterdam', value: 'amsterdam' },
  { label: 'Barcelona', value: 'barcelona' },
  { label: 'Paris', value: 'paris' }
]

const rangeOptions = [
  { label: 'Juli 2024', value: 'july-2024' }
]

const decrease = () => {
  if (state.people > 1) state.people -= 1
}

const increase = () => {
  if (state.people < 20) state.people += 1
}
</script>