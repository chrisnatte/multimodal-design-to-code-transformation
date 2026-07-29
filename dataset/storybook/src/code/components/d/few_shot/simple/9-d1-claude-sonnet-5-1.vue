<template>
  <div class="flex w-80 flex-col gap-3 bg-white p-6">
    <div v-for="task in tasks" :key="task.label" class="flex items-center gap-3">
      <div class="flex flex-grow items-center gap-3">
        <Checkbox v-model="task.checked" :input-id="task.label" binary />
        <label :for="task.label" class="text-sm">{{ task.label }}</label>
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
    { label: 'Aufgabe1', checked: false, priority: 'Hoch', severity: 'danger' },
    { label: 'Aufgabe2', checked: false, priority: 'Niedrig', severity: 'success' },
    { label: 'Aufgabe3', checked: false, priority: 'Mittel', severity: 'warn' },
  ])
</script>