<template>
  <div class="flex w-lg flex-col gap-4 p-6">
    <div class="flex items-center gap-4">
      <Avatar label="B" size="xlarge" shape="circle" />
      <span class="text-xl text-black">Benutzername</span>
    </div>
    <Textarea v-model="feedback" placeholder="Feedback eingeben..." />
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-2">
        <Checkbox v-model="notification" input-id="notification" binary />
        <label for="notification">Benachrichtigen</label>
      </div>
      <Button label="Senden" severity="primary" class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Avatar from 'primevue/avatar'
  import Button from 'primevue/button'
  import Textarea from 'primevue/textarea'
  import Checkbox from 'primevue/checkbox'

  const feedback = ref('')
  const notification = ref(false)
</script>
