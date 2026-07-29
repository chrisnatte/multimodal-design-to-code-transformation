<template>
  <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
    <Select
      v-model="selectedResponsible"
      :options="responsibles"
      placeholder="Verantwortlichen aus."
      filter
      show-clear
      filter-placeholder="Suche..."
      filter-icon="pi pi-search"
      option-label="name"
      class="w-[216px]"
      autofocus
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedResponsible = ref(null)

const responsibles = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>