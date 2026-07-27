<template>
  <div class="flex flex-col gap-3 w-[256px]">
    <div class="flex flex-row items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task1" inputId="task1" binary />
        <label for="task1" class="text-[14px] font-normal font-sans text-gray-900 cursor-pointer">Aufgabe1</label>
      </div>
      <Tag severity="danger" rounded value="Hoch" />
    </div>

    <div class="flex flex-row items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task2" inputId="task2" binary />
        <label for="task2" class="text-[14px] font-normal font-sans text-gray-900 cursor-pointer">Aufgabe2</label>
      </div>
      <Tag severity="success" rounded value="Niedrig" />
    </div>

    <div class="flex flex-row items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task3" inputId="task3" binary />
        <label for="task3" class="text-[14px] font-normal font-sans text-gray-900 cursor-pointer">Aufgabe3</label>
      </div>
      <Tag severity="warn" rounded value="Mittel" />
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