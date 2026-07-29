<template>
  <div class="p-6 bg-white inline-block">
    <Card class="w-[488px] rounded-xl shadow-sm border border-surface-200 overflow-hidden">
      <template #header>
        <img 
          src="https://www.primefaces.org/cdn/primevue/images/usercard.png" 
          alt="Product Image" 
          class="w-full h-[172px] object-cover"
        />
      </template>
      
      <template #title>
        <div class="flex items-center gap-2 pt-1">
          <span class="text-[17.5px] font-medium text-surface-900">Produkt1</span>
          <Tag 
            value="Neu" 
            rounded 
            class="bg-[#D1FAD5] text-surface-900 font-bold text-[12.25px] px-2 py-0.5" 
          />
        </div>
      </template>
      
      <template #content>
        <p class="text-sm font-normal text-surface-700 leading-relaxed m-0 mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      
      <template #footer>
        <div class="flex justify-end items-center gap-2 pt-4">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            class="w-[128px] h-[31px]" 
            inputClass="h-[31px] py-1 px-3 text-sm"
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
            class="bg-[#10B981] border-[#10B981] hover:bg-[#059669] hover:border-[#059669] h-[33px] px-4 py-1 text-sm font-medium" 
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