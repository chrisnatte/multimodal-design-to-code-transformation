<template>
  <div class="flex w-fit items-center gap-4 bg-white p-6">
    <div class="relative">
      <Avatar label="B" size="xlarge" shape="circle" />
      <Badge value="8" severity="success" class="absolute -right-2 -top-2 !min-w-[21px] !h-[21px] !rounded-full !text-[10.5px]" />
    </div>
    <span class="text-xl text-black">Benutzername</span>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>