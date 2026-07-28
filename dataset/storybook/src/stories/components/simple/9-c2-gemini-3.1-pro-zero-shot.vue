<template>
  <div class="flex flex-col gap-4 p-4 w-full max-w-xs bg-white">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task.completed" :inputId="task.id" binary />
        <label :for="task.id" class="text-surface-700 dark:text-surface-0 cursor-pointer select-none">
          {{ task.name }}
        </label>
      </div>
      <Tag :value="task.priority" :severity="task.severity" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const tasks = ref([
  {
    id: 'task-1',
    name: 'Aufgabe1',
    completed: false,
    priority: 'Hoch',
    severity: 'danger'
  },
  {
    id: 'task-2',
    name: 'Aufgabe2',
    completed: false,
    priority: 'Niedrig',
    severity: 'success'
  },
  {
    id: 'task-3',
    name: 'Aufgabe3',
    completed: false,
    priority: 'Mittel',
    severity: 'warn'
  }
]);
</script>