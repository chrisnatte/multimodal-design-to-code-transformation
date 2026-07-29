<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex items-center gap-4">
      <OverlayBadge :value="badgeValue" severity="success" class="inline-flex">
        <Avatar :label="userInitial" size="xlarge" shape="circle" style="background-color: #e2e8f0; color: #64748b" />
      </OverlayBadge>
      <span class="text-xl text-gray-900">{{ username }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';

const userInitial = ref('B');
const username = ref('Benutzername');
const badgeValue = ref('8');
</script>