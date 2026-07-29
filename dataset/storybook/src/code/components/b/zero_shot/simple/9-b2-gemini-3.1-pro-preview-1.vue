<template>
  <div class="p-6 bg-white flex flex-col w-[304px]">
    <div class="flex flex-col gap-3">
      <div class="flex flex-row items-center gap-3 w-full">
        <div class="flex items-center gap-2 flex-grow">
          <Checkbox v-model="selectedTasks" inputId="task1" value="Aufgabe1" variant="filled" />
          <label for="task1" class="text-sm font-normal font-sans text-gray-900">Aufgabe1</label>
        </div>
        <Tag severity="danger" value="Hoch" rounded />
      </div>

      <div class="flex flex-row items-center gap-3 w-full">
        <div class="flex items-center gap-2 flex-grow">
          <Checkbox v-model="selectedTasks" inputId="task2" value="Aufgabe2" variant="filled" />
          <label for="task2" class="text-sm font-normal font-sans text-gray-900">Aufgabe2</label>
        </div>
        <Tag severity="success" value="Niedrig" rounded />
      </div>

      <div class="flex flex-row items-center gap-3 w-full">
        <div class="flex items-center gap-2 flex-grow">
          <Checkbox v-model="selectedTasks" inputId="task3" value="Aufgabe3" variant="filled" />
          <label for="task3" class="text-sm font-normal font-sans text-gray-900">Aufgabe3</label>
        </div>
        <Tag severity="warn" value="Mittel" rounded />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const selectedTasks = ref([]);
</script>