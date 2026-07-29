<template>
  <div class="flex p-6">
    <Select
      v-model="selectedResponsible"
      :options="responsibleOptions"
      option-label="name"
      filter
      filter-placeholder="Suche..."
      placeholder="Verantwortlichen aus."
      show-clear
      class="w-64"
    />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Select from 'primevue/select'

  const responsibleOptions = ref([
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' },
  ])

  const selectedResponsible = ref(null)
</script>