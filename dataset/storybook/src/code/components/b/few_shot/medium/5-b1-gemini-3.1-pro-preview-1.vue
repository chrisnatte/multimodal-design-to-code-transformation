<template>
  <div class="bg-white p-6">
    <Card
      :pt="{
        root: 'w-[488px] rounded-xl bg-white overflow-hidden',
        header: 'h-[172px] p-2.5',
        body: 'flex flex-col gap-2 p-4.5',
        title: 'flex items-center gap-2',
        content: 'flex flex-col',
        footer: 'flex items-center justify-end gap-2 pt-4',
      }"
    >
      <template #title>
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </template>
      <template #content>
        <p class="text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <InputNumber v-model="quantity" show-buttons button-layout="stacked" class="w-32" />
        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="primary" />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>