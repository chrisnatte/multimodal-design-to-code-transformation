<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2">
        <Checkbox v-model="state.aufgabe1" binary />
        <span class="text-sm">Aufgabe1</span>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2">
        <Checkbox v-model="state.aufgabe2" binary />
        <span class="text-sm">Aufgabe2</span>
      </div>
      <Tag value="Niedrig" rounded />
    </div>

    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2">
        <Checkbox v-model="state.aufgabe3" binary />
        <span class="text-sm">Aufgabe3</span>
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