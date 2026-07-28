<template>
  <div class="flex p-4">
    <Dropdown
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      filter
      filterPlaceholder="Suche..."
      showClear
      placeholder="Verantwortlichen aus."
      class="w-64"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Dropdown from 'primevue/dropdown'

const selectedPerson = ref(null)

const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>