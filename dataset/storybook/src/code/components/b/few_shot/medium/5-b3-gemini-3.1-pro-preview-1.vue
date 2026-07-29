<template>
  <div class="flex flex-col p-6">
    <Card
      :pt="{
        root: 'w-[488px] rounded-xl',
        body: 'flex flex-col gap-2 p-4',
        title: 'flex items-center gap-2 text-lg font-medium',
        content: 'text-sm font-normal',
        footer: 'flex items-center justify-end gap-2 pt-4'
      }"
    >
      <template #title>
        <span>Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </template>
      <template #content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" class="w-32" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
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