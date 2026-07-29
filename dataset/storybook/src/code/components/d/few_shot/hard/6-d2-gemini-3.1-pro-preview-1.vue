<template>
  <div class="p-6">
    <Select
      v-model="selectedPerson"
      :options="people"
      placeholder="Verantwortlichen aus."
      filter
      filter-placeholder="Suche..."
      show-clear
      class="w-[216px]"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'

  const selectedPerson = ref(null)
  const people = ref([
    'Max Mustermann',
    'Anna Schmidt',
    'Lisa Weber',
    'Paul Müller',
  ])
</script>