<template>
  <Select
    v-model="selectedValue"
    :options="options"
    optionLabel="name"
    placeholder="Verantwortlichen aus."
    showClear
    filter
    filterPlaceholder="Suche..."
    class="w-[216px]"
  />
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedValue = ref(null)

const options = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>