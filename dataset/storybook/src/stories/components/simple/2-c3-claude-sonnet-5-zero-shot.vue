<template>
  <div class="flex items-center gap-3 p-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" shape="circle" size="large" />
    </OverlayBadge>
    <span class="text-base text-gray-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>