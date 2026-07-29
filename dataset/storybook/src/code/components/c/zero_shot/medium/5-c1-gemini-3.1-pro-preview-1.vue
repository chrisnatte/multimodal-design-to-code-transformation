<template>
  <div class="flex justify-center p-8 bg-white">
    <Card class="w-full max-w-[450px] shadow-sm border border-gray-200 rounded-xl overflow-hidden">
      <template #header>
        <div class="w-full h-48 bg-[#0a1118] relative flex items-center justify-center overflow-hidden">
          <!-- Simulating the background glow effects -->
          <div class="absolute w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl -top-10 -left-10"></div>
          <div class="absolute w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl bottom-0 right-10"></div>
          <!-- Placeholder for the 3D logo -->
          <img 
            src="https://www.primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" 
            alt="Product Image" 
            class="w-full h-full object-cover opacity-40 mix-blend-overlay"
          />
        </div>
      </template>
      
      <template #title>
        <div class="flex items-center gap-3 pt-2">
          <span class="text-xl font-semibold text-gray-800">Produkt1</span>
          <Tag 
            value="Neu" 
            class="!bg-[#d1fae5] !text-[#065f46] font-medium px-2.5 py-0.5 rounded-md text-sm" 
          />
        </div>
      </template>
      
      <template #content>
        <p class="text-gray-600 leading-relaxed mt-1 text-[15px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
      </template>
      
      <template #footer>
        <div class="flex justify-end items-center gap-3 mt-2">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            :min="1"
            class="w-[4.5rem]"
            inputClass="text-center"
          />
          <Button
            label="Hinzufügen"
            icon="pi pi-plus"
            iconPos="right"
            class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] font-medium px-4 py-2"
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