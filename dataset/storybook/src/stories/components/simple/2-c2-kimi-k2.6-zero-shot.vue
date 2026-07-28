<template>
  <div class="flex items-center gap-3">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" shape="circle" size="xlarge" />
    </OverlayBadge>
    <span class="text-lg font-medium text-gray-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>