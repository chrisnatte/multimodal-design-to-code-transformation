<template>
  <div class="flex items-center gap-4">
    <div class="relative inline-flex">
      <Avatar
        label="B"
        size="xlarge"
        shape="circle"
        aria-label="Benutzeravatar"
        class="bg-slate-200 text-slate-700"
      />
      <Badge
        value="8"
        severity="success"
        class="absolute -right-2 -top-2 rounded-full"
      />
    </div>
    <span class="text-xl font-normal text-black">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>