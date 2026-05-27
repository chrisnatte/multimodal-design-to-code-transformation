<template>
  <div class="w-[306px] h-[138px] bg-white p-6">
    <div class="flex flex-col gap-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <Checkbox v-model="state.tasks.aufgabe1" :binary="true" inputId="aufgabe1" />
          <label for="aufgabe1" class="text-2xl text-slate-600 leading-none">Aufgabe1</label>
        </div>
        <Tag value="Hoch" severity="danger" rounded />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <Checkbox v-model="state.tasks.aufgabe2" :binary="true" inputId="aufgabe2" />
          <label for="aufgabe2" class="text-2xl text-slate-600 leading-none">Aufgabe2</label>
        </div>
        <Tag value="Niedrig" severity="success" rounded />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center gap-3">
          <Checkbox v-model="state.tasks.aufgabe3" :binary="true" inputId="aufgabe3" />
          <label for="aufgabe3" class="text-2xl text-slate-600 leading-none">Aufgabe3</label>
        </div>
        <Tag value="Mittel" severity="warning" rounded />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
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