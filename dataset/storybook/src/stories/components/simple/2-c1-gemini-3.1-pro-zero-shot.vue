<template>
  <div class="flex items-center gap-4 p-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" size="xlarge" shape="circle" class="bg-slate-200 text-slate-700 text-2xl" />
    </OverlayBadge>
    <span class="text-2xl text-gray-900">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>