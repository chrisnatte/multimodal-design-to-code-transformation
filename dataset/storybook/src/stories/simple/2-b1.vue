<template>
  <div class="flex items-center gap-4">
    <Badge value="8" severity="primary" class="p-overlay-badge">
      <Avatar label="B" shape="circle" size="xlarge" />
    </Badge>
    <span class="text-[20px] font-normal">Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const state = reactive({
  avatarLabel: 'B',
  showBadge: true,
  badgeValue: '8',
  username: 'Benutzername'
})
</script>