<template>
  <div class="flex flex-col bg-white p-6 w-fit">
    <div class="flex flex-col gap-3 w-64">
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="task1" input-id="task1" binary />
          <label for="task1" class="text-sm text-gray-900">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>
      
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="task2" input-id="task2" binary />
          <label for="task2" class="text-sm text-gray-900">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>
      
      <div class="flex items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="task3" input-id="task3" binary />
          <label for="task3" class="text-sm text-gray-900">Aufgabe3</label>
        </div>
        <Tag value="Mittel" severity="warn" rounded />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const task1 = ref(false)
const task2 = ref(false)
const task3 = ref(false)
</script>