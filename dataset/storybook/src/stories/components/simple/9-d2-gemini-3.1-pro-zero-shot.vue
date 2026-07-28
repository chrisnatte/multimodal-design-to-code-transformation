<template>
  <div class="flex flex-col w-[256px] gap-3">
    <!-- Row 1 -->
    <div class="flex items-center w-full">
      <div class="flex items-center gap-2 grow">
        <Checkbox v-model="task1" inputId="task1" binary variant="filled" />
        <label for="task1" class="text-sm font-normal text-surface-900 dark:text-surface-0 cursor-pointer">
          Aufgabe1
        </label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <!-- Row 2 -->
    <div class="flex items-center w-full">
      <div class="flex items-center gap-2 grow">
        <Checkbox v-model="task2" inputId="task2" binary variant="filled" />
        <label for="task2" class="text-sm font-normal text-surface-900 dark:text-surface-0 cursor-pointer">
          Aufgabe2
        </label>
      </div>
      <Tag value="Niedrig" severity="success" rounded />
    </div>

    <!-- Row 3 -->
    <div class="flex items-center w-full">
      <div class="flex items-center gap-2 grow">
        <Checkbox v-model="task3" inputId="task3" binary variant="filled" />
        <label for="task3" class="text-sm font-normal text-surface-900 dark:text-surface-0 cursor-pointer">
          Aufgabe3
        </label>
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