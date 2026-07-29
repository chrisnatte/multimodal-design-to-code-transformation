<template>
  <div class="p-6">
    <Select
      v-model="selectedPerson"
      :options="people"
      option-label="name"
      placeholder="Verantwortlichen aus."
      show-clear
      filter
      filter-placeholder="Suche..."
      class="w-64"
    />
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
    { name: 'Paul Müller' },
  ])
</script>