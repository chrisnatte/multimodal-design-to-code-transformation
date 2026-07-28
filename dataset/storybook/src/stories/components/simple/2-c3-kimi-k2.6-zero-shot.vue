<template>
  <div class="flex items-center gap-3">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" shape="circle" size="large" class="bg-slate-200 text-slate-700" />
    </OverlayBadge>
    <span class="text-xl text-gray-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>