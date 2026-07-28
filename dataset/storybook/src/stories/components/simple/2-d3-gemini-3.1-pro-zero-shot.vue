<template>
  <div class="flex flex-row items-center gap-4">
    <OverlayBadge value="8" severity="success">
      <Avatar label="B" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="font-sans text-[20px] font-normal text-slate-900">Benutzername</span>
  </div>
</template>

<script setup>
import OverlayBadge from 'primevue/overlaybadge'
import Avatar from 'primevue/avatar'
</script>