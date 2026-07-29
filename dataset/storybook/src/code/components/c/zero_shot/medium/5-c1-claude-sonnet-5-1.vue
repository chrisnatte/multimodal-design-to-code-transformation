<template>
  <div class="max-w-sm rounded-xl overflow-hidden shadow-md bg-white">
    <img
      src="https://placehold.co/600x300/0a1a1a/2dd4bf?text=Product"
      alt="Produkt1"
      class="w-full h-48 object-cover"
    />
    <div class="p-4">
      <div class="flex items-center gap-2 mb-2">
        <h3 class="text-lg font-semibold text-gray-800">Produkt1</h3>
        <Tag value="Neu" severity="success" rounded></Tag>
      </div>
      <p class="text-sm text-gray-500 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        sed consequuntur error repudiandae numquam deserunt quisquam
        repellat libero asperiores earum nam nobis, culpa ratione quam
        perferendis esse, cupiditate neque quas!
      </p>
      <div class="flex justify-end items-center gap-2">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" class="w-20" inputClass="w-12 text-center" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>