<template>
  <div class="w-fit bg-white p-6">
    <div class="flex w-64 flex-col gap-6">
      <Textarea v-model="feedback" placeholder="Feedback eingeben..." />
      <div class="flex items-center gap-2">
        <Checkbox v-model="isAnonymous" input-id="anonymous-checkbox" binary />
        <label for="anonymous-checkbox">Anonym senden</label>
      </div>
      <Button label="Absenden" severity="primary" icon="pi pi-check" icon-pos="right" class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Textarea from 'primevue/textarea'
  import Checkbox from 'primevue/checkbox'
  import Button from 'primevue/button'

  const feedback = ref('')
  const isAnonymous = ref(false)
</script>