<template>
  <div class="flex items-center gap-3 p-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="text-lg text-black">Benutzername</span>
  </div>
</template>

<script setup lang="ts">
  import Avatar from 'primevue/avatar'
  import OverlayBadge from 'primevue/overlaybadge'
</script>