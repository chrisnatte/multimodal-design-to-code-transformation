<template>
  <div class="flex w-[264px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-[216px] flex-col gap-0.5">
      <Select
        v-model="selectedAssignee"
        :options="assignees"
        option-label="name"
        placeholder="Verantwortlichen aus."
        filter
        show-clear
        autofocus
        filter-placeholder="Suche..."
        class="w-[216px]"
        :pt="{
          overlay: 'mt-0.5 w-[216px]',
          header: 'p-2.5 pb-1',
          filter: 'bg-surface-50',
          list: 'flex flex-col gap-0.5 p-1',
          option: 'px-2.5 py-1.5',
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'

const selectedAssignee = ref(null)

const assignees = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' },
])
</script>