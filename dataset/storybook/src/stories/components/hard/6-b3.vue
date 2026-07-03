<template>
  <div class="flex flex-col gap-0.5 bg-white w-full max-w-md">
    <Select
      v-model="form.selectedPerson"
      :options="people"
      optionLabel="name"
      optionValue="name"
      placeholder="Verantwortlichen aus."
      :showClear="true"
      class="w-full"
    />
    <div class="flex flex-col rounded-md bg-white w-full">
      <div class="flex flex-col px-3 py-2 pb-1">
        <InputText
          v-model="form.search"
          type="text"
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
import { reactive } from 'vue'
import Select from 'primevue/select'
import InputText from 'primevue/inputtext'

const form = reactive({
  selectedPerson: null,
  search: ''
})

const people = [
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
]
</script>