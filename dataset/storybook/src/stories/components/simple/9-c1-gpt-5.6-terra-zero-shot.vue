<template>
  <div class="flex w-[304px] flex-col gap-3 p-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks[0].completed" :binary="true" />
        <label class="text-sm text-slate-700">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks[1].completed" :binary="true" />
        <label class="text-sm text-slate-700">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks[2].completed" :binary="true" />
        <label class="text-sm text-slate-700">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const tasks = ref([
  { completed: false },
  { completed: false },
  { completed: false }
])
</script>