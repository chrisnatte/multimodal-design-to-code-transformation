<template>
  <div class="flex w-72 flex-col gap-3 p-6">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task.completed" :input-id="`task-${task.id}`" binary />
        <label :for="`task-${task.id}`" class="text-sm">{{ task.label }}</label>
      </div>
      <Tag :value="task.priority" :severity="task.severity" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const tasks = ref([
  { id: 1, label: 'Aufgabe1', completed: false, priority: 'Hoch', severity: 'danger' },
  { id: 2, label: 'Aufgabe2', completed: false, priority: 'Niedrig', severity: 'success' },
  { id: 3, label: 'Aufgabe3', completed: false, priority: 'Mittel', severity: 'warn' },
])
</script>