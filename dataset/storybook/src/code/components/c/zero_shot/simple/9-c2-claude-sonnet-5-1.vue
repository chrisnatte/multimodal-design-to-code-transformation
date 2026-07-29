<template>
  <div class="flex flex-col gap-3 p-4">
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task1" binary inputId="task1" />
        <label for="task1" class="text-gray-700">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" class="!bg-red-100 !text-red-500"></Tag>
    </div>

    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task2" binary inputId="task2" />
        <label for="task2" class="text-gray-700">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" class="!bg-green-100 !text-green-500"></Tag>
    </div>

    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-2">
        <Checkbox v-model="task3" binary inputId="task3" />
        <label for="task3" class="text-gray-700">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" class="!bg-orange-100 !text-orange-500"></Tag>
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