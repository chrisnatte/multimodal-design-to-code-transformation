<template>
  <div class="flex flex-col gap-3 p-4 w-64">
    <div v-for="task in tasks" :key="task.id" class="flex items-center gap-3 justify-between">
      <div class="flex items-center gap-3 flex-grow">
        <Checkbox v-model="task.checked" :inputId="task.id" binary />
        <label :for="task.id" class="text-sm text-gray-700">{{ task.label }}</label>
      </div>
      <Tag :value="task.tagLabel" :severity="task.severity" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const tasks = ref([
  { id: 'task1', label: 'Aufgabe1', checked: false, tagLabel: 'Hoch', severity: 'danger' },
  { id: 'task2', label: 'Aufgabe2', checked: false, tagLabel: 'Niedrig', severity: 'success' },
  { id: 'task3', label: 'Aufgabe3', checked: false, tagLabel: 'Mittel', severity: 'warn' }
]);
</script>