<template>
  <div class="flex flex-col gap-3 w-64">
    <!-- Row 1 -->
    <div class="flex items-center gap-3 w-full justify-between">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="aufgabe1" binary inputId="aufgabe1" />
        <label for="aufgabe1" class="text-sm font-normal cursor-pointer select-none">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <!-- Row 2 -->
    <div class="flex items-center gap-3 w-full justify-between">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="aufgabe2" binary inputId="aufgabe2" />
        <label for="aufgabe2" class="text-sm font-normal cursor-pointer select-none">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded />
    </div>

    <!-- Row 3 -->
    <div class="flex items-center gap-3 w-full justify-between">
      <div class="flex items-center gap-2 flex-grow">
        <Checkbox v-model="aufgabe3" binary inputId="aufgabe3" />
        <label for="aufgabe3" class="text-sm font-normal cursor-pointer select-none">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const aufgabe1 = ref(false);
const aufgabe2 = ref(false);
const aufgabe3 = ref(false);
</script>