<template>
  <div class="flex flex-col gap-3 p-4">
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="checked[0]" binary />
        <span class="text-gray-800">Aufgabe1</span>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="checked[1]" binary />
        <span class="text-gray-800">Aufgabe2</span>
      </div>
      <Tag value="Niedrig" severity="success" rounded />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <Checkbox v-model="checked[2]" binary />
        <span class="text-gray-800">Aufgabe3</span>
      </div>
      <Tag value="Mittel" severity="warning" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const checked = ref([false, false, false])
</script>