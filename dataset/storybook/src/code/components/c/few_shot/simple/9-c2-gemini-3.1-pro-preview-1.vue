<template>
  <div class="flex flex-col gap-4 p-6 w-fit">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between gap-12">
      <div class="flex items-center gap-3">
        <Checkbox v-model="selectedTasks" :inputId="task.id" name="task" :value="task.id" />
        <label :for="task.id" class="text-slate-700">{{ task.name }}</label>
      </div>
      <Tag :value="task.priority" :severity="task.severity" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const selectedTasks = ref<string[]>([])

const tasks = ref([
  { id: 'task1', name: 'Aufgabe1', priority: 'Hoch', severity: 'danger' as const },
  { id: 'task2', name: 'Aufgabe2', priority: 'Niedrig', severity: 'success' as const },
  { id: 'task3', name: 'Aufgabe3', priority: 'Mittel', severity: 'warn' as const }
])
</script>