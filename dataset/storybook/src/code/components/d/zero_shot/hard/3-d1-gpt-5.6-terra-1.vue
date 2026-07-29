<template>
  <div class="flex w-[885px] flex-col gap-2.5 bg-white p-6 font-sans text-sm text-slate-700">
    <div class="flex items-start gap-8">
      <div class="relative flex w-[216px] flex-col gap-0.5">
        <label for="destination" class="leading-5">Zielort</label>
        <Select
          ref="destinationSelect"
          inputId="destination"
          v-model="destination"
          :options="destinations"
          optionLabel="label"
          placeholder="Zielort auswählen"
          filter
          filterPlaceholder="Suche..."
          appendTo="self"
          class="h-[33px] w-[216px]"
          :pt="{
            root: { class: 'border border-emerald-500 rounded-md shadow-none' },
            label: { class: 'py-1.5 pl-2.5 text-sm text-slate-500' },
            dropdown: { class: 'w-[35px] text-slate-400' },
            overlay: { class: 'mt-0.5 w-[216px] rounded-md border border-slate-200 shadow-md' },
            header: { class: 'p-2.5 pb-1' },
            filterContainer: { class: 'w-full' },
            filterInput: { class: 'h-[33px] w-full py-1.5 pl-2.5 text-sm' },
            listContainer: { class: 'p-1 pb-1' },
            list: { class: 'p-0' },
            option: { class: 'min-h-[31px] px-2.5 py-[7px] text-sm text-slate-700' }
          }"
        />
      </div>

      <div class="relative flex w-[268px] flex-col gap-0.5">
        <label for="travel-period" class="w-[216px] leading-5">Reisezeitraum</label>
        <DatePicker
          ref="travelDatePicker"
          inputId="travel-period"
          v-model="travelPeriod"
          selectionMode="range"
          :viewDate="july2024"
          :manualInput="false"
          placeholder="Reisezeitraum wählen"
          appendTo="self"
          class="w-[216px]"
          inputClass="h-[33px] w-[216px] border-emerald-500 py-1.5 pl-2.5 text-sm shadow-none"
          :pt="{
            panel: { class: 'mt-0.5 w-[268px] rounded-md border border-slate-200 p-2.5 shadow-md' },
            header: { class: 'border-b border-slate-200 pb-1.5' },
            title: { class: 'gap-2 text-sm font-medium text-slate-700' },
            selectMonth: { class: 'text-sm font-medium' },
            selectYear: { class: 'text-sm font-medium' },
            previousButton: { class: 'h-[35px] w-[35px] text-slate-500' },
            nextButton: { class: 'h-[35px] w-[35px] text-slate-500' },
            dayView: { class: 'pt-1.5' },
            weekDay: { class: 'h-6 p-1 text-sm font-medium text-slate-700' },
            dayCell: { class: 'h-[35px] p-0.5' },
            day: { class: 'h-7 w-7 text-sm text-slate-700' }
          }"
        />
      </div>

      <div class="flex w-[192px] flex-col">
        <label for="people" class="ml-[34px] leading-5">Personen</label>
        <InputNumber
          inputId="people"
          v-model="people"
          :min="1"
          showButtons
          buttonLayout="horizontal"
          decrementButtonIcon="pi pi-minus"
          incrementButtonIcon="pi pi-plus"
          class="h-[33px] w-[192px]"
          inputClass="h-[33px] border-slate-300 py-1.5 text-sm"
          :pt="{
            decrementButton: { class: 'h-[33px] w-[35px] border-slate-300 bg-white text-slate-400' },
            incrementButton: { class: 'h-[33px] w-[35px] border-slate-300 bg-white text-slate-400' }
          }"
        />
      </div>

      <div class="flex h-[60px] w-[65px] flex-col justify-end">
        <Button label="Suche" class="h-[33px] w-[65px] px-2.5 py-1.5 text-sm" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Select from 'primevue/select'

const destinations = [
  { label: 'Berlin' },
  { label: 'Amsterdam' },
  { label: 'Barcelona' },
  { label: 'Paris' }
]

const destination = ref(null)
const travelPeriod = ref(null)
const people = ref(2)
const destinationSelect = ref()
const travelDatePicker = ref()
const july2024 = ref(new Date(2024, 6, 1))

onMounted(async () => {
  await nextTick()
  destinationSelect.value?.show()
  travelDatePicker.value?.show()
})
</script>