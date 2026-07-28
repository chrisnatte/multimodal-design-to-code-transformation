<template>
  <div class="flex flex-col gap-0.5 w-[216px] bg-white">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      showClear
      filter
      filterPlaceholder="Suche..."
      filterIcon="pi pi-search"
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