<template>
  <div class="p-2 bg-white" style="width: 216px">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      optionValue="value"
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
  { name: 'Max Mustermann', value: 'max' },
  { name: 'Anna Schmidt', value: 'anna' },
  { name: 'Lisa Weber', value: 'lisa' },
  { name: 'Paul Müller', value: 'paul' }
]);
</script>