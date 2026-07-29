<template>
  <div class="bg-white p-6 inline-flex flex-col">
    <div class="flex items-center gap-4">
      <Avatar
        label="B"
        size="xlarge"
        shape="circle"
        class="bg-blue-100"
      >
        <template #default>
          B
          <Badge
            v-if="showBadge"
            :value="badgeValue"
            severity="success"
            class="absolute -top-1 -right-1"
          />
        </template>
      </Avatar>
      <span class="text-xl">{{ username }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const showBadge = ref(true)
const badgeValue = ref('8')
const username = ref('Benutzername')
</script>