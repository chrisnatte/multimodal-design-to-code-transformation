<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <Select
      v-model="selectedPerson"
      :options="people"
      option-label="name"
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

  const selectedPerson = ref()
  const people = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' },
  ])
</script>