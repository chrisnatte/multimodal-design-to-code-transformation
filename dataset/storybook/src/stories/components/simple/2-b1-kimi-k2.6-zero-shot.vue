<template>
  <div class="flex items-center gap-4 w-fit">
    <OverlayBadge :value="badgeValue" severity="primary">
      <Avatar :label="avatarLabel" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span class="text-xl">{{ username }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';

const avatarLabel = ref('B');
const badgeValue = ref('8');
const username = ref('Benutzername');
</script>