<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 w-[536px]">
    <Card class="rounded-xl bg-white">
      <template #title>
        <div class="flex flex-row items-center gap-[7px]">
          <span class="font-medium text-[17.5px] font-sans text-gray-900">Produkt1</span>
          <Tag value="Neu" severity="success" rounded class="text-[12.25px] font-bold font-sans" />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col w-full">
          <p class="font-normal text-sm font-sans text-gray-700 m-0 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </div>
      </template>
      <template #footer>
        <div class="flex flex-row items-center justify-end gap-2 pt-4 w-full">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            class="w-32 h-[31px]" 
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
            class="h-[33px]" 
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const quantity = ref(1);
</script>