<template>
  <div class="flex flex-col gap-3 w-64">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox inputId="aufgabe1" v-model="checked1" binary variant="filled" />
        <label for="aufgabe1" class="text-sm text-gray-800">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded></Tag>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox inputId="aufgabe2" v-model="checked2" binary variant="filled" />
        <label for="aufgabe2" class="text-sm text-gray-800">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded></Tag>
    </div>
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox inputId="aufgabe3" v-model="checked3" binary variant="filled" />
        <label for="aufgabe3" class="text-sm text-gray-800">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded></Tag>
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