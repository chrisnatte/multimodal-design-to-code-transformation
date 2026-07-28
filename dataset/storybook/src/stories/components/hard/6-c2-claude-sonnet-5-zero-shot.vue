<template>
  <div class="flex justify-center p-8">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      filter
      filterPlaceholder="Suche..."
      showClear
      placeholder="Verantwortlichen aus."
      class="w-64"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedPerson = ref(null);
const people = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
]);
</script>