<template>
  <div class="min-h-screen bg-gray-100 flex items-start justify-start p-6">
    <div class="w-64 flex flex-col gap-2">
      <Select
        v-model="form.selectedPerson"
        :options="people"
        optionLabel="name"
        placeholder="Verantwortlichen aus."
        filter
        filterPlaceholder="Suche..."
        showClear
        class="w-full"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'

const form = reactive({
  selectedPerson: null
})

const people = reactive([
  { name: 'Max Mustermann', value: 'max-mustermann' },
  { name: 'Anna Schmidt', value: 'anna-schmidt' },
  { name: 'Lisa Weber', value: 'lisa-weber' },
  { name: 'Paul Müller', value: 'paul-mueller' }
])
</script>