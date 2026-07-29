<template>
  <div class="p-6 bg-white flex flex-col w-[304px]">
    <div class="flex flex-col gap-3 w-full">
      <!-- Row 1 -->
      <div class="flex items-center w-full">
        <div class="flex items-center gap-2 flex-1">
          <Checkbox v-model="task1" inputId="task1" binary variant="filled" />
          <label for="task1" class="text-sm text-slate-700 cursor-pointer select-none">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <!-- Row 2 -->
      <div class="flex items-center w-full">
        <div class="flex items-center gap-2 flex-1">
          <Checkbox v-model="task2" inputId="task2" binary variant="filled" />
          <label for="task2" class="text-sm text-slate-700 cursor-pointer select-none">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>

      <!-- Row 3 -->
      <div class="flex items-center w-full">
        <div class="flex items-center gap-2 flex-1">
          <Checkbox v-model="task3" inputId="task3" binary variant="filled" />
          <label for="task3" class="text-sm text-slate-700 cursor-pointer select-none">Aufgabe3</label>
        </div>
        <Tag value="Mittel" severity="warn" rounded />
      </div>
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