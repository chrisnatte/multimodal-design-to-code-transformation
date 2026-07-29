<template>
  <Card class="w-lg overflow-hidden" :pt="{ body: '!p-0 !gap-0', caption: '!gap-0', content: '!p-0' }">
    <template #header>
      <img
        src="https://placehold.co/488x172/0a1128/1abc9c?text=Produkt"
        alt="Produkt1"
        class="h-[172px] w-full object-cover"
      />
    </template>
    <template #title>
      <div class="flex items-center gap-2 px-2 pt-2">
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" severity="success" rounded class="!bg-emerald-100 !text-emerald-700" />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-2 px-2 pb-2">
        <p class="text-sm text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
          quam perferendis esse, cupiditate neque quas!
        </p>
        <div class="flex items-center justify-end gap-2 pt-2">
          <InputNumber v-model="quantity" input-class="w-16" show-buttons button-layout="stacked" />
          <Button label="Hinzufügen" severity="primary" icon-pos="right" icon="pi pi-plus" />
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