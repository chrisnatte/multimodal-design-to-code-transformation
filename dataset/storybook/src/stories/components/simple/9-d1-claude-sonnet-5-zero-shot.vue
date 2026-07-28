<template>
  <div class="flex flex-col gap-3 w-64">
    <div
      v-for="task in tasks"
      :key="task.id"
      class="flex items-center justify-between gap-3 w-full"
    >
      <div class="flex items-center gap-3">
        <Checkbox v-model="task.checked" :binary="true" />
        <span class="text-sm text-gray-700">{{ task.label }}</span>
      </div>
      <Tag :value="task.tagText" :severity="task.severity" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const tasks = ref([
  { id: 1, label: 'Aufgabe1', checked: false, tagText: 'Hoch', severity: 'danger' },
  { id: 2, label: 'Aufgabe2', checked: false, tagText: 'Niedrig', severity: 'success' },
  { id: 3, label: 'Aufgabe3', checked: false, tagText: 'Mittel', severity: 'warn' }
])
</script>