<template>
  <div class="flex w-fit flex-col bg-white p-6">
    <div class="flex items-center gap-4">
      <div class="relative">
        <Avatar :label="avatarLabel" shape="circle" class="h-14 w-14 !bg-slate-200 !text-[28px] !text-slate-900" />
        <Badge :value="badgeValue" severity="success" class="absolute -right-2.5 -top-2.5 !min-w-[21px] !h-[21px] !rounded-full !text-[10.5px]" />
      </div>
      <span class="text-xl font-normal">{{ username }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const avatarLabel = ref('B')
const badgeValue = ref('8')
const username = ref('Benutzername')
</script>