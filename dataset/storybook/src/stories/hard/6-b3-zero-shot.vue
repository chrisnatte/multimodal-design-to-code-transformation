<template>
  <div class="flex flex-col gap-0.5 bg-white">
    <Select
      v-model="state.selectedPerson"
      :options="state.people"
      optionLabel="name"
      optionValue="name"
      placeholder="Verantwortlichen aus."
      :showClear="true"
      class="w-full"
    />

    <div class="flex flex-col rounded-md bg-white w-full">
      <div class="flex flex-col px-2.5 pt-2 pb-1 w-full">
        <InputText
          v-model="state.search"
          type="text"
          placeholder="Suche..."
          variant="filled"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-0.5 p-1 w-full">
        <span class="px-2 py-1.5 text-sm">Max Mustermann</span>
        <span class="px-2 py-1.5 text-sm">Anna Schmidt</span>
        <span class="px-2 py-1.5 text-sm">Lisa Weber</span>
        <span class="px-2 py-1.5 text-sm">Paul Müller</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'

const state = reactive({
  selectedPerson: null,
  search: '',
  people: [
    { name: 'Max Mustermann' },
    { name: 'Anna Schmidt' },
    { name: 'Lisa Weber' },
    { name: 'Paul Müller' }
  ]
})
</script>