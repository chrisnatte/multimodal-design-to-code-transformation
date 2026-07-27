<template>
  <div class="flex flex-col gap-[7px] w-[488px] bg-white rounded-xl overflow-hidden">
    <div class="flex flex-col gap-[10px] p-2.5 w-full h-[172px]" />
    <div class="flex flex-col gap-[7px] w-full p-[17.5px] rounded-md">
      <div class="flex flex-row items-center gap-[7px] w-full">
        <span class="text-[17.5px] font-medium text-gray-900">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </div>
      <div class="flex flex-col w-full">
        <span class="text-sm font-normal text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </span>
      </div>
      <div class="flex flex-row justify-end items-center gap-2 pt-4 w-full">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" class="w-32" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)
</script>