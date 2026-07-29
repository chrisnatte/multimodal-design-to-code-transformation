<template>
  <div class="min-h-screen p-6">
    <Select
      ref="assigneeSelect"
      v-model="selectedAssignee"
      :options="assignees"
      placeholder="Verantwortlichen aus."
      filter
      filterPlaceholder="Suche..."
      class="w-54"
      aria-label="Verantwortlichen auswählen"
    />
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Select from 'primevue/select'

const assigneeSelect = ref()
const selectedAssignee = ref(null)

const assignees = ref([
  'Max Mustermann',
  'Anna Schmidt',
  'Lisa Weber',
  'Paul Müller'
])

onMounted(async () => {
  await nextTick()
  assigneeSelect.value?.$el?.querySelector('[role="combobox"]')?.click()
})
</script>