<template>
  <div class="p-6">
    <MultiSelect
      ref="assigneeSelect"
      v-model="selectedAssignees"
      :options="assignees"
      option-label="name"
      placeholder="Verantwortlichen aus."
      filter
      filter-placeholder="Suche..."
      show-clear
      class="w-[216px]"
      :pt="{
        root: 'h-8 border-emerald-500',
        label: 'text-sm py-1 px-2',
        dropdown: 'w-7',
        overlay: 'mt-1 w-[216px]',
        header: 'p-2',
        filterContainer: 'w-full',
        filter: 'h-8 text-sm',
        list: 'p-1',
        option: 'px-3 py-2 text-sm',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, useTemplateRef } from 'vue'
import MultiSelect from 'primevue/multiselect'

const assignees = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' },
])

const selectedAssignees = ref([{ name: 'Verantwortlichen aus.' }])
const assigneeSelect = useTemplateRef('assigneeSelect')

onMounted(async () => {
  await nextTick()
  assigneeSelect.value?.show()
})
</script>