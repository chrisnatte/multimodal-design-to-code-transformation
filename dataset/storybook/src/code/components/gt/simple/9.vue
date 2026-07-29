<template>
  <ul class="flex w-64 flex-col gap-3">
    <li class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <Checkbox input-id="task1" binary />
        <label for="task1">Aufgabe1</label>
      </div>

      <Tag value="Hoch" severity="danger" rounded class="w-fit" />
    </li>

    <li class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <Checkbox input-id="task2" binary />
        <label for="task2">Aufgabe2</label>
      </div>

      <Tag value="Niedrig" severity="success" rounded class="w-fit" />
    </li>

    <li class="flex items-center justify-between gap-3">
      <div class="flex items-center gap-2">
        <Checkbox input-id="task3" binary />
        <label for="task3">Aufgabe3</label>
      </div>

      <Tag value="Mittel" severity="warn" rounded class="w-fit" />
    </li>
  </ul>
</template>

<script setup lang="ts">
  import Checkbox from 'primevue/checkbox'
  import Tag from 'primevue/tag'
</script>
