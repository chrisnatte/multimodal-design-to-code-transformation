<template>
  <div class="flex flex-col gap-3 p-4">
    <div v-for="task in tasks" :key="task.name" class="flex items-center justify-between gap-8">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task.checked" :input-id="task.name" binary />
        <label :for="task.name">{{ task.name }}</label>
      </div>
      <Tag :value="task.priority" :severity="getPrioritySeverity(task.priority)" />
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Checkbox from 'primevue/checkbox'
  import Tag from 'primevue/tag'

  const tasks = ref([
    { name: 'Aufgabe1', priority: 'Hoch', checked: false },
    { name: 'Aufgabe2', priority: 'Niedrig', checked: false },
    { name: 'Aufgabe3', priority: 'Mittel', checked: false },
  ])

  function getPrioritySeverity(priority) {
    switch (priority) {
      case 'Hoch':
        return 'danger'
      case 'Mittel':
        return 'warn'
      case 'Niedrig':
        return 'success'
    }
  }
</script>