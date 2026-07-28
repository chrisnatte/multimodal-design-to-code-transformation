<template>
  <div class="flex items-center gap-4 p-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" shape="circle" size="xlarge" style="background-color: #e2e8f0; color: #334155" />
    </OverlayBadge>
    <span class="text-xl text-slate-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>