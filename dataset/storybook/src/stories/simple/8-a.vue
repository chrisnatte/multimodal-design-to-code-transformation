<template>
  <div class="flex gap-3 items-end justify-end">
    <InputText
      placeholder="Placeholder"
      variant="filled"
      v-model="_state.n10_5429"
     />
    <Button :rounded="true" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const _state = reactive({ n10_5429: null })
</script>
