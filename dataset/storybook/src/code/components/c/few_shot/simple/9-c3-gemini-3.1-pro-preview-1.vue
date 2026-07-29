<template>
  <div class="flex w-fit flex-col gap-4 p-6">
    <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between gap-12">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task.completed" :input-id="task.id" binary />
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

  const tasks = ref([
    {
      id: 'task-1',
      name: 'Aufgabe1',
      priority: 'Hoch',
      severity: 'danger',
      completed: false,
    },
    {
      id: 'task-2',
      name: 'Aufgabe2',
      priority: 'Niedrig',
      severity: 'success',
      completed: false,
    },
    {
      id: 'task-3',
      name: 'Aufgabe3',
      priority: 'Mittel',
      severity: 'warn',
      completed: false,
    },
  ])
</script>