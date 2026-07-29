<template>
  <div class="flex w-fit flex-col p-6">
    <div class="flex items-center gap-4">
      <OverlayBadge value="8" severity="success">
        <Avatar label="B" size="xlarge" shape="circle" aria-label="Benutzername" />
      </OverlayBadge>
      <span class="text-xl text-surface-950">Benutzername</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
</script>