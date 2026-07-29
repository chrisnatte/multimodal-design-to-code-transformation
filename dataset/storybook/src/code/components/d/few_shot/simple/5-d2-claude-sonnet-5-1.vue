<template>
  <div class="flex w-80 flex-col gap-6 p-6">
    <Textarea
      v-model="feedback"
      placeholder="Feedback eingeben..."
      variant="filled"
      rows="4"
      class="w-full"
    />
    <div class="flex items-center gap-2">
      <Checkbox v-model="anonymous" input-id="anonymous" binary />
      <label for="anonymous">Anonym senden</label>
    </div>
    <Button label="Absenden" icon="pi pi-check" icon-pos="right" severity="primary" class="w-fit" />
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