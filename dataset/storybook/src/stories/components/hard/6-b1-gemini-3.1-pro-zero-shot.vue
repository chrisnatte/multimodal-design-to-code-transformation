<template>
  <div class="flex flex-col gap-[2px] w-[216px]">
    <Select
      v-model="selectedValue"
      :options="options"
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
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedValue = ref(null);

const options = ref([
  { name: 'Max Mustermann', value: 'Max Mustermann' },
  { name: 'Anna Schmidt', value: 'Anna Schmidt' },
  { name: 'Lisa Weber', value: 'Lisa Weber' },
  { name: 'Paul Müller', value: 'Paul Müller' }
]);
</script>