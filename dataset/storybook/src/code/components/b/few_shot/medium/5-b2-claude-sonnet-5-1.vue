<template>
  <Card
    class="w-fit overflow-hidden rounded-xl"
    :pt="{
      body: '!p-0 gap-2',
      header: 'h-[172px] bg-surface-100 p-2',
      content: 'flex flex-col gap-2 rounded-md p-4',
      footer: '!pt-4',
    }"
  >
    <template #content>
      <div class="flex items-center justify-between">
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </div>
      <p class="text-sm text-surface-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
        numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
        cupiditate neque quas!
      </p>
      <div class="flex items-center justify-end gap-2">
        <InputNumber v-model="quantity" show-buttons button-layout="stacked" input-class="w-16" :min="1" />
        <Button label="Hinzufügen" severity="primary" icon="pi pi-plus" icon-pos="right" />
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