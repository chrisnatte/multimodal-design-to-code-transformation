<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-col gap-3 w-64">
      <div class="flex items-center gap-3">
        <div class="flex-grow flex items-center gap-2">
          <Checkbox v-model="task1" binary inputId="task1" />
          <label for="task1" class="text-sm">Aufgabe1</label>
        </div>
        <Tag severity="danger" rounded value="Hoch" />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex-grow flex items-center gap-2">
          <Checkbox v-model="task2" binary inputId="task2" />
          <label for="task2" class="text-sm">Aufgabe2</label>
        </div>
        <Tag severity="success" rounded value="Niedrig" />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex-grow flex items-center gap-2">
          <Checkbox v-model="task3" binary inputId="task3" />
          <label for="task3" class="text-sm">Aufgabe3</label>
        </div>
        <Tag severity="warn" rounded value="Mittel" />
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