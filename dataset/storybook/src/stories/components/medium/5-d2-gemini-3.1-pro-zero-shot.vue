<template>
  <Card class="w-[488px] overflow-hidden rounded-xl bg-surface-0 shadow-sm border border-surface-200 dark:border-surface-700">
    <template #header>
      <div class="h-[172px] w-full bg-slate-900 relative overflow-hidden flex items-center justify-center p-2.5">
        <div class="absolute w-[200px] h-[200px] rounded-full bg-emerald-500/20 blur-xl top-[-20%] left-[10%]"></div>
        <div class="absolute w-[150px] h-[150px] rounded-full bg-emerald-500/20 blur-xl bottom-[-30%] right-[10%]"></div>
        <img alt="Abstract shield logo" src="https://primefaces.org/cdn/primevue/images/usercard.png" class="opacity-0 w-full object-cover hidden" />
      </div>
    </template>
    
    <template #title>
      <div class="flex items-center gap-[7px]">
        <span class="text-[17.5px] font-medium font-sans text-surface-900 dark:text-surface-0">Produkt1</span>
        <Tag value="Neu" severity="success" rounded class="!bg-[#D1FAED] !text-emerald-800 px-2 py-0.5 text-xs"></Tag>
      </div>
    </template>
    
    <template #content>
      <p class="m-0 text-[14px] font-normal font-sans leading-relaxed text-surface-700 dark:text-surface-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>

    <template #footer>
      <div class="flex justify-end items-center gap-2 pt-4">
        <InputNumber 
          v-model="quantity" 
          showButtons 
          buttonLayout="stacked" 
          :min="1" 
          class="w-[128px] h-[33px]" 
          inputClass="text-center" 
        />
        <Button 
          label="Hinzufügen" 
          icon="pi pi-plus" 
          iconPos="right" 
          severity="success" 
          class="h-[33px]" 
        />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';

const quantity = ref(1);
</script>