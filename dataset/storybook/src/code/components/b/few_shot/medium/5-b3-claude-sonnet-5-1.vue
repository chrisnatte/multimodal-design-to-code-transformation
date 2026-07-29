<template>
  <Card
    class="w-[488px]"
    :pt="{
      body: 'flex flex-col !p-0 !gap-2',
      caption: '!p-0',
      content: '!p-0',
    }"
  >
    <template #header>
      <div class="flex h-[172px] w-full items-center justify-center rounded-t-xl bg-gray-100 p-2.5" />
    </template>
    <template #content>
      <div class="flex flex-col gap-2 rounded-md p-4">
        <div class="flex w-full items-center gap-2">
          <span class="text-lg font-medium">Produkt1</span>
          <Tag value="Neu" severity="success" rounded />
        </div>
        <p class="m-0 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
          quam perferendis esse, cupiditate neque quas!
        </p>
        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber v-model="quantity" show-buttons button-layout="stacked" input-class="w-16" />
          <Button label="Hinzufügen" icon-pos="right" icon="pi pi-plus" severity="primary" />
        </div>
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