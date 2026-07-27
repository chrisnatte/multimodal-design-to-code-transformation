<template>
  <div class="flex flex-col gap-[7px] rounded-[12px] bg-white w-[488px]">
    <div class="flex flex-col gap-[10px] p-[10px]">
      <!-- Header is empty in the design -->
    </div>
    <div class="flex flex-col gap-[7px] p-[17.5px] rounded-[6px]">
      <div class="flex flex-row gap-[7px] w-full items-center">
        <span class="font-medium text-[17.5px] font-sans text-gray-900">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </div>
      
      <div class="flex flex-col w-full">
        <span class="font-normal text-[14px] font-sans text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </span>
      </div>
      
      <div class="flex flex-row gap-[8px] w-full pt-[16px] items-center justify-end">
        <InputNumber 
          v-model="quantity" 
          showButtons 
          buttonLayout="stacked" 
          class="w-[128px]" 
        />
        <Button 
          label="Hinzufügen" 
          icon="pi pi-plus" 
          iconPos="right" 
          severity="primary" 
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>