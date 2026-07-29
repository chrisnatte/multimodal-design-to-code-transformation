<template>
  <div class="bg-white p-6 flex flex-col w-[304px]">
    <div class="flex flex-col gap-3 w-full">
      
      <!-- Row 1 -->
      <div class="flex flex-row items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="task1" inputId="task1" :binary="true" />
          <label for="task1" class="text-sm text-slate-700 cursor-pointer select-none">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <!-- Row 2 -->
      <div class="flex flex-row items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="task2" inputId="task2" :binary="true" />
          <label for="task2" class="text-sm text-slate-700 cursor-pointer select-none">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>

      <!-- Row 3 -->
      <div class="flex flex-row items-center justify-between w-full">
        <div class="flex items-center gap-2">
          <Checkbox v-model="task3" inputId="task3" :binary="true" />
          <label for="task3" class="text-sm text-slate-700 cursor-pointer select-none">Aufgabe3</label>
        </div>
        <Tag value="Mittel" severity="warning" rounded />
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