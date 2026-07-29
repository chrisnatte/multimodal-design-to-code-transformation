<template>
  <div class="p-6 bg-white w-fit">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      showClear
      filter
      class="w-[216px]"
      :pt="{
        root: 'border-[#10b981]',
        overlay: 'border border-[#e2e8f0] rounded-md shadow-sm',
        header: 'p-2 pb-1',
        list: 'p-1',
        option: 'px-3 py-2 rounded-md hover:bg-gray-100',
      }"
    >
      <template #filtericon>
        <i class="pi pi-search text-gray-400"></i>
      </template>
    </Select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedPerson = ref(null)

const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>