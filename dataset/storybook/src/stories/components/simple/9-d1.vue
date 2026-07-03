<template>
  <div class="flex flex-col gap-3 p-4 w-[304px] bg-white">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="state.aufgabe1" binary inputId="aufgabe1" />
        <label for="aufgabe1" class="text-sm text-slate-700 cursor-pointer">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="state.aufgabe2" binary inputId="aufgabe2" />
        <label for="aufgabe2" class="text-sm text-slate-700 cursor-pointer">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded />
    </div>

    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="state.aufgabe3" binary inputId="aufgabe3" />
        <label for="aufgabe3" class="text-sm text-slate-700 cursor-pointer">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const state = reactive({
  aufgabe1: false,
  aufgabe2: false,
  aufgabe3: false
})
</script>