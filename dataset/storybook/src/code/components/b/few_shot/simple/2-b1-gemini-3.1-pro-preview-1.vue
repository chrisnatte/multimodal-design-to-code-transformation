<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex items-center gap-4">
      <OverlayBadge value="8" severity="primary">
        <Avatar label="B" size="xlarge" shape="circle" />
      </OverlayBadge>
      <span class="text-xl text-gray-900">Benutzername</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
</script>