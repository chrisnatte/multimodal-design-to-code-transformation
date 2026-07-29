<template>
  <div class="flex flex-col bg-white p-6">
    <div class="flex items-center gap-4">
      <OverlayBadge value="8" severity="success">
        <Avatar label="B" size="xlarge" shape="circle" />
      </OverlayBadge>
      <span class="text-xl text-black">Benutzername</span>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Avatar from 'primevue/avatar'
  import OverlayBadge from 'primevue/overlaybadge'
</script>