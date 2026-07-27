<template>
  <div class="flex items-center gap-4">
    <div class="relative inline-flex">
      <Avatar :label="avatarLabel" size="xlarge" shape="circle" />
      <Badge :value="badgeValue" severity="success" class="absolute -top-1 -right-1"></Badge>
    </div>
    <span class="text-xl">{{ username }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';

const avatarLabel = ref('B');
const badgeValue = ref('8');
const username = ref('Benutzername');
</script>