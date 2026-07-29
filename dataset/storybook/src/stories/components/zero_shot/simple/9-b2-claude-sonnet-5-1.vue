<template>
  <div class="bg-white p-6 inline-block">
    <div class="flex flex-col gap-3 w-64">
      <div class="flex items-center gap-3 w-full">
        <div class="flex items-center gap-2 flex-1">
          <Checkbox v-model="task1" binary inputId="task1" />
          <label for="task1">Aufgabe1</label>
        </div>
        <Tag severity="danger" value="Hoch" rounded />
      </div>
      <div class="flex items-center gap-3 w-full">
        <div class="flex items-center gap-2 flex-1">
          <Checkbox v-model="task2" binary inputId="task2" />
          <label for="task2">Aufgabe2</label>
        </div>
        <Tag severity="success" value="Niedrig" rounded />
      </div>
      <div class="flex items-center gap-3 w-full">
        <div class="flex items-center gap-2 flex-1">
          <Checkbox v-model="task3" binary inputId="task3" />
          <label for="task3">Aufgabe3</label>
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

const task1 = ref(false);
const task2 = ref(false);
const task3 = ref(false);
</script>