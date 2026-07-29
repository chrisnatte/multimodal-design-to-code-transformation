<template>
  <div class="flex flex-col p-6 bg-white gap-2.5">
    <div class="flex flex-col w-full gap-0.5">
      <Select
        v-model="selectedPerson"
        :options="people"
        optionLabel="name"
        filter
        showClear
        placeholder="Verantwortlichen aus."
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>
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