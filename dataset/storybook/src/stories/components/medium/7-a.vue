<template>
  <div class="flex flex-col gap-2.5 p-6">
    <Card>
      <div class="flex gap-[7px] items-center justify-between">
        <span>Paket 1</span>
        <Tag value="Beliebt" severity="info" />
      </div>
      <template #content>
        <div class="flex flex-col gap-4">
          <Checkbox v-model="_state.n17_2611" binary />
          <Checkbox v-model="_state.n17_2615" binary />
          <Checkbox v-model="_state.n17_2619" binary />
        </div>
      </template>
      <template #footer>
        <div class="flex gap-[7px]">
          <Button label="Jetzt starten" />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const _state = reactive({ n17_2611: null, n17_2615: null, n17_2619: null })
</script>
