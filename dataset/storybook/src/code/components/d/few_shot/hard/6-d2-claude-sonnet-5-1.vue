<template>
  <div class="flex p-6">
    <Select
      v-model="selectedPerson"
      :options="people"
      option-label="name"
      filter
      filter-placeholder="Suche..."
      show-clear
      placeholder="Verantwortlichen aus."
      class="w-56"
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