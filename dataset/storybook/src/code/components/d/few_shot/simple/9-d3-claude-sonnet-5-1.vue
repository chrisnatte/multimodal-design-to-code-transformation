<template>
  <div class="flex w-80 flex-col gap-3 p-6">
    <div v-for="task in tasks" :key="task.label" class="flex items-center gap-3">
      <div class="flex flex-1 items-center gap-3">
        <Checkbox v-model="task.checked" :input-id="task.label" binary />
        <label :for="task.label">{{ task.label }}</label>
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
    { label: 'Aufgabe1', checked: false, priority: 'Hoch' },
    { label: 'Aufgabe2', checked: false, priority: 'Niedrig' },
    { label: 'Aufgabe3', checked: false, priority: 'Mittel' },
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