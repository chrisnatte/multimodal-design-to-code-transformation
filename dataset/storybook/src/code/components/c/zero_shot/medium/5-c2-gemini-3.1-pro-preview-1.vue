<template>
  <div class="flex justify-center p-8 bg-surface-50 dark:bg-surface-900 min-h-screen">
    <Card class="w-full max-w-[28rem] overflow-hidden shadow-sm border border-surface-200 dark:border-surface-700 rounded-2xl">
      <template #header>
        <div class="h-48 w-full bg-surface-800 relative overflow-hidden">
          <!-- Placeholder for the 3D Vue logo image -->
          <div class="absolute inset-0 bg-gradient-to-b from-green-900/20 to-surface-900/80 flex items-center justify-center">
             <img src="https://primefaces.org/cdn/primevue/images/usercard.png" alt="Product Image" class="w-full h-full object-cover opacity-50" />
          </div>
        </div>
      </template>
      
      <template #title>
        <div class="flex items-center gap-3 mt-2">
          <span class="text-xl font-semibold text-surface-800 dark:text-surface-0">Produkt1</span>
          <Tag value="Neu" severity="success" rounded class="!bg-green-100 !text-green-700 dark:!bg-green-900/40 dark:!text-green-400 px-2 py-0.5 text-xs font-medium" />
        </div>
      </template>
      
      <template #content>
        <p class="m-0 text-surface-600 dark:text-surface-300 leading-relaxed text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
      </template>
      
      <template #footer>
        <div class="flex justify-end items-center gap-3 pt-4">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            :min="1"
            :max="99"
            class="w-20"
            inputClass="text-center"
          />
          <Button
            label="Hinzufügen"
            icon="pi pi-plus"
            iconPos="right"
            severity="success"
            class="px-4 py-2 font-medium"
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