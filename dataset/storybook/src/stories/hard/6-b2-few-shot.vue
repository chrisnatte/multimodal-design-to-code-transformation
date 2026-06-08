<template>
  <div class="flex flex-col gap-0.5">
    <Select
      v-model="form.selectedPerson"
      :options="people"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      showClear
      filter
      filterPlaceholder="Suche..."
      class="w-full"
      :pt="{
        header: { class: 'px-2.5 pt-1.5 pb-1' },
        list: { class: 'p-1 gap-0.5' }
      }"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'

const form = reactive({
  selectedPerson: null,
})

const people = reactive([
  { name: 'Max Mustermann', emoji: '🇺🇸' },
  { name: 'Anna Schmidt', emoji: '🇺🇸' },
  { name: 'Lisa Weber', emoji: '🇺🇸' },
  { name: 'Paul Müller', emoji: '🇺🇸' },
])
</script>