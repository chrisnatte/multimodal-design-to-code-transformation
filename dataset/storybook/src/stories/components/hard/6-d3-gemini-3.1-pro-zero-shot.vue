<template>
  <div class="flex flex-col gap-0.5">
    <Select
      v-model="selectedUser"
      :options="users"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      filter
      filterPlaceholder="Suche..."
      showClear
      class="w-[216px]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedUser = ref(null);

const users = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
]);
</script>