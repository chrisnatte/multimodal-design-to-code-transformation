<template>
  <div class="p-4">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      showClear
      filter
      filterPlaceholder="Suche..."
      class="w-64"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedPerson = ref()
const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>