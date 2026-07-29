<template>
  <div class="p-6 flex justify-center bg-white">
    <Card class="w-full max-w-[488px] overflow-hidden shadow-md rounded-xl border border-surface-200">
      <template #header>
        <div class="w-full h-[172px] bg-slate-900 relative overflow-hidden">
          <!-- Placeholder for the actual image -->
          <div class="absolute inset-0 bg-gradient-to-b from-green-900/20 to-slate-900/80"></div>
        </div>
      </template>
      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-lg font-medium text-surface-900">Produkt1</span>
          <Tag value="Neu" severity="success" rounded :pt="{ root: 'bg-green-100 text-green-800 text-xs font-bold px-2 py-0.5' }" />
        </div>
      </template>
      <template #content>
        <p class="m-0 text-sm text-surface-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end items-center gap-2 pt-4">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            class="w-24 h-[33px]" 
            :pt="{ 
              input: 'w-full text-center h-full',
              buttonGroup: 'w-8'
            }" 
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
            severity="primary" 
            class="h-[33px] px-4 text-sm font-medium bg-emerald-500 border-emerald-500 hover:bg-emerald-600 hover:border-emerald-600" 
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>