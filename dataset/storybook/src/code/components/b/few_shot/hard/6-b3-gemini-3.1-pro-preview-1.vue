<template>
  <div class="flex w-fit flex-col gap-2.5 bg-white p-6">
    <Select
      v-model="selectedPerson"
      :options="people"
      placeholder="Verantwortlichen aus."
      show-clear
      filter
      filter-placeholder="Suche..."
      class="w-[216px]"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'

  const selectedPerson = ref<string | null>(null)
  const people = ref([
    'Max Mustermann',
    'Anna Schmidt',
    'Lisa Weber',
    'Paul Müller',
  ])
</script>