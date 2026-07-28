<template>
  <div class="flex items-start gap-8 p-6 font-sans text-sm text-slate-700">
    <div class="flex w-[216px] flex-col gap-0.5">
      <label for="destination" class="leading-[21px]">Zielort</label>
      <Select
        id="destination"
        v-model="destination"
        :options="destinations"
        placeholder="Zielort auswählen"
        class="h-[33px] w-[216px] text-sm"
      />
      <div class="z-10 mt-0.5 w-[216px] rounded-md border border-slate-200 bg-white shadow-md">
        <div class="p-2.5 pb-1">
          <div class="relative">
            <InputText
              v-model="destinationSearch"
              placeholder="Suche..."
              class="h-[33px] w-full pr-8 text-sm"
            />
            <i class="pi pi-search absolute right-3 top-1/2 -translate-y-1/2 text-sm text-slate-400"></i>
          </div>
        </div>
        <Listbox
          v-model="destination"
          :options="filteredDestinations"
          class="border-0 text-sm"
          list-style="max-height:none"
        >
          <template #option="{ option }">
            <span>{{ option }}</span>
          </template>
        </Listbox>
      </div>
    </div>

    <div class="flex w-[268px] flex-col gap-0.5">
      <label for="travel-period" class="w-[216px] leading-[21px]">Reisezeitraum</label>
      <InputText
        id="travel-period"
        v-model="travelPeriodText"
        placeholder="Reisezeitraum wählen"
        readonly
        class="h-[33px] w-[216px] border-primary text-sm"
      />
      <div class="mt-0.5 w-[268px] rounded-md border border-slate-200 bg-white shadow-md">
        <DatePicker
          v-model="travelPeriod"
          :view-date="calendarViewDate"
          inline
          class="w-full"
        />
      </div>
    </div>

    <div class="flex w-[192px] flex-col gap-0.5">
      <label for="persons" class="ml-[34px] leading-[21px]">Personen</label>
      <InputNumber
        id="persons"
        v-model="persons"
        :min="0"
        show-buttons
        button-layout="horizontal"
        decrement-button-icon="pi pi-minus"
        increment-button-icon="pi pi-plus"
        class="w-[192px]"
        input-class="h-[33px] w-[124px] text-sm"
      />
    </div>

    <div class="flex h-[60px] w-[65px] flex-col justify-end">
      <Button label="Suche" class="h-[33px] w-[65px] text-sm" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'

const destinations = ref(['Berlin', 'Amsterdam', 'Barcelona', 'Paris'])
const destination = ref(null)
const destinationSearch = ref('')
const travelPeriod = ref(null)
const travelPeriodText = ref('')
const calendarViewDate = ref(new Date(2024, 6, 1))
const persons = ref(2)

const filteredDestinations = computed(() => {
  const query = destinationSearch.value.toLowerCase()

  return destinations.value.filter((city) => city.toLowerCase().includes(query))
})
</script>