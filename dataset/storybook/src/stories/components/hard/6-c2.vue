<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-start">
    <div class="w-72 flex flex-col gap-2">
      <Select
        v-model="form.assignee"
        :options="assignees"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        showClear
        filter
        filterPlaceholder="Suche..."
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Select from 'primevue/select';

const assignees = [
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
];

const form = reactive({
  assignee: null
});
</script>