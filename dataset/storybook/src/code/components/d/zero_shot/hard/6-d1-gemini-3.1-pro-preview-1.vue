<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-[264px]">
    <div class="flex flex-col gap-0.5 w-[216px]">
      <Select
        v-model="selectedPerson"
        :options="people"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        showClear
        filter
        class="w-full"
        :pt="{
          root: { class: 'border-[#10b981]' }
        }"
      >
        <template #filtericon>
          <i class="pi pi-search"></i>
        </template>
      </Select>
    </div>
  </div>
</template>

<script setup>
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