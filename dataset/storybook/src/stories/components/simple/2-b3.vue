<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8">
      <Avatar label="B" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="text-[20px] font-normal">Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'

const state = reactive({
  avatar: {
    label: 'B',
    size: 'xlarge',
    shape: 'circle'
  },
  badge: {
    value: '8',
    visible: true
  },
  username: 'Benutzername'
})
</script>