<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" severity="success" class="inline-flex">
      <Avatar label="B" size="xlarge" shape="circle" style="background-color: #e2e8f0; color: #64748b" />
    </OverlayBadge>
    <span class="text-xl">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>