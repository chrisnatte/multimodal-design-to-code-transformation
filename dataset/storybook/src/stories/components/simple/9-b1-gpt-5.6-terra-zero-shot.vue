<template>
  <div class="flex w-64 flex-col gap-3">
    <div class="flex items-center gap-3">
      <div class="flex-1">
        <Checkbox v-model="aufgabe1" input-id="aufgabe1" binary />
        <label for="aufgabe1" class="ml-2 text-sm">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex-1">
        <Checkbox v-model="aufgabe2" input-id="aufgabe2" binary />
        <label for="aufgabe2" class="ml-2 text-sm">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="primary" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex-1">
        <Checkbox v-model="aufgabe3" input-id="aufgabe3" binary />
        <label for="aufgabe3" class="ml-2 text-sm">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const aufgabe1 = ref(false)
const aufgabe2 = ref(false)
const aufgabe3 = ref(false)
</script>