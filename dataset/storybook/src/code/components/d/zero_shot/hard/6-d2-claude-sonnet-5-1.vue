<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <div class="flex flex-col gap-0.5" style="width: 216px">
      <Select
        v-model="selectedResponsible"
        :options="responsibles"
        optionLabel="name"
        filter
        filterPlaceholder="Suche..."
        showClear
        placeholder="Verantwortlichen aus."
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedResponsible = ref(null);

const responsibles = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
]);
</script>