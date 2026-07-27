<template>
  <Card class="w-[488px] rounded-xl bg-white">
    <template #header>
      <div class="flex flex-col p-[10px] gap-[10px]"></div>
    </template>
    <template #title>
      <div class="flex flex-row items-center gap-[7px] w-full">
        <span class="font-['Inter'] font-medium text-[17.5px]">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <div class="flex flex-col items-stretch w-full">
        <span class="font-['Inter'] font-normal text-[14px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </span>
      </div>
    </template>
    <template #footer>
      <div class="flex flex-row items-center justify-end gap-[8px] pt-[16px] w-full">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" class="w-[128px] h-[31px]" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" class="h-[33px]" />
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