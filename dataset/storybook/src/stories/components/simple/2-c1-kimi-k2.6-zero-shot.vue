<template>
  <div class="flex items-center gap-3 p-4">
    <div class="relative">
      <Avatar
        label="B"
        shape="circle"
        class="!w-12 !h-12 !bg-slate-200 !text-slate-600 !text-xl"
      />
      <Badge
        :value="badgeCount"
        severity="success"
        class="absolute -top-1 -right-1 !min-w-[1.25rem] !h-5 !text-xs"
      />
    </div>
    <span class="text-lg font-medium text-gray-900">
      {{ userName }}
    </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const userName = ref('Benutzername')
const badgeCount = ref(8)
</script>