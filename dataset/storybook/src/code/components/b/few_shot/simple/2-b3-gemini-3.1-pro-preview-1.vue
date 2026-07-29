<template>
  <div class="flex flex-col p-6">
    <div class="flex items-center gap-4">
      <OverlayBadge value="8">
        <Avatar label="B" size="xlarge" shape="circle" />
      </OverlayBadge>
      <span class="text-xl">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
</script>