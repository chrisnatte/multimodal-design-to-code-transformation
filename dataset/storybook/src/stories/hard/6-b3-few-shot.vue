<template>
  <div class="flex flex-col gap-0.5">
    <Select
      v-model="form.selectedPerson"
      :options="people"
      optionLabel="name"
      optionValue="name"
      placeholder="Verantwortlichen aus."
      :showClear="true"
      class="w-full"
    />

    <div class="flex flex-col">
      <div class="flex flex-col px-2.5 pt-2 pb-1">
        <InputText
          v-model="form.search"
          placeholder="Suche..."
          variant="filled"
          class="w-full"
        />
      </div>

      <div class="flex flex-col gap-0.5 p-1">
        <span class="px-2 py-1">Max Mustermann</span>
        <span class="px-2 py-1">Anna Schmidt</span>
        <span class="px-2 py-1">Lisa Weber</span>
        <span class="px-2 py-1">Paul Müller</span>
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

const people = reactive([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])
</script>