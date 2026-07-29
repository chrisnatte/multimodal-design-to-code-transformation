<template>
  <div class="flex flex-col gap-4 p-6 w-full max-w-xs bg-white">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task.checked" :inputId="`task-${task.id}`" :binary="true" />
        <label :for="`task-${task.id}`" class="text-slate-700 text-base cursor-pointer select-none">
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
  { id: 1, name: 'Aufgabe1', priority: 'Hoch', severity: 'danger', checked: false },
  { id: 2, name: 'Aufgabe2', priority: 'Niedrig', severity: 'success', checked: false },
  { id: 3, name: 'Aufgabe3', priority: 'Mittel', severity: 'warning', checked: false }
]);
</script>