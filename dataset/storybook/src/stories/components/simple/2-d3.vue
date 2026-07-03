<template>
  <div class="flex items-center gap-4 p-6 bg-white w-fit">
    <div class="relative inline-flex">
      <Avatar label="B" shape="circle" size="xlarge" class="bg-slate-200 text-slate-700" />
      <Badge
        value="8"
        class="absolute -top-1 -right-1 !rounded-full !min-w-5 !h-5 !text-[10.5px] !font-bold !leading-5 !flex !items-center !justify-center"
        severity="success"
      />
    </div>
    <span class="text-[32px] font-normal text-black leading-none">Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';

const state = reactive({
  username: 'Benutzername',
  avatarLabel: 'B',
  badgeValue: '8',
  showBadge: true
});
</script>