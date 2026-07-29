<template>
  <Card
    class="w-md overflow-hidden"
    :pt="{
      body: 'gap-4',
      caption: 'gap-2',
    }"
  >
    <template #header>
      <img
        src="https://placehold.co/600x400"
        alt="Produkt1"
        class="h-40 w-full object-cover"
      />
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
      <div class="flex justify-end gap-2">
        <InputNumber v-model="quantity" input-id="quantity-input" show-buttons class="w-24" />
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