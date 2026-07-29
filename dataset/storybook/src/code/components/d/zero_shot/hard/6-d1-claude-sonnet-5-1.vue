<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      filter
      filterPlaceholder="Suche..."
      showClear
      placeholder="Verantwortlichen aus."
      class="w-full"
      style="width: 216px"
    />
  </div>
</template>

<script setup>
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