<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="w-[216px]">
      <Select
        v-model="selectedPerson"
        :options="people"
        optionLabel="name"
        filter
        showClear
        placeholder="Verantwortlichen aus."
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'

const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])

const selectedPerson = ref(null)
</script>