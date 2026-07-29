<template>
  <div class="p-6 bg-white">
    <Card class="w-[488px] shadow-md overflow-hidden">
      <template #header>
        <div
          class="w-full h-[172px] bg-gradient-to-br from-black via-emerald-950 to-emerald-900 relative overflow-hidden flex items-center justify-center"
        >
          <img
            src="https://placehold.co/200x200/000000/2dd4bf?text=+"
            alt="Produkt"
            class="w-32 h-32 rounded-full object-cover opacity-90"
          />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2 p-1">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Produkt1</span>
            <Tag value="Neu" rounded severity="success" class="bg-emerald-100 text-emerald-700 text-xs" />
          </div>
          <p class="text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
          <div class="flex items-center justify-end gap-2 pt-4">
            <InputNumber v-model="quantity" showButtons buttonLayout="stacked" class="w-32" inputClass="w-full" />
            <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
          </div>
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