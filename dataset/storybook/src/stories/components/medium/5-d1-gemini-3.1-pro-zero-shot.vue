<template>
  <div class="flex justify-center p-8">
    <Card class="w-[488px] rounded-xl shadow-sm border border-surface-200 overflow-hidden">
      <template #header>
        <div class="w-full h-[172px] bg-slate-900 overflow-hidden relative">
          <!-- Placeholder mimicking the dark visual with green spheres in the mockup -->
          <div class="absolute inset-0 bg-gradient-to-b from-teal-900/40 to-slate-900 flex items-center justify-center">
            <div class="w-32 h-32 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 flex items-center justify-center">
              <i class="pi pi-shield text-4xl text-emerald-400"></i>
            </div>
          </div>
        </div>
      </template>

      <template #title>
        <div class="flex items-center gap-2 mt-2">
          <span class="text-[17.5px] font-medium text-surface-900">Produkt1</span>
          <Tag value="Neu" severity="success" rounded style="background-color: #D1FAED; color: #000; font-size: 12.25px; padding: 2px 8px;" />
        </div>
      </template>

      <template #content>
        <p class="text-sm text-surface-700 font-normal leading-normal m-0 mt-1">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>

      <template #footer>
        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber 
            v-model="quantity" 
            showButtons 
            buttonLayout="stacked" 
            :min="0"
            class="w-32" 
            inputClass="text-center"
          />
          <Button 
            label="Hinzufügen" 
            icon="pi pi-plus" 
            iconPos="right" 
            severity="success"
            style="background-color: #10B981; border-color: #10B981;"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>