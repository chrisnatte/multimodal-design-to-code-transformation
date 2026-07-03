<template>
  <Card class="w-[305px]">
    <template #content>
      <div class="flex flex-col gap-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Checkbox v-model="state.tasks.aufgabe1" binary inputId="aufgabe1" />
            <label for="aufgabe1" class="text-slate-700">Aufgabe1</label>
          </div>
          <Tag value="Hoch" severity="danger" />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Checkbox v-model="state.tasks.aufgabe2" binary inputId="aufgabe2" />
            <label for="aufgabe2" class="text-slate-700">Aufgabe2</label>
          </div>
          <Tag value="Niedrig" severity="success" />
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Checkbox v-model="state.tasks.aufgabe3" binary inputId="aufgabe3" />
            <label for="aufgabe3" class="text-slate-700">Aufgabe3</label>
          </div>
          <Tag value="Mittel" severity="warn" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const state = reactive({
  tasks: {
    aufgabe1: false,
    aufgabe2: false,
    aufgabe3: false
  }
})
</script>