<template>
  <div class="p-6 bg-white flex flex-col items-start">
    <Card class="w-[488px] rounded-xl shadow-sm">
      <template #header>
        <div class="h-[172px] p-2.5 bg-surface-100 rounded-t-xl"></div>
      </template>
      <template #title>
        <div class="flex flex-row items-center gap-[7px]">
          <span class="font-medium text-[17.5px] text-surface-900">Produkt1</span>
          <Tag value="Neu" rounded />
        </div>
      </template>
      <template #content>
        <p class="font-normal text-sm text-surface-700 m-0 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex flex-row items-center justify-end gap-2 pt-4">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            class="w-32" 
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
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