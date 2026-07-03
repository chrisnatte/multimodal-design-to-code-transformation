<template>
  <div class="flex items-center gap-4">
    <Badge value="8" severity="primary">
      <Avatar label="B" shape="circle" size="xlarge" />
    </Badge>
    <span>Benutzername</span>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'

const form = reactive({})
</script>