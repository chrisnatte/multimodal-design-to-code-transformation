<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-col gap-3 w-[256px]">
      
      <div class="flex flex-row items-center gap-3 w-full">
        <div class="flex flex-row items-center gap-2 grow">
          <Checkbox v-model="task1" inputId="task1" binary />
          <label for="task1" class="text-sm font-normal text-gray-900 cursor-pointer">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <div class="flex flex-row items-center gap-3 w-full">
        <div class="flex flex-row items-center gap-2 grow">
          <Checkbox v-model="task2" inputId="task2" binary />
          <label for="task2" class="text-sm font-normal text-gray-900 cursor-pointer">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>

      <div class="flex flex-row items-center gap-3 w-full">
        <div class="flex flex-row items-center gap-2 grow">
          <Checkbox v-model="task3" inputId="task3" binary />
          <label for="task3" class="text-sm font-normal text-gray-900 cursor-pointer">Aufgabe3</label>
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

const task1 = ref(false)
const task2 = ref(false)
const task3 = ref(false)
</script>