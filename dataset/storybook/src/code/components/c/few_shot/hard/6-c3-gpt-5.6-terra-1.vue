<template>
  <div class="p-6">
    <Select
      ref="assigneeSelect"
      v-model="selectedAssignee"
      :options="assignees"
      option-label="name"
      placeholder="Verantwortlichen aus."
      filter
      filter-placeholder="Suche..."
      show-clear
      class="w-[216px]"
      overlay-class="w-[216px]"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Select from 'primevue/select'

const selectedAssignee = ref({ name: 'Verantwortlichen aus.' })
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