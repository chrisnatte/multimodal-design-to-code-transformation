<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-center gap-4">
      <div class="relative">
        <Avatar label="B" size="xlarge" shape="circle" />
        <Badge
          value="8"
          class="absolute -right-2 -top-2 rounded-full"
          severity="success"
        />
      </div>
      <span class="text-xl font-normal text-surface-950">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>