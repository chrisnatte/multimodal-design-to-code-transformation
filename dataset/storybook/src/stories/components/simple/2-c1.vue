<template>
  <div class="w-[288px] h-[104px] bg-[#e3e3e3] flex items-center px-6">
    <div class="relative flex items-center gap-4">
      <Avatar label="B" shape="circle" class="!w-14 !h-14 !text-4xl !bg-[#cfd4db] !text-[#4a5568]" />
      <Badge value="8" class="!absolute !-top-2 !left-12 !bg-[#10b981] !text-white !min-w-6 !h-6 !text-sm !font-medium" />
      <span class="text-[32px] leading-none text-[#111827] font-normal">{{ state.username }}</span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const state = reactive({
  username: 'Benutzername'
})
</script>