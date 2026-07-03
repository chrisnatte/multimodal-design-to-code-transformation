<template>
  <div class="p-6 bg-surface-100 min-h-screen">
    <div class="flex items-start gap-8">
      <div class="flex flex-col gap-2 w-56">
        <label for="destination" class="text-surface-700 text-xl">Zielort</label>
        <Select
          v-model="state.destination"
          inputId="destination"
          :options="cities"
          optionLabel="name"
          placeholder="Zielort auswählen"
          class="w-full"
        />
        <Card class="w-full">
          <template #content>
            <div class="flex flex-col gap-2">
              <InputText v-model="state.destinationFilter" placeholder="Suche..." fluid />
              <div class="flex flex-col">
                <Button
                  v-for="city in filteredCities"
                  :key="city.code"
                  :label="city.name"
                  text
                  severity="secondary"
                  class="justify-start"
                  @click="state.destination = city"
                />
              </div>
            </div>
          </template>
        </Card>
      </div>

      <div class="flex flex-col gap-2 w-72">
        <label for="travelperiod" class="text-surface-700 text-xl">Reisezeitraum</label>
        <DatePicker
          v-model="state.travelPeriod"
          inputId="travelperiod"
          selectionMode="range"
          placeholder="Reisezeitraum wählen"
          class="w-full"
        />
        <DatePicker
          v-model="state.inlineCalendar"
          inline
          class="w-full"
          :manualInput="false"
        />
      </div>

      <div class="flex flex-col gap-2 w-48">
        <label for="persons" class="text-surface-700 text-xl">Personen</label>
        <InputNumber
          v-model="state.persons"
          inputId="persons"
          showButtons
          buttonLayout="horizontal"
          :min="1"
          :step="1"
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

      <div class="pt-9">
        <Button label="Suche" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

const state = reactive({
  destination: null,
  destinationFilter: '',
  travelPeriod: null,
  inlineCalendar: new Date(2024, 6, 1),
  persons: 2
})

const cities = [
  { name: 'Berlin', code: 'BER' },
  { name: 'Amsterdam', code: 'AMS' },
  { name: 'Barcelona', code: 'BCN' },
  { name: 'Paris', code: 'PAR' }
]

const filteredCities = computed(() =>
  cities.filter((city) =>
    city.name.toLowerCase().includes(state.destinationFilter.toLowerCase())
  )
)
</script>