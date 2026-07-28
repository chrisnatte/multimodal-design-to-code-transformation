<template>
  <div class="inline-flex items-center gap-4">
    <OverlayBadge value="8" severity="success" class="inline-flex">
      <Avatar label="B" shape="circle" size="xlarge" />
    </OverlayBadge>
    <span class="text-xl text-gray-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>