<template>
  <div class="flex flex-col gap-5 p-4 w-72">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task.checked" :inputId="task.id" binary />
        <label :for="task.id" class="text-gray-600 text-base cursor-pointer select-none">
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
    priority: 'Hoch',
    severity: 'danger',
    checked: false
  },
  {
    id: 'task-2',
    name: 'Aufgabe2',
    priority: 'Niedrig',
    severity: 'success',
    checked: false
  },
  {
    id: 'task-3',
    name: 'Aufgabe3',
    priority: 'Mittel',
    severity: 'warn',
    checked: false
  }
]);
</script>