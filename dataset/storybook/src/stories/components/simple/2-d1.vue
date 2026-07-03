<template>
  <div class="flex items-center gap-4 p-6 bg-[#f5f5f5]">
    <Badge :value="state.badge" class="p-overlay-badge">
      <Avatar
        :label="state.avatarLabel"
        shape="circle"
        size="xlarge"
        class="bg-[#cfd6df] text-[#3f4b5f] font-normal"
      />
    </Badge>
    <span class="text-[32px] leading-none font-normal text-black">Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const state = reactive({
  avatarLabel: 'B',
  badge: '8'
})
</script>