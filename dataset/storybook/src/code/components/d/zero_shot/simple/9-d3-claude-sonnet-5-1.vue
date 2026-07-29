<template>
  <div class="p-6 bg-white inline-flex flex-col w-fit">
    <div class="flex flex-col gap-3 w-64">
      <div
        v-for="task in tasks"
        :key="task.id"
        class="flex items-center gap-3 justify-between"
      >
        <div class="flex items-center gap-3 flex-grow">
          <Checkbox v-model="task.checked" :binary="true" :inputId="`task-${task.id}`" />
          <label :for="`task-${task.id}`" class="text-sm text-gray-700">{{ task.label }}</label>
        </div>
        <Tag :value="task.tagValue" :severity="task.severity" :rounded="true" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const tasks = ref([
  { id: 1, label: 'Aufgabe1', checked: false, tagValue: 'Hoch', severity: 'danger' },
  { id: 2, label: 'Aufgabe2', checked: false, tagValue: 'Niedrig', severity: 'success' },
  { id: 3, label: 'Aufgabe3', checked: false, tagValue: 'Mittel', severity: 'warn' },
]);
</script>