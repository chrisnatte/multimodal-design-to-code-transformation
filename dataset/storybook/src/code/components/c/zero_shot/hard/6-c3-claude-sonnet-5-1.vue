<template>
  <div class="p-8 flex flex-col gap-2 w-80">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      showClear
      filter
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