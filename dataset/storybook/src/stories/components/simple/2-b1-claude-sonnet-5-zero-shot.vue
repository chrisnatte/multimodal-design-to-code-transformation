<template>
  <div class="flex items-center gap-4">
    <Avatar
      label="B"
      size="xlarge"
      shape="circle"
      class="relative"
    >
      <OverlayBadge value="8" severity="success">
        <span></span>
      </OverlayBadge>
    </Avatar>
    <span class="text-xl font-normal">{{ username }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'

const username = ref('Benutzername')
</script>