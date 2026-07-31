<template>
  <div class="flex flex-col gap-6">
    <Textarea
      placeholder="Placeholder"
      variant="filled"
      v-model="_state.n10_5310"
      rows="4"
     />
    <Checkbox v-model="_state.n10_5526" binary />
    <Button label="Absenden" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Textarea from 'primevue/textarea'

const _state = reactive({ n10_5310: null, n10_5526: null })
</script>
