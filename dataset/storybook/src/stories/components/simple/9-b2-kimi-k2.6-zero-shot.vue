<template>
  <div class="flex flex-col gap-3 w-64">
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="checked1" binary variant="filled" inputId="task1" />
        <label for="task1">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="checked2" binary variant="filled" inputId="task2" />
        <label for="task2">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" rounded />
    </div>
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="checked3" binary variant="filled" inputId="task3" />
        <label for="task3">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
</script>