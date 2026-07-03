<template>
  <div class="flex w-64 flex-col gap-6">
    <Textarea v-model="feedback" placeholder="Feedback eingeben" variant="filled" />

    <div class="flex items-center gap-2">
      <Checkbox v-model="sendAnonymous" input-id="anonymous" binary />
      <label for="anonymous">Anonym senden</label>
    </div>

    <Button label="Absenden" icon="pi pi-check" icon-pos="right" severity="primary" class="w-fit" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Checkbox from 'primevue/checkbox'
  import Textarea from 'primevue/textarea'
  import Button from 'primevue/button'

  const feedback = ref('')
  const sendAnonymous = ref(false)
</script>
