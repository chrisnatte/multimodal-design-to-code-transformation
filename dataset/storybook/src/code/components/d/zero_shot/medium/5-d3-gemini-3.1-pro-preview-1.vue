<template>
  <div class="p-6 bg-white inline-block">
    <Card class="w-[488px] rounded-xl overflow-hidden border border-surface-200 shadow-sm">
      <template #header>
        <div class="h-[172px] w-full bg-slate-900 relative">
          <img 
            src="https://www.primefaces.org/cdn/primevue/images/card-vue.jpg" 
            alt="Product Header" 
            class="w-full h-full object-cover opacity-80" 
          />
        </div>
      </template>
      
      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-[17.5px] font-medium text-surface-900">Produkt1</span>
          <Tag value="Neu" severity="success" rounded />
        </div>
      </template>
      
      <template #content>
        <p class="m-0 text-sm text-surface-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      
      <template #footer>
        <div class="flex items-center justify-end gap-2 pt-2">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            class="w-32" 
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
            severity="success" 
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