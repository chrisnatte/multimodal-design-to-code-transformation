<template>
  <div class="flex w-[304px] flex-col bg-white p-6">
    <div class="flex w-64 flex-col gap-3">
      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="taskOneCompleted" inputId="task-one" binary />
          <label for="task-one" class="text-sm">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="taskTwoCompleted" inputId="task-two" binary />
          <label for="task-two" class="text-sm">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="primary" rounded />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="taskThreeCompleted" inputId="task-three" binary />
          <label for="task-three" class="text-sm">Aufgabe3</label>
        </div>
        <Tag value="Mittel" severity="warn" rounded />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const taskOneCompleted = ref(false)
const taskTwoCompleted = ref(false)
const taskThreeCompleted = ref(false)
</script>