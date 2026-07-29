<template>
  <div class="p-6 flex justify-center bg-white">
    <Card style="width: 488px" class="overflow-hidden rounded-xl shadow-sm border border-surface-200 dark:border-surface-700">
      <template #header>
        <div class="w-full h-[172px] bg-[#0B1120] relative overflow-hidden flex items-center justify-center">
          <!-- Abstract representation of the header image from the screenshot -->
          <div class="absolute w-64 h-64 bg-green-500/20 rounded-full blur-3xl -left-10 -top-10"></div>
          <div class="absolute w-48 h-48 bg-green-500/20 rounded-full blur-3xl right-10 -bottom-10"></div>
          <div class="relative z-10 w-24 h-24 bg-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/20">
            <i class="pi pi-shield text-4xl text-green-400"></i>
          </div>
        </div>
      </template>
      
      <template #title>
        <div class="flex items-center gap-2 mt-1">
          <span class="text-[17.5px] font-medium text-surface-900 dark:text-surface-0">Produkt1</span>
          <Tag value="Neu" severity="success" rounded class="!bg-[#D1FAE5] !text-[#065F46] dark:!bg-green-500/20 dark:!text-green-300 font-bold text-xs px-2 py-0.5" />
        </div>
      </template>
      
      <template #content>
        <p class="m-0 text-[14px] text-surface-600 dark:text-surface-300 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      
      <template #footer>
        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            style="width: 128px" 
            :min="1"
            class="h-[33px]"
            inputClass="!py-1"
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
            severity="success" 
            class="!bg-[#10B981] !border-[#10B981] hover:!bg-[#059669] hover:!border-[#059669] h-[33px] !py-1 !px-3 text-sm font-medium"
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