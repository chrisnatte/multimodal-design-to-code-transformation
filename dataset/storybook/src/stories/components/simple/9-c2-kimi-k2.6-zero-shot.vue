<template>
  <div class="flex flex-col gap-4 p-6">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task.checked" binary :inputId="task.id" />
        <label :for="task.id" class="text-slate-700 cursor-pointer select-none">{{ task.label }}</label>
      </div>
      <Tag :value="task.tag" :severity="task.severity" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const tasks = ref([
  { id: 'aufgabe1', label: 'Aufgabe1', checked: false, tag: 'Hoch', severity: 'danger' },
  { id: 'aufgabe2', label: 'Aufgabe2', checked: false, tag: 'Niedrig', severity: 'success' },
  { id: 'aufgabe3', label: 'Aufgabe3', checked: false, tag: 'Mittel', severity: 'warn' }
]);
</script>