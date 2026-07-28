<template>
  <div class="min-h-screen bg-white p-6">
    <Select
      ref="assigneeSelect"
      v-model="selectedAssignee"
      :options="assignees"
      optionLabel="name"
      placeholder="Verantwortlichen aus."
      filter
      filterPlaceholder="Suche..."
      showClear
      appendTo="self"
      class="w-54"
    />
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Select from 'primevue/select'

const assigneeSelect = ref()
const selectedAssignee = ref({ name: 'Verantwortlichen aus.' })

const assignees = ref([
  { name: 'Max Mustermann' },
  { name: 'Anna Schmidt' },
  { name: 'Lisa Weber' },
  { name: 'Paul Müller' }
])

onMounted(async () => {
  await nextTick()
  assigneeSelect.value?.show()
})
</script>