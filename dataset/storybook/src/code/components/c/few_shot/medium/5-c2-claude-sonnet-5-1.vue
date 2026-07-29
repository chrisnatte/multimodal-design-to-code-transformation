<template>
  <Card
    class="w-md overflow-hidden"
    :pt="{
      body: '!p-0',
      caption: '!gap-2 p-4',
      content: '!p-4 !pt-0',
      footer: '!p-4 !pt-0',
    }"
  >
    <template #header>
      <img
        alt="Produkt1"
        src="https://primefaces.org/cdn/primevue/images/product/bracelet.jpg"
        class="h-48 w-full object-cover"
      />
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        sed consequuntur error repudiandae numquam deserunt quisquam
        repellat libero asperiores earum nam nobis, culpa ratione quam
        perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end gap-2">
        <InputNumber v-model="quantity" show-buttons button-layout="stacked" input-class="w-12" />
        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="success" />
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