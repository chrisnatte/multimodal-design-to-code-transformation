<template>
  <div class="flex items-center gap-4">
    <OverlayBadge v-if="state.showBadge" :value="state.badgeValue">
      <Avatar :label="state.avatarLabel" size="xlarge" shape="circle" />
    </OverlayBadge>
    <Avatar v-else :label="state.avatarLabel" size="xlarge" shape="circle" />
    <span class="text-[20px] font-normal">Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'

const state = reactive({
  avatarLabel: 'B',
  showBadge: true,
  badgeValue: '8'
})
</script>