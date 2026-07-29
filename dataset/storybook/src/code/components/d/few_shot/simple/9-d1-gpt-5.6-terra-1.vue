<template>
  <div class="flex w-[304px] flex-col p-6">
    <div class="flex flex-col gap-3">
      <div v-for="task in tasks" :key="task.id" class="flex items-center justify-between gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="task.completed" :input-id="task.id" binary />
          <label :for="task.id" class="text-sm">{{ task.label }}</label>
        </div>
        <Tag :value="task.priority" :severity="task.severity" rounded />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Checkbox from 'primevue/checkbox'
  import Tag from 'primevue/tag'

  const tasks = ref([
    { id: 'aufgabe-1', label: 'Aufgabe1', priority: 'Hoch', severity: 'danger', completed: false },
    { id: 'aufgabe-2', label: 'Aufgabe2', priority: 'Niedrig', severity: 'success', completed: false },
    { id: 'aufgabe-3', label: 'Aufgabe3', priority: 'Mittel', severity: 'warn', completed: false },
  ])
</script>