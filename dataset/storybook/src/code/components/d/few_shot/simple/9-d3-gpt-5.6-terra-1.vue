<template>
  <div class="w-[304px] bg-white p-6">
    <div class="flex flex-col gap-3">
      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="taskOne" input-id="task-one" binary variant="filled" />
          <label for="task-one" class="text-sm">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="taskTwo" input-id="task-two" binary variant="filled" />
          <label for="task-two" class="text-sm">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="taskThree" input-id="task-three" binary variant="filled" />
          <label for="task-three" class="text-sm">Aufgabe3</label>
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

const taskOne = ref(false)
const taskTwo = ref(false)
const taskThree = ref(false)
</script>