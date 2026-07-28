<template>
  <div class="flex flex-col gap-3 p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task1" binary inputId="task1" />
        <label for="task1" class="text-gray-700">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task2" binary inputId="task2" />
        <label for="task2" class="text-gray-700">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task3" binary inputId="task3" />
        <label for="task3" class="text-gray-700">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const task1 = ref(false);
const task2 = ref(false);
const task3 = ref(false);
</script>