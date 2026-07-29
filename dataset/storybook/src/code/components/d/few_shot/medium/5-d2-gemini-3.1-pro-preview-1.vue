<template>
  <Card class="w-[488px] overflow-hidden">
    <template #header>
      <div class="h-[172px] w-full bg-surface-900">
        <img
          alt="Product image"
          src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
          class="h-full w-full object-cover opacity-80"
        />
      </div>
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-[17.5px] font-medium text-surface-900 dark:text-surface-0">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-sm leading-relaxed text-surface-700 dark:text-surface-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2 pt-2">
        <InputNumber v-model="quantity" show-buttons button-layout="stacked" class="w-32" />
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