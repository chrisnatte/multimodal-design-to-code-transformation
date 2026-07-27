<template>
  <div class="w-[216px]">
    <Select
      v-model="selectedValue"
      :options="options"
      optionLabel="label"
      optionValue="value"
      placeholder="Verantwortlichen aus."
      filter
      filterPlaceholder="Suche..."
      showClear
      class="w-full"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedValue = ref(null)

const options = ref([
  { label: 'Max Mustermann', value: 'Max Mustermann' },
  { label: 'Anna Schmidt', value: 'Anna Schmidt' },
  { label: 'Lisa Weber', value: 'Lisa Weber' },
  { label: 'Paul Müller', value: 'Paul Müller' }
])
</script>