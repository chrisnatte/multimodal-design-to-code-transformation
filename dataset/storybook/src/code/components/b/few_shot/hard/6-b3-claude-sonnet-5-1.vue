<template>
  <div class="w-fit p-6">
    <Select
      v-model="selectedPerson"
      :options="people"
      option-label="name"
      filter
      filter-placeholder="Suche..."
      show-clear
      placeholder="Verantwortlichen aus."
      class="w-54"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'

  const people = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' },
  ])

  const selectedPerson = ref(null)
</script>