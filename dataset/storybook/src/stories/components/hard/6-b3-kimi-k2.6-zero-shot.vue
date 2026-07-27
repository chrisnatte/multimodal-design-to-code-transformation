<template>
  <div class="flex flex-col gap-0.5 w-[216px] bg-white">
    <Select
      v-model="selectedValue"
      :options="options"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      filter
      filterPlaceholder="Suche..."
      showClear
      :fluid="true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedValue = ref(null);
const options = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
]);
</script>