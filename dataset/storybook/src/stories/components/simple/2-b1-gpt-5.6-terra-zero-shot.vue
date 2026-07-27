<template>
  <div class="flex items-center gap-4">
    <div class="relative">
      <Avatar
        label="B"
        shape="circle"
        class="!h-14 !w-14 !bg-[#e2e8f0] !text-[28px] !font-normal !text-surface-700"
      />
      <Badge
        value="8"
        severity="success"
        class="absolute -right-2 -top-2 !min-h-[21px] !min-w-[21px] !text-[10.5px]"
      />
    </div>
    <span class="text-[20px] font-normal">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>