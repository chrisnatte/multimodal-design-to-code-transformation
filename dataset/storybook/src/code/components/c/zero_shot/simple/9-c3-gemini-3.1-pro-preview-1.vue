<template>
  <div class="flex flex-col gap-5 p-6 w-80 bg-white">
    <!-- Task 1 -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task1" inputId="task1" binary />
        <label for="task1" class="text-slate-600 text-base cursor-pointer select-none">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <!-- Task 2 -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task2" inputId="task2" binary />
        <label for="task2" class="text-slate-600 text-base cursor-pointer select-none">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded />
    </div>

    <!-- Task 3 -->
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task3" inputId="task3" binary />
        <label for="task3" class="text-slate-600 text-base cursor-pointer select-none">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded />
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