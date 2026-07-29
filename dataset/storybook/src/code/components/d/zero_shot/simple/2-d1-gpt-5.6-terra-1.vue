<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-center gap-4">
      <div class="relative">
        <Avatar label="B" shape="circle" size="xlarge" class="bg-slate-200 text-[28px] text-slate-700" />
        <Badge value="8" severity="success" class="absolute -right-2 -top-2" />
      </div>
      <span class="text-[20px] font-normal text-black">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>