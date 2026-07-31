<template>
  <div class="flex gap-4 items-center">
    <OverlayBadge value="8">
      <Avatar
        label="B"
        size="xlarge"
        shape="circle"
       />
    </OverlayBadge>
    <span class="text-xl">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
</script>
