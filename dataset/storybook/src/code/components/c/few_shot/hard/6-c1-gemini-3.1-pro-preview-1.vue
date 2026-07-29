<template>
  <div class="p-4">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      class="w-full max-w-[250px]"
      showClear
      filter
      filterPlaceholder="Suche..."
      :pt="{
        root: 'border-green-500',
      }"
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
  { name: 'Paul Müller' }
])
</script>