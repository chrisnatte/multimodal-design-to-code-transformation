<template>
  <div class="w-[257px] h-[104px] bg-[#e9e9e9] flex items-center px-6">
    <div class="flex items-center gap-4">
      <OverlayBadge value="8" severity="success">
        <Avatar label="B" shape="circle" size="xlarge" class="bg-slate-300 text-slate-700" />
      </OverlayBadge>
      <span class="text-[33px] leading-none text-[#111111]">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
import { reactive } from 'vue'

const state = reactive({
  username: 'Benutzername',
  initial: 'B',
  notifications: 8
})
</script>