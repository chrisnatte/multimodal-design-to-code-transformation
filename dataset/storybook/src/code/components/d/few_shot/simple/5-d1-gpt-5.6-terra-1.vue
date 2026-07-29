<template>
  <div class="flex w-[304px] flex-col p-6">
    <div class="flex w-64 flex-col gap-6">
      <Textarea
        v-model="feedback"
        placeholder="Feedback eingeben..."
        class="w-full"
        :pt="{
          root: 'h-[84px] !bg-slate-50',
        }"
      />
      <div class="flex items-center gap-2">
        <Checkbox v-model="anonymous" input-id="anonymous" binary />
        <label for="anonymous" class="text-sm">Anonym senden</label>
      </div>
      <Button label="Absenden" icon="pi pi-check" icon-pos="right" severity="primary" class="w-fit" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const feedback = ref('')
const anonymous = ref(false)
</script>