<template>
  <div class="p-6 flex flex-col gap-2.5 bg-white w-fit">
    <div class="flex flex-col gap-[7px] rounded-xl bg-white shadow-sm border border-surface-200 overflow-hidden w-[488px]">
      <!-- Header (Placeholder for Image) -->
      <div class="p-2.5 flex flex-col gap-2.5 h-[172px] bg-surface-100"></div>

      <!-- Body -->
      <div class="p-[17.5px] flex flex-col gap-[7px] rounded-md">
        <!-- Caption -->
        <div class="flex flex-row gap-[7px] items-center w-full">
          <span class="font-medium text-[17.5px] text-surface-900">Produkt1</span>
          <Tag value="Neu" severity="success" rounded />
        </div>

        <!-- Content -->
        <div class="flex flex-col w-full">
          <p class="font-normal text-sm text-surface-700 m-0 leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </div>

        <!-- Footer -->
        <div class="flex flex-row gap-2 pt-4 items-center justify-end w-full">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            class="w-32 h-[31px]" 
            inputClass="h-[31px]"
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
            class="h-[33px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tag from 'primevue/tag';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const quantity = ref(1);
</script>