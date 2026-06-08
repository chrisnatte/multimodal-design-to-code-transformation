<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" class="inline-flex">
      <Avatar label="B" size="xlarge" shape="circle" />
    </OverlayBadge>
    <span>Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'

const form = reactive({})
</script>