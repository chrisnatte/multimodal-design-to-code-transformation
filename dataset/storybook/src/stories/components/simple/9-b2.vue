<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="state.aufgabe1" inputId="aufgabe1" binary variant="filled" />
        <label for="aufgabe1" class="text-sm">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="state.aufgabe2" inputId="aufgabe2" binary variant="filled" />
        <label for="aufgabe2" class="text-sm">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="state.aufgabe3" inputId="aufgabe3" binary variant="filled" />
        <label for="aufgabe3" class="text-sm">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const state = reactive({
  aufgabe1: false,
  aufgabe2: false,
  aufgabe3: false
});
</script>