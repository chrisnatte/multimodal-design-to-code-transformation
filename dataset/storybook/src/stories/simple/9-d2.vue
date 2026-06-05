<template>
  <div class="w-[304px] p-6 bg-white">
    <div class="flex flex-col gap-3">
      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.aufgabe1" inputId="aufgabe1" binary variant="filled" />
          <label for="aufgabe1" class="text-[28px] leading-none text-slate-600">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.aufgabe2" inputId="aufgabe2" binary variant="filled" />
          <label for="aufgabe2" class="text-[28px] leading-none text-slate-600">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>

      <div class="flex items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <Checkbox v-model="state.aufgabe3" inputId="aufgabe3" binary variant="filled" />
          <label for="aufgabe3" class="text-[28px] leading-none text-slate-600">Aufgabe3</label>
        </div>
        <Tag value="Mittel" severity="warn" rounded />
      </div>
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