<template>
  <div class="flex flex-col gap-1">
    <RadioButton v-model="_state.n10_5229" value="option1" />
    <Divider />
    <RadioButton v-model="_state.n10_5233" value="option1" />
    <Divider />
    <RadioButton v-model="_state.n10_5267" value="option1" />
    <Divider />
    <RadioButton v-model="_state.n10_5274" value="option1" />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Divider from 'primevue/divider'
import RadioButton from 'primevue/radiobutton'

const _state = reactive({ n10_5229: null, n10_5233: null, n10_5267: null, n10_5274: null })
</script>
