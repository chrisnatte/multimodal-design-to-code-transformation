<template>
  <div class="flex flex-col gap-4 p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task1" binary />
        <span class="text-gray-700">Aufgabe1</span>
      </div>
      <Tag value="Hoch" severity="danger" rounded></Tag>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task2" binary />
        <span class="text-gray-700">Aufgabe2</span>
      </div>
      <Tag value="Niedrig" severity="success" rounded></Tag>
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task3" binary />
        <span class="text-gray-700">Aufgabe3</span>
      </div>
      <Tag value="Mittel" severity="warning" rounded></Tag>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const task1 = ref(false)
const task2 = ref(false)
const task3 = ref(false)
</script>