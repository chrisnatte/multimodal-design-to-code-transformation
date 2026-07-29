<template>
  <div class="flex w-xs flex-col gap-4 p-4">
    <Textarea v-model="feedback" placeholder="Feedback eingeben..." disabled />
    <div class="flex items-center gap-2">
      <Checkbox v-model="anonym" input-id="anonym" binary />
      <label for="anonym">Anonym senden</label>
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
  const anonym = ref(false)
</script>