<template>
  <div class="w-[216px]">
    <Select
      v-model="selectedUser"
      :options="users"
      optionLabel="name"
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

const selectedUser = ref(null)

const users = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>