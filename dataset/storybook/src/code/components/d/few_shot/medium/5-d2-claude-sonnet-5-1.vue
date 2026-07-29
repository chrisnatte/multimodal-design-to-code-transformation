<template>
  <Card
    class="w-[488px] overflow-hidden"
    :pt="{
      body: '!p-0 gap-0',
      caption: '!gap-0',
      content: '!p-0',
    }"
  >
    <template #header>
      <div
        class="flex h-[172px] w-full items-center justify-center bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900"
      >
        <i class="pi pi-box text-6xl text-emerald-400" />
      </div>
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <InputNumber v-model="quantity" show-buttons button-layout="stacked" input-class="w-16" />
        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="primary" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import InputNumber from 'primevue/inputnumber'
  import Button from 'primevue/button'

  const quantity = ref(1)
</script>