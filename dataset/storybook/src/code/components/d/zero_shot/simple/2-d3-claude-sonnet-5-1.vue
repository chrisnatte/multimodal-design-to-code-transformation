<template>
  <div class="bg-white p-6 inline-block">
    <div class="flex items-center gap-4">
      <OverlayBadge value="8" severity="success" class="inline-flex">
        <Avatar :label="userLabel" size="xlarge" shape="circle" style="background-color: #e2e8f0; color: #64748b" />
      </OverlayBadge>
      <span class="text-xl text-gray-900">{{ username }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';

const userLabel = ref('B');
const username = ref('Benutzername');
</script>