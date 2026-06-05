<template>
  <div class="w-[264px] h-[266px] bg-white p-6">
    <div class="flex flex-col gap-0.5 w-full">
      <Select
        v-model="state.selectedPerson"
        :options="people"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        showClear
        class="w-full"
      />
      <div class="rounded-md border border-slate-200 bg-white shadow-md mt-1 overflow-hidden">
        <div class="p-2 pb-1">
          <InputText
            v-model="state.search"
            placeholder="Suche..."
            variant="filled"
            fluid
          />
        </div>
        <div class="flex flex-col gap-0.5 px-1 pb-2 pt-1">
          <Button
            v-for="person in filteredPeople"
            :key="person.name"
            :label="person.name"
            text
            severity="secondary"
            class="justify-start !px-2 !py-2 !text-[14px]"
            @click="state.selectedPerson = person"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import Select from 'primevue/select';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const state = reactive({
  selectedPerson: null,
  search: ''
});

const people = reactive([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
]);

const filteredPeople = computed(() =>
  people.filter((person) =>
    person.name.toLowerCase().includes(state.search.toLowerCase())
  )
);
</script>