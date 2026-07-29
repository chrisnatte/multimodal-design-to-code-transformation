<template>
  <div class="flex h-fit w-fit flex-col bg-white p-6">
    <div class="flex items-center gap-4">
      <Avatar label="B" size="xlarge" shape="circle">
        <Badge value="8" severity="success" size="small" />
      </Avatar>
      <span class="text-xl text-black">Benutzername</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Avatar from 'primevue/avatar'
  import Badge from 'primevue/badge'
</script>