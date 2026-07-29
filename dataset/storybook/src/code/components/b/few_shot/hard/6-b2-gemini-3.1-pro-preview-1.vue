<template>
  <div class="flex flex-col gap-2.5 bg-white p-6 w-fit">
    <Select
      v-model="selectedPerson"
      :options="people"
      placeholder="Verantwortlichen aus."
      filter
      showClear
      class="w-[216px]"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedPerson = ref()
const people = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
])
</script>