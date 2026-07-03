<template>
  <div class="flex items-center gap-4 p-6 bg-white">
    <OverlayBadge value="8" class="inline-flex">
      <Avatar
        label="B"
        size="xlarge"
        shape="circle"
        class="bg-slate-200 text-slate-700"
      />
    </OverlayBadge>
    <span class="text-[34px] leading-none font-normal text-black">Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';

const state = reactive({
  avatarLabel: 'B',
  badgeValue: '8',
  username: 'Benutzername'
});
</script>