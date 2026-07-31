<template>
  <div class="flex flex-col gap-2.5 p-6">
    <div class="flex flex-col gap-2">
      <label>Label</label>
      <Select
        v-model="_state.n31_2130"
        :options="_options_n31_2130"
        placeholder="Verantwortlichen aus."
       />
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Select from 'primevue/select'

const _state = reactive({ n31_2130: null })
</script>
