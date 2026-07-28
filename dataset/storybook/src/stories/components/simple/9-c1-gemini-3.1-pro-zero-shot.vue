<template>
  <div class="flex flex-col gap-4 p-6 w-72 bg-white">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task1" inputId="task1" :binary="true" />
        <label for="task1" class="text-gray-700 text-base">Aufgabe1</label>
      </div>
      <Badge value="Hoch" severity="danger" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task2" inputId="task2" :binary="true" />
        <label for="task2" class="text-gray-700 text-base">Aufgabe2</label>
      </div>
      <Badge value="Niedrig" severity="success" />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="task3" inputId="task3" :binary="true" />
        <label for="task3" class="text-gray-700 text-base">Aufgabe3</label>
      </div>
      <Badge value="Mittel" severity="warning" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Badge from 'primevue/badge';

const task1 = ref(false);
const task2 = ref(false);
const task3 = ref(false);
</script>