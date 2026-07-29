<template>
  <div class="flex w-[304px] flex-col p-6">
    <div class="flex w-[256px] flex-col gap-3">
      <div v-for="task in tasks" :key="task.id" class="flex w-full items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="task.checked" :input-id="`task-${task.id}`" binary />
          <label :for="`task-${task.id}`">{{ task.label }}</label>
        </div>
        <Tag :value="task.priority" :severity="getPrioritySeverity(task.priority)" rounded />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Checkbox from 'primevue/checkbox'
  import Tag from 'primevue/tag'

  const tasks = ref([
    { id: 1, label: 'Aufgabe1', priority: 'Hoch', checked: false },
    { id: 2, label: 'Aufgabe2', priority: 'Niedrig', checked: false },
    { id: 3, label: 'Aufgabe3', priority: 'Mittel', checked: false },
  ])

  function getPrioritySeverity(priority: string) {
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