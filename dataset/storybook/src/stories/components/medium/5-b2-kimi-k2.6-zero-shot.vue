<template>
  <Card class="w-[488px]">
    <template #header>
      <div class="h-[172px] p-2.5"></div>
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" rounded />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-sm">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end items-center gap-2 pt-4">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" class="w-32" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const quantity = ref(1);
</script>