<template>
  <Select
    v-model="selectedPerson"
    :options="people"
    option-label="name"
    filter
    show-clear
    placeholder="Verantwortlichen aus."
    filter-placeholder="Suche..."
    class="w-64"
  />
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'

  const selectedPerson = ref()
  const people = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' },
  ])
</script>