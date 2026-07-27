<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="text-xl font-normal">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>