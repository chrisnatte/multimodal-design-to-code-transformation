<template>
  <div class="flex items-center gap-4 p-6">
    <div class="relative">
      <Avatar label="B" size="xlarge" shape="circle" />
      <Badge
        value="8"
        severity="success"
        class="absolute -right-2 -top-2 flex !h-5 !min-w-5 items-center justify-center !rounded-full !p-0 !text-xs"
      />
    </div>
    <span class="text-lg text-black">Benutzername</span>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>