<template>
  <div class="w-64 h-26 bg-[#f5f5f5] p-6 flex items-center">
    <div class="flex items-center gap-4">
      <OverlayBadge :value="state.notifications" severity="success">
        <Avatar label="B" size="xlarge" shape="circle" class="text-[#3b4a61] bg-[#d5dbe2]" />
      </OverlayBadge>
      <span class="text-3xl text-[#111827] leading-none">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'

const state = reactive({
  notifications: 8
})
</script>