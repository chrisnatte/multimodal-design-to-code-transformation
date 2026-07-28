<template>
  <div class="flex flex-col p-4 gap-2 w-72">
    <Select
      v-model="selectedPerson"
      :options="people"
      filter
      showClear
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      filterPlaceholder="Suche..."
      class="w-full"
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