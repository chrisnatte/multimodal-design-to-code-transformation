<template>
  <div class="flex flex-col gap-3 p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="checked1" binary inputId="aufgabe1" />
        <label for="aufgabe1">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="checked2" binary inputId="aufgabe2" />
        <label for="aufgabe2">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="checked3" binary inputId="aufgabe3" />
        <label for="aufgabe3">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" />
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