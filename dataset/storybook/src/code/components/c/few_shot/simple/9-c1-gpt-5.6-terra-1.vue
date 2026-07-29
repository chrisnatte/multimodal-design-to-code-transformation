<template>
  <div class="flex w-[280px] flex-col gap-3 p-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="taskOneCompleted" input-id="task-one" binary />
        <label for="task-one" class="text-sm">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="taskTwoCompleted" input-id="task-two" binary />
        <label for="task-two" class="text-sm">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="taskThreeCompleted" input-id="task-three" binary />
        <label for="task-three" class="text-sm">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const taskOneCompleted = ref(false)
const taskTwoCompleted = ref(false)
const taskThreeCompleted = ref(false)
</script>