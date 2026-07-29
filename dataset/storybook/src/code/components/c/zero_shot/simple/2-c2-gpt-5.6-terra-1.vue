<template>
  <div class="flex items-center gap-3 p-6">
    <div class="relative inline-flex">
      <Avatar
        label="B"
        shape="circle"
        aria-label="Benutzername avatar"
        class="bg-slate-200 text-slate-700"
        style="width: 3.5rem; height: 3.5rem; font-size: 1.5rem"
      />
      <Badge
        value="8"
        severity="success"
        class="absolute -right-1 -top-1"
      />
    </div>
    <span class="text-lg text-slate-950">Benutzername</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const username = ref('Benutzername')
</script>