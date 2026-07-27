<template>
  <Card class="w-[488px] rounded-xl bg-white overflow-hidden">
    <template #header>
      <div class="h-[172px] p-2.5 flex flex-col bg-surface-100 dark:bg-surface-800">
        <!-- Placeholder for header image/content -->
      </div>
    </template>
    
    <template #title>
      <div class="flex items-center gap-[7px]">
        <span class="text-[17.5px] font-medium font-sans text-surface-900 dark:text-surface-0">Produkt1</span>
        <Tag value="Neu" rounded severity="success" />
      </div>
    </template>
    
    <template #content>
      <div class="flex flex-col mt-[7px]">
        <p class="text-sm font-normal font-sans text-surface-700 dark:text-surface-200 m-0 leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </div>
    </template>
    
    <template #footer>
      <div class="flex justify-end items-center gap-2 pt-4">
        <InputNumber 
          v-model="quantity" 
          showButtons 
          buttonLayout="stacked" 
          style="width: 8rem"
        />
        <Button 
          label="Hinzufügen" 
          icon="pi pi-plus" 
          iconPos="right" 
        />
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