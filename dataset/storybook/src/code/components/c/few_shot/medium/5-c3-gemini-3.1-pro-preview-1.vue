<template>
  <Card class="w-full max-w-md overflow-hidden">
    <template #header>
      <div class="h-48 w-full bg-slate-800 relative overflow-hidden flex items-center justify-center">
        <!-- Placeholder for the actual image in the mockup -->
        <div class="absolute inset-0 bg-gradient-to-b from-green-900/20 to-slate-900/80"></div>
        <div class="w-32 h-32 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center backdrop-blur-sm">
           <i class="pi pi-shield text-5xl text-green-400"></i>
        </div>
      </div>
    </template>
    <template #title>
      <div class="flex items-center gap-3">
        <span class="text-xl font-semibold text-slate-800">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-slate-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end items-center gap-3 mt-2">
        <InputNumber v-model="quantity" inputId="quantity" showButtons :min="1" class="w-24" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
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