<template>
  <div class="flex flex-col gap-4 p-4 w-64">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="selectedTasks" :inputId="'task-' + task.id" :value="task.id" />
        <label :for="'task-' + task.id" class="text-slate-700">{{ task.name }}</label>
      </div>
      <Tag :value="task.priority" :severity="task.severity" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const selectedTasks = ref([])

const tasks = ref([
  { id: 1, name: 'Aufgabe1', priority: 'Hoch', severity: 'danger' },
  { id: 2, name: 'Aufgabe2', priority: 'Niedrig', severity: 'success' },
  { id: 3, name: 'Aufgabe3', priority: 'Mittel', severity: 'warning' }
])
</script>