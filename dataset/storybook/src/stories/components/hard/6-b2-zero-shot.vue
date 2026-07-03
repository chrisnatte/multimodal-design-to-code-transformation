<template>
  <div class="flex flex-col gap-0.5 bg-white">
    <div class="flex flex-col">
      <Select
        v-model="state.selectedPerson"
        :options="peopleOptions"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        showClear
        class="w-full"
      />
    </div>

    <div class="flex flex-col rounded-md bg-white">
      <div class="flex flex-col px-2.5 pt-2 pb-1">
        <InputText
          v-model="state.search"
          placeholder="Suche..."
          variant="filled"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-0.5 p-1">
        <span class="text-sm">Max Mustermann</span>
        <span class="text-sm">Anna Schmidt</span>
        <span class="text-sm">Lisa Weber</span>
        <span class="text-sm">Paul Müller</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';

const state = reactive({
  selectedPerson: null,
  search: ''
});

const peopleOptions = [
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
];
</script>