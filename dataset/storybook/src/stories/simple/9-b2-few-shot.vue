<template>
  <div class="flex flex-col gap-3">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="form.aufgabe1" inputId="aufgabe1" binary variant="filled" />
        <label for="aufgabe1">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="form.aufgabe2" inputId="aufgabe2" binary variant="filled" />
        <label for="aufgabe2">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" rounded />
    </div>

    <div class="flex items-center gap-3">
      <div class="flex items-center gap-3 flex-1">
        <Checkbox v-model="form.aufgabe3" inputId="aufgabe3" binary variant="filled" />
        <label for="aufgabe3">Aufgabe3</label>
      </div>
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