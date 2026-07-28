<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" shape="circle" size="xlarge" />
    </OverlayBadge>
    <span class="text-xl">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>