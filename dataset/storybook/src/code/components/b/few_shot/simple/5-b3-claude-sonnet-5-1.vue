<template>
  <div class="flex w-[304px] flex-col p-6">
    <div class="flex w-64 flex-col gap-6">
      <Textarea v-model="feedback" placeholder="Feedback eingeben..." rows="4" />
      <div class="flex items-center gap-2">
        <Checkbox v-model="isAnonymous" input-id="anonym-checkbox" binary />
        <label for="anonym-checkbox">Anonym senden</label>
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
  const isAnonymous = ref(false)
</script>