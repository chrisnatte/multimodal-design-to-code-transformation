<template>
  <div class="flex flex-col gap-0.5 w-[216px]">
    <Select
      v-model="selectedResponsible"
      :options="responsibleOptions"
      placeholder="Verantwortlichen aus."
      showClear
      filter
      filterPlaceholder="Suche..."
      filterIcon="pi pi-search"
      class="w-full"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedResponsible = ref(null);
const responsibleOptions = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
]);
</script>