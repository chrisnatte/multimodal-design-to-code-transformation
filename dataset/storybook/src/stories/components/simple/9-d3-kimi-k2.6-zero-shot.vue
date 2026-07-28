<template>
  <div class="flex flex-col gap-3 w-64">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="checked1" binary inputId="cb1" variant="filled" />
        <label for="cb1" class="text-sm">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="checked2" binary inputId="cb2" variant="filled" />
        <label for="cb2" class="text-sm">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded />
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="checked3" binary inputId="cb3" variant="filled" />
        <label for="cb3" class="text-sm">Aufgabe3</label>
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