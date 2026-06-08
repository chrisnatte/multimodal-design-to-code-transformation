<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3 w-full">
      <Checkbox v-model="state.aufgabe1" binary inputId="aufgabe1" />
      <label for="aufgabe1" class="text-sm">Aufgabe1</label>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3 w-full">
      <Checkbox v-model="state.aufgabe2" binary inputId="aufgabe2" />
      <label for="aufgabe2" class="text-sm">Aufgabe2</label>
      <Tag value="Niedrig" severity="primary" rounded />
    </div>

    <div class="flex items-center gap-3 w-full">
      <Checkbox v-model="state.aufgabe3" binary inputId="aufgabe3" />
      <label for="aufgabe3" class="text-sm">Aufgabe3</label>
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