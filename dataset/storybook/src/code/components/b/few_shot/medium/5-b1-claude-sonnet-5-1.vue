<template>
  <Card class="w-[536px]">
    <template #header>
      <div class="p-2.5" />
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex items-center justify-between">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" severity="primary" rounded />
        </div>
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
          error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
          culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber v-model="quantity" show-buttons button-layout="stacked" input-class="w-[94px]" />
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