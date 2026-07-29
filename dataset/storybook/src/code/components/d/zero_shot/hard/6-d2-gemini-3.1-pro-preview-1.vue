<template>
  <div class="p-6 bg-white w-[264px] flex flex-col gap-2.5">
    <Select
      v-model="selectedValue"
      :options="options"
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
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
]);
</script>