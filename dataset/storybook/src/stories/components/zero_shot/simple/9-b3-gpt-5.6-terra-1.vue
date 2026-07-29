<template>
  <div class="flex w-[304px] flex-col bg-white p-6">
    <div class="flex w-64 flex-col gap-3">
      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="aufgabe1" input-id="aufgabe1" binary variant="filled" />
          <label for="aufgabe1" class="text-sm font-normal">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="aufgabe2" input-id="aufgabe2" binary variant="filled" />
          <label for="aufgabe2" class="text-sm font-normal">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>

      <div class="flex items-center gap-3">
        <div class="flex flex-1 items-center gap-2">
          <Checkbox v-model="aufgabe3" input-id="aufgabe3" binary variant="filled" />
          <label for="aufgabe3" class="text-sm font-normal">Aufgabe3</label>
        </div>
        <Tag value="Mittel" severity="warn" rounded />
      </div>
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