<template>
  <div class="flex flex-col gap-3 w-64">
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox inputId="task1" v-model="checked1" :binary="true" />
        <label for="task1" class="text-sm">Aufgabe1</label>
      </div>
      <Tag value="Hoch" severity="danger" rounded></Tag>
    </div>
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox inputId="task2" v-model="checked2" :binary="true" />
        <label for="task2" class="text-sm">Aufgabe2</label>
      </div>
      <Tag value="Niedrig" severity="success" rounded></Tag>
    </div>
    <div class="flex items-center gap-3 w-full">
      <div class="flex items-center gap-2 flex-1">
        <Checkbox inputId="task3" v-model="checked3" :binary="true" />
        <label for="task3" class="text-sm">Aufgabe3</label>
      </div>
      <Tag value="Mittel" severity="warn" rounded></Tag>
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