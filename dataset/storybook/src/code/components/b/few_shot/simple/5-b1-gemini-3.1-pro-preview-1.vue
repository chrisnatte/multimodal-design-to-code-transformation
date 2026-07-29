<template>
  <div class="flex h-fit w-fit flex-col bg-white p-6">
    <div class="flex w-64 flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        class="w-full"
        rows="3"
      />
      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" input-id="anonymous" binary />
        <label for="anonymous" class="text-sm text-surface-700">Anonym senden</label>
      </div>
      <Button
        label="Absenden"
        icon="pi pi-check"
        icon-pos="right"
        severity="primary"
        class="w-fit"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Textarea from 'primevue/textarea'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const feedback = ref('')
  const anonymous = ref(false)
</script>