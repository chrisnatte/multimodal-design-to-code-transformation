<template>
  <div class="flex flex-col gap-3 w-64">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="checked1" binary inputId="aufgabe1" />
        <label for="aufgabe1" class="text-sm">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="checked2" binary inputId="aufgabe2" />
        <label for="aufgabe2" class="text-sm">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" rounded />
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="checked3" binary inputId="aufgabe3" />
        <label for="aufgabe3" class="text-sm">Aufgabe3</label>
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