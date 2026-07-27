<template>
  <div class="flex flex-col gap-3 w-64">
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="checked1" binary />
        <span class="text-sm">Aufgabe1</span>
      </div>
      <Tag value="Hoch" severity="danger" rounded />
    </div>
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="checked2" binary />
        <span class="text-sm">Aufgabe2</span>
      </div>
      <Tag value="Niedrig" rounded />
    </div>
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox v-model="checked3" binary />
        <span class="text-sm">Aufgabe3</span>
      </div>
      <Tag value="Mittel" severity="warning" rounded />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const checked1 = ref(false)
const checked2 = ref(false)
const checked3 = ref(false)
</script>