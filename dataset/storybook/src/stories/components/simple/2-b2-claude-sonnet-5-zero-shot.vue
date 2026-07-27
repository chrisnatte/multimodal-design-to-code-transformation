<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" severity="success" class="inline-flex">
      <Avatar label="B" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="text-xl">{{ username }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';

const username = ref('Benutzername');
</script>