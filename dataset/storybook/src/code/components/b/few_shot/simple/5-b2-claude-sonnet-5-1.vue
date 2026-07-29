<template>
  <div class="w-[304px] bg-white p-6">
    <div class="flex w-64 flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        variant="filled"
        rows="4"
        class="w-full"
      />
      <div class="flex items-center gap-2">
        <Checkbox v-model="sendAnonymously" input-id="anonym-senden" binary />
        <label for="anonym-senden">Anonym senden</label>
      </div>
      <Button label="Absenden" icon="pi pi-check" icon-pos="right" severity="primary" class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import Textarea from 'primevue/textarea'
  import Checkbox from 'primevue/checkbox'

  const feedback = ref('')
  const sendAnonymously = ref(false)
</script>