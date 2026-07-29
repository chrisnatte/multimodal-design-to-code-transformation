<template>
  <div class="p-6 bg-white flex flex-col gap-2.5">
    <div class="w-56">
      <Select
        v-model="selectedPerson"
        :options="people"
        optionLabel="name"
        optionValue="value"
        filter
        filterPlaceholder="Suche..."
        placeholder="Verantwortlichen aus."
        showClear
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
  { name: 'Max Mustermann', value: 'max_mustermann' },
  { name: 'Anna Schmidt', value: 'anna_schmidt' },
  { name: 'Lisa Weber', value: 'lisa_weber' },
  { name: 'Paul Müller', value: 'paul_mueller' }
]);
</script>