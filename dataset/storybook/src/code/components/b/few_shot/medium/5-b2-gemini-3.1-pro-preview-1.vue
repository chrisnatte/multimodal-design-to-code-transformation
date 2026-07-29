<template>
  <div class="flex flex-col bg-white p-6">
    <Card class="w-full max-w-[488px] rounded-xl shadow-sm">
      <template #header>
        <div class="h-[172px] rounded-t-xl bg-surface-100 p-2.5 dark:bg-surface-800"></div>
      </template>
      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" severity="primary" rounded />
        </div>
      </template>
      <template #content>
        <p class="m-0 text-sm font-normal text-surface-700 dark:text-surface-0/70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber v-model="quantity" show-buttons button-layout="stacked" class="w-32" />
          <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" />
        </div>
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