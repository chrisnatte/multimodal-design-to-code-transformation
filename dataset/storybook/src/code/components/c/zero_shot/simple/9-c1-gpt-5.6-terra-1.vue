<template>
  <div class="flex w-[304px] flex-col gap-3 p-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks[0].completed" binary input-id="aufgabe1" />
        <label for="aufgabe1" class="text-sm text-slate-600">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" class="text-sm font-semibold" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks[1].completed" binary input-id="aufgabe2" />
        <label for="aufgabe2" class="text-sm text-slate-600">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" class="text-sm font-semibold" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="tasks[2].completed" binary input-id="aufgabe3" />
        <label for="aufgabe3" class="text-sm text-slate-600">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" class="text-sm font-semibold" />
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