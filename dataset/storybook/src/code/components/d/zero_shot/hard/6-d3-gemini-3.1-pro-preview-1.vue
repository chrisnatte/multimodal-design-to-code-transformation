<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-[264px]">
    <Select
      v-model="selectedPerson"
      :options="people"
      placeholder="Verantwortlichen aus."
      showClear
      filter
      filterPlaceholder="Suche..."
      class="w-[216px]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedPerson = ref(null)

const people = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
])
</script>