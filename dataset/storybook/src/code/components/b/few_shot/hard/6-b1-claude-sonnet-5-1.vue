<template>
  <div class="w-fit bg-white p-6">
    <Select
      v-model="selectedPerson"
      :options="people"
      option-label="name"
      filter
      filter-placeholder="Suche..."
      placeholder="Verantwortlichen aus."
      show-clear
      class="w-[216px]"
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