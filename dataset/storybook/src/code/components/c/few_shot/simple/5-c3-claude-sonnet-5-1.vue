<template>
  <div class="flex w-sm flex-col gap-4">
    <Textarea v-model="feedback" placeholder="Feedback eingeben..." rows="4" />
    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" input-id="anonymous" binary />
      <label for="anonymous">Anonym senden</label>
    </div>
    <Button label="Absenden" icon="pi pi-check" icon-pos="right" severity="primary" class="w-fit" />
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Textarea from 'primevue/textarea'
  import Checkbox from 'primevue/checkbox'

  const feedback = ref('')
  const anonymous = ref(false)
</script>