<template>
  <div class="flex items-start gap-8">
    <div class="flex w-[216px] flex-col gap-0.5">
      <label for="destination" class="text-sm font-normal text-surface-700">Zielort</label>
      <Select
        ref="destinationSelect"
        input-id="destination"
        v-model="destination"
        :options="destinations"
        option-label="label"
        placeholder="Zielort auswählen"
        filter
        filter-placeholder="Suche..."
        class="w-full"
        :pt="{
          root: { class: 'h-[33px] border-primary' },
          overlay: { class: 'mt-0 w-[216px]' },
          header: { class: 'p-[10px]' },
          filterContainer: { class: 'w-full' },
          listContainer: { class: 'p-[3px]' },
          option: { class: 'h-[31px] px-[10px] py-[7px] text-sm' }
        }"
      >
        <template #option="{ option }">
          <span>{{ option.label }}</span>
        </template>
      </Select>
    </div>

    <div class="flex w-[268px] flex-col gap-0.5">
      <label for="travel-period" class="text-sm font-normal text-surface-700">Reisezeitraum</label>
      <InputText
        id="travel-period"
        v-model="travelPeriod"
        placeholder="Reisezeitraum wählen"
        class="h-[33px] w-[216px] border-primary px-[10px] py-[7px] text-sm"
      />
      <div class="mt-0.5 w-[268px] rounded-md border border-surface-200 bg-white p-[10px]">
        <DatePicker
          v-model="selectedDate"
          inline
          :view-date="calendarViewDate"
          class="w-full"
          :pt="{
            root: { class: 'w-full border-0 p-0 shadow-none' },
            header: { class: 'border-b border-surface-200 pb-[7px]' },
            title: { class: 'gap-[7px]' },
            tableHeader: { class: 'text-sm font-medium' },
            dayCell: { class: 'p-0' }
          }"
        />
      </div>
    </div>

    <div class="flex w-[192px] flex-col">
      <label for="people" class="mb-[7px] ml-[34px] text-sm font-normal text-surface-700">Personen</label>
      <InputNumber
        input-id="people"
        v-model="people"
        :min="0"
        show-buttons
        button-layout="horizontal"
        decrement-button-icon="pi pi-minus"
        increment-button-icon="pi pi-plus"
        class="w-full"
        :pt="{
          root: { class: 'h-[33px] w-full' },
          input: { class: 'h-[33px] w-[124px] text-sm' },
          decrementButton: { class: 'h-[33px] w-[35px]' },
          incrementButton: { class: 'h-[33px] w-[35px]' }
        }"
      />
    </div>

    <div class="flex h-[60px] w-[65px] flex-col justify-end">
      <Button label="Suche" class="h-[33px] w-[65px] text-sm" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const destinationSelect = ref()
const destination = ref(null)
const travelPeriod = ref(null)
const selectedDate = ref(null)
const people = ref(2)
const calendarViewDate = ref(new Date(2024, 0, 1))

const destinations = ref([
  { label: 'Berlin' },
  { label: 'Amsterdam' },
  { label: 'Barcelona' },
  { label: 'Paris' }
])

onMounted(() => {
  destinationSelect.value?.show()
})
</script>