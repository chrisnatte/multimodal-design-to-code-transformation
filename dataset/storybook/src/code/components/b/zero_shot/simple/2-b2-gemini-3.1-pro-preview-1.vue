<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex flex-row items-center gap-4">
      <OverlayBadge value="8" severity="success">
        <Avatar label="B" size="xlarge" shape="circle" />
      </OverlayBadge>
      <span class="text-[20px] font-normal font-sans text-gray-900">
        Benutzername
      </span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
</script>