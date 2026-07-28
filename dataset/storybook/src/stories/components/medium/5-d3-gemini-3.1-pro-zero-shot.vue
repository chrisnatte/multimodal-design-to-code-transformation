<template>
  <Card style="width: 488px; overflow: hidden" class="shadow-sm border border-surface-200">
    <template #header>
      <div class="w-full h-[172px] bg-gradient-to-tr from-surface-900 to-green-900 flex justify-center items-center relative overflow-hidden">
        <!-- Placeholder for the custom header graphic based on screenshot -->
        <div class="absolute w-64 h-64 bg-green-500/20 rounded-full blur-3xl -top-10 -left-10"></div>
        <div class="absolute w-48 h-48 bg-green-400/20 rounded-full blur-2xl bottom-[-50px] right-[-20px]"></div>
        <i class="pi pi-shield text-6xl text-green-400 z-10 drop-shadow-lg"></i>
      </div>
    </template>
    
    <template #title>
      <div class="flex items-center gap-2 mt-1">
        <span class="text-[17.5px] font-medium text-surface-900">Produkt1</span>
        <Tag value="Neu" rounded severity="success" style="font-size: 12.25px; padding: 0.125rem 0.5rem;" />
      </div>
    </template>
    
    <template #content>
      <p class="m-0 text-surface-600 text-[14px] leading-relaxed mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    
    <template #footer>
      <div class="flex gap-2 justify-end items-center pt-4 w-full">
        <InputNumber 
          v-model="quantity" 
          showButtons 
          buttonLayout="stacked" 
          class="w-32 h-[31px]" 
          inputClass="h-[31px] text-sm"
          incrementButtonClass="h-[16px]"
          decrementButtonClass="h-[16px]"
        />
        <Button 
          label="Hinzufügen" 
          icon="pi pi-plus" 
          iconPos="right" 
          severity="success" 
          class="h-[33px] text-sm px-4"
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