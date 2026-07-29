<template>
  <div class="flex flex-col p-6 bg-white">
    <div class="flex items-center gap-4">
      <div class="relative inline-block">
        <Avatar :label="avatarLabel" size="xlarge" shape="circle" class="bg-blue-100" />
        <Badge :value="badgeValue" severity="success" class="absolute -top-1 -right-1"></Badge>
      </div>
      <span class="text-xl font-normal">{{ username }}</span>
    </div>
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