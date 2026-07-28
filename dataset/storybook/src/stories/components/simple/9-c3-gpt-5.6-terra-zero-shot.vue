<template>
  <div class="flex w-[304px] flex-col gap-3 p-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks.task1" inputId="task1" binary />
        <label for="task1" class="text-sm text-slate-700">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks.task2" inputId="task2" binary />
        <label for="task2" class="text-sm text-slate-700">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks.task3" inputId="task3" binary />
        <label for="task3" class="text-sm text-slate-700">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const tasks = ref({
  task1: false,
  task2: false,
  task3: false
})
</script>