<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" size="xlarge" shape="circle" style="background-color: #e2e8f0; color: #334155" />
    </OverlayBadge>
    <span class="text-[20px] text-gray-900 font-normal">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>