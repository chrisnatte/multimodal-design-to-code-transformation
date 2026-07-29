<template>
  <div class="flex w-full flex-col gap-2.5 bg-white p-6">
    <div class="flex items-start gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="destination" class="text-sm">Zielort</label>
        <Select
          v-model="destination"
          input-id="destination"
          :options="cities"
          option-label="name"
          placeholder="Zielort auswählen"
          class="w-full"
          :pt="{ root: '!border-primary' }"
        />

        <div class="z-10 mt-0.5 overflow-hidden rounded-md border border-surface-200 bg-white shadow-md">
          <div class="p-2.5 pb-1">
            <span class="relative block">
              <InputText
                v-model="citySearch"
                placeholder="Suche..."
                class="w-full pr-8"
                aria-label="Zielort suchen"
              />
              <i
                class="pi pi-search absolute right-3 top-1/2 -translate-y-1/2 text-sm text-surface-400"
              />
            </span>
          </div>
          <Listbox
            v-model="destination"
            :options="filteredCities"
            option-label="name"
            class="border-0"
            :pt="{
              list: '!p-1',
              option: '!px-2.5 !py-2',
            }"
          />
        </div>
      </div>

      <div class="flex w-[268px] flex-col gap-0.5">
        <label for="travel-period" class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="travelPeriod"
          input-id="travel-period"
          selection-mode="range"
          placeholder="Reisezeitraum wählen"
          :show-on-focus="false"
          class="w-[216px]"
          :pt="{ pcInputText: { root: '!border-primary' } }"
        />
        <div class="mt-0.5 rounded-md border border-surface-200 bg-white p-2.5 shadow-md">
          <DatePicker
            v-model="calendarDate"
            inline
            :pt="{
              root: '!border-0 !p-0',
              header: '!px-0 !pt-0',
              tableHeader: '!text-sm',
            }"
          />
        </div>
      </div>

      <div class="flex w-48 flex-col gap-0.5">
        <label for="persons" class="text-sm">Personen</label>
        <InputNumber
          v-model="persons"
          input-id="persons"
          :min="1"
          show-buttons
          button-layout="horizontal"
          decrement-button-icon="pi pi-minus"
          increment-button-icon="pi pi-plus"
          class="w-full"
        />
      </div>

      <div class="flex h-[61px] flex-col justify-end">
        <Button label="Suche" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import Button from 'primevue/button'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Listbox from 'primevue/listbox'
import Select from 'primevue/select'

const cities = ref([
  { name: 'Berlin' },
  { name: 'Amsterdam' },
  { name: 'Barcelona' },
  { name: 'Paris' },
])

const destination = ref<{ name: string } | null>(null)
const citySearch = ref('')
const travelPeriod = ref<(Date | null)[]>([null, null])
const calendarDate = ref(new Date(2024, 6, 1))
const persons = ref(2)

const filteredCities = computed(() => {
  const search = citySearch.value.toLowerCase()

  return cities.value.filter((city) => city.name.toLowerCase().includes(search))
})
</script>