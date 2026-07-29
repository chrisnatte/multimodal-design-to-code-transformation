<template>
  <div class="flex w-sm flex-col gap-3 p-6">
    <div v-for="task in tasks" :key="task.id" class="flex items-center gap-3">
      <div class="flex flex-grow items-center gap-3">
        <Checkbox v-model="task.checked" :input-id="task.id" binary />
        <label :for="task.id">{{ task.label }}</label>
      </div>
      <Tag :value="task.priority" :severity="getPrioritySeverity(task.priority)" rounded />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Checkbox from 'primevue/checkbox'
  import Tag from 'primevue/tag'

  const tasks = ref([
    { id: 'task1', label: 'Aufgabe1', checked: false, priority: 'Hoch' },
    { id: 'task2', label: 'Aufgabe2', checked: false, priority: 'Niedrig' },
    { id: 'task3', label: 'Aufgabe3', checked: false, priority: 'Mittel' },
  ])

  function getPrioritySeverity(priority: string) {
    switch (priority) {
      case 'Hoch':
        return 'danger'
      case 'Niedrig':
        return 'success'
      case 'Mittel':
        return 'warn'
    }
  }
</script>