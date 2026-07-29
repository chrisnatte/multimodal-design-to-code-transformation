<template>
  <div class="p-6 bg-white w-fit">
    <div class="flex flex-col gap-3 w-64">
      <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <Checkbox v-model="task.checked" :inputId="`task-${task.id}`" binary />
          <label :for="`task-${task.id}`" class="text-gray-700">{{ task.label }}</label>
        </div>
        <Tag :value="task.priority" :severity="task.severity" rounded />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const tasks = ref([
  { id: 1, label: 'Aufgabe1', priority: 'Hoch', severity: 'danger', checked: false },
  { id: 2, label: 'Aufgabe2', priority: 'Niedrig', severity: 'success', checked: false },
  { id: 3, label: 'Aufgabe3', priority: 'Mittel', severity: 'warn', checked: false }
]);
</script>