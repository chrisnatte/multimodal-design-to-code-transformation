<template>
  <div class="flex items-center gap-4 w-fit h-fit">
    <OverlayBadge value="8">
      <Avatar label="B" size="xlarge" shape="circle" style="background-color: #e2e8f0;" />
    </OverlayBadge>
    <span class="text-xl">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>