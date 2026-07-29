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

<script setup lang="ts">
  import { ref } from 'vue'
  import Checkbox from 'primevue/checkbox'
  import Tag from 'primevue/tag'

  const tasks = ref([
    { name: 'Aufgabe1', checked: false, priority: 'Hoch' },
    { name: 'Aufgabe2', checked: false, priority: 'Niedrig' },
    { name: 'Aufgabe3', checked: false, priority: 'Mittel' },
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