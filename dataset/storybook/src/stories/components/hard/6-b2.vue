<template>
  <div class="flex flex-col gap-0.5">
    <div class="flex flex-col gap-0.5">
      <Select
        v-model="form.selectedPerson"
        :options="peopleOptions"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        showClear
        fluid
      />
    </div>

    <div class="flex flex-col">
      <div class="flex flex-col px-2.5 pt-1.5 pb-1">
        <InputText
          v-model="form.search"
          placeholder="Suche..."
          variant="filled"
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

const form = reactive({
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