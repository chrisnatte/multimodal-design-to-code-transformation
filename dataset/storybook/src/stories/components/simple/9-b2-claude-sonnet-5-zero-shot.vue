<template>
  <div class="flex flex-col gap-3 w-64">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task1Checked" inputId="task1" binary variant="filled" />
        <label for="task1">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task2Checked" inputId="task2" binary variant="filled" />
        <label for="task2">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="task3Checked" inputId="task3" binary variant="filled" />
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

const task1Checked = ref(false);
const task2Checked = ref(false);
const task3Checked = ref(false);
</script>