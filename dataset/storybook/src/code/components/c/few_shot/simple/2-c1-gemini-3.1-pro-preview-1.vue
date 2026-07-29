<template>
  <div class="flex items-center gap-4 p-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="text-2xl text-surface-900">Benutzername</span>
  </div>
</template>

<script setup lang="ts">
  import Avatar from 'primevue/avatar'
  import OverlayBadge from 'primevue/overlaybadge'
</script>