<template>
  <div class="relative w-[264px] p-6">
    <Select
      ref="assigneeSelect"
      v-model="selectedAssignee"
      :options="assignees"
      option-label="name"
      placeholder="Verantwortlichen aus."
      filter
      filter-placeholder="Suche..."
      append-to="self"
      auto-filter-focus
      class="w-[216px]"
      :pt="{
        root: 'border-primary',
        filter: 'w-full',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Select from 'primevue/select'

const selectedAssignee = ref(null)
const assigneeSelect = ref()

const assignees = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' },
])

onMounted(() => {
  assigneeSelect.value?.show()
})
</script>