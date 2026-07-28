<template>
  <div class="p-4 bg-white" style="width: 216px;">
    <Select
      v-model="selectedResponsible"
      :options="responsibleOptions"
      optionLabel="name"
      filter
      filterPlaceholder="Suche..."
      showClear
      placeholder="Verantwortlichen aus."
      class="w-full"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedResponsible = ref(null)

const responsibleOptions = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>