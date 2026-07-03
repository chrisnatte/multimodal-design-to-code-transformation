<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" class="inline-flex">
      <Avatar :label="state.avatarLabel" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="text-[20px] font-normal">Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'

const state = reactive({
  avatarLabel: 'B'
})
</script>