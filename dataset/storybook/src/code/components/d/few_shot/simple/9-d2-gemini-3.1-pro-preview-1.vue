<template>
  <div class="flex w-[304px] flex-col gap-3 bg-white p-6">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task.checked" :input-id="`task-${task.id}`" binary />
        <label :for="`task-${task.id}`" class="text-sm text-slate-700">{{ task.label }}</label>
      </div>
      <Tag :value="task.priority" :severity="task.severity" rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const tasks = ref([
  {
    id: 1,
    label: 'Aufgabe1',
    priority: 'Hoch',
    severity: 'danger',
    checked: false,
  },
  {
    id: 2,
    label: 'Aufgabe2',
    priority: 'Niedrig',
    severity: 'success',
    checked: false,
  },
  {
    id: 3,
    label: 'Aufgabe3',
    priority: 'Mittel',
    severity: 'warn',
    checked: false,
  },
])
</script>