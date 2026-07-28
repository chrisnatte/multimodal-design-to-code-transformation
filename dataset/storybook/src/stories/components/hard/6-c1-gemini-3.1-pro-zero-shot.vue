<template>
  <div class="p-8 flex justify-center bg-white min-h-[400px]">
    <Select
      v-model="selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      filter
      filterPlaceholder="Suche..."
      showClear
      class="w-[260px] !border-[#42b883]"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Select from 'primevue/select';

const selectedPerson = ref(null);

const people = ref([
  { name: 'Max Mustermann', code: 'MM' },
  { name: 'Anna Schmidt', code: 'AS' },
  { name: 'Lisa Weber', code: 'LW' },
  { name: 'Paul Müller', code: 'PM' }
]);
</script>