<template>
  <Card
    class="w-96 overflow-hidden"
    :pt="{
      body: '!p-0',
      caption: 'gap-2',
      content: '!p-6 !pt-4 flex flex-col gap-4',
      footer: '!pt-0',
    }"
  >
    <template #header>
      <img
        src="https://placehold.co/384x192/0a0a0a/2dd4bf?text=Product"
        alt="Produkt1"
        class="h-48 w-full object-cover"
      />
    </template>
    <template #title>
      <div class="flex items-center gap-2 px-6 pt-4">
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" severity="success" />
      </div>
    </template>
    <template #content>
      <p class="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <InputNumber v-model="quantity" show-buttons input-class="w-12 text-center" />
        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="primary" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import InputNumber from 'primevue/inputnumber'

  const quantity = ref(1)
</script>