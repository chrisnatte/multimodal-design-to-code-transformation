<template>
  <div class="flex flex-col gap-3 w-64">
    <!-- Row 1 -->
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task1" inputId="task1" :binary="true" />
        <label for="task1" class="font-normal text-sm cursor-pointer text-gray-800">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded></Tag>
    </div>

    <!-- Row 2 -->
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task2" inputId="task2" :binary="true" />
        <label for="task2" class="font-normal text-sm cursor-pointer text-gray-800">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded></Tag>
    </div>

    <!-- Row 3 -->
    <div class="flex items-center justify-between w-full">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task3" inputId="task3" :binary="true" />
        <label for="task3" class="font-normal text-sm cursor-pointer text-gray-800">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded></Tag>
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