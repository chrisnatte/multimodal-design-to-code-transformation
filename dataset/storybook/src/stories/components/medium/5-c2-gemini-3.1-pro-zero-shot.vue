<template>
  <div class="flex justify-center p-8 bg-surface-50 dark:bg-surface-950 min-h-screen">
    <Card class="w-full max-w-[28rem] overflow-hidden rounded-xl shadow-sm border border-surface-200 dark:border-surface-700">
      <template #header>
        <div class="w-full h-48 bg-slate-900 relative overflow-hidden flex items-center justify-center">
          <!-- Placeholder for the specific 3D image in the mockup -->
          <div class="absolute inset-0 bg-gradient-to-b from-green-900/20 to-transparent"></div>
          <div class="w-32 h-32 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center backdrop-blur-sm">
             <i class="pi pi-box text-5xl text-green-400"></i>
          </div>
        </div>
      </template>
      
      <template #title>
        <div class="flex items-center gap-3 text-xl font-semibold text-surface-900 dark:text-surface-0">
          Produkt1
          <Tag value="Neu" class="!bg-green-100 !text-green-700 dark:!bg-green-900/40 dark:!text-green-400 font-medium px-2 py-0.5 text-sm rounded-md" />
        </div>
      </template>
      
      <template #content>
        <p class="m-0 text-surface-600 dark:text-surface-300 leading-relaxed text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
      </template>
      
      <template #footer>
        <div class="flex justify-end items-stretch gap-3 pt-2">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            :min="1"
            :max="99"
            class="w-20"
            :pt="{
              input: { class: 'w-full text-center' }
            }"
          />
          <Button
            label="Hinzufügen"
            icon="pi pi-plus"
            iconPos="right"
            severity="success"
            class="px-4 font-medium"
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