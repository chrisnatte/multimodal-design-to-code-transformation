<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <Checkbox v-model="form.aufgabe1" binary />
      <span>Aufgabe1</span>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3">
      <Checkbox v-model="form.aufgabe2" binary />
      <span>Aufgabe2</span>
      <Tag value="Niedrig" rounded />
    </div>

    <div class="flex items-center gap-3">
      <Checkbox v-model="form.aufgabe3" binary />
      <span>Aufgabe3</span>
      <Tag value="Mittel" severity="warn" rounded />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const form = reactive({
  aufgabe1: false,
  aufgabe2: false,
  aufgabe3: false
})
</script>