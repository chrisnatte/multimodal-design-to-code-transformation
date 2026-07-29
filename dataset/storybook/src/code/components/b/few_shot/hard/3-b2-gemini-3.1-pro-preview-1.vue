<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <div class="flex flex-row items-end gap-8">
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="zielort" class="text-sm">Zielort</label>
        <Select
          v-model="zielort"
          input-id="zielort"
          :options="zielortOptions"
          placeholder="Zielort auswählen"
          class="w-full"
        />
      </div>
      
      <div class="flex w-[216px] flex-col gap-0.5">
        <label for="reisezeitraum" class="text-sm">Reisezeitraum</label>
        <DatePicker
          v-model="reisezeitraum"
          input-id="reisezeitraum"
          placeholder="Reisezeitraum wählen"
          class="w-full"
        />
      </div>
      
      <div class="flex w-[192px] flex-col gap-0.5">
        <label for="personen" class="text-sm">Personen</label>
        <InputNumber
          v-model="personen"
          input-id="personen"
          show-buttons
          button-layout="horizontal"
          class="w-full"
        >
          <template #incrementbuttonicon>
            <span class="pi pi-plus" />
          </template>
          <template #decrementbuttonicon>
            <span class="pi pi-minus" />
          </template>
        </InputNumber>
      </div>
      
      <div class="flex h-[60px] w-[65px] flex-col items-end justify-end">
        <Button label="Suche" severity="primary" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'
import DatePicker from 'primevue/datepicker'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const zielort = ref()
const zielortOptions = ref([
  'Berlin',
  'Amsterdam',
  'Barcelona',
  'Paris'
])

const reisezeitraum = ref()
const personen = ref(2)
</script>