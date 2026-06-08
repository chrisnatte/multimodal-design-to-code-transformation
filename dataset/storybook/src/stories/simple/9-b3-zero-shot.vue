<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2">
        <Checkbox v-model="state.aufgabe1" binary inputId="aufgabe1" variant="filled" />
        <label for="aufgabe1" class="text-sm">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2">
        <Checkbox v-model="state.aufgabe2" binary inputId="aufgabe2" variant="filled" />
        <label for="aufgabe2" class="text-sm">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2">
        <Checkbox v-model="state.aufgabe3" binary inputId="aufgabe3" variant="filled" />
        <label for="aufgabe3" class="text-sm">Aufgabe3</label>
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