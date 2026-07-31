<template>
  <div class="flex flex-col gap-3">
    <div class="flex gap-3 items-center">
      <Checkbox
        variant="filled"
        v-model="_state.n11_5530"
        binary
       />
      <Tag
        value="Hoch"
        severity="danger"
        :rounded="true"
       />
    </div>
    <div class="flex gap-3 items-center">
      <Checkbox
        variant="filled"
        v-model="_state.n11_5607"
        binary
       />
      <Tag value="Niedrig" :rounded="true" />
    </div>
    <div class="flex gap-3 items-center">
      <Checkbox
        variant="filled"
        v-model="_state.n11_5615"
        binary
       />
      <Tag
        value="Mittel"
        severity="warn"
        :rounded="true"
       />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const _state = reactive({ n11_5530: null, n11_5607: null, n11_5615: null })
</script>
