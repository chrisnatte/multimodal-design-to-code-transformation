<template>
  <div class="p-6 flex justify-center">
    <Card class="w-[488px] overflow-hidden" style="border-radius: 12px">
      <template #header>
        <div
          class="w-full h-[172px] bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center relative overflow-hidden"
        >
          <i class="pi pi-box text-emerald-400 text-6xl opacity-80"></i>
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Produkt1</span>
            <Tag value="Neu" rounded style="background-color: #d1fae5; color: #059669"></Tag>
          </div>
          <p class="text-sm text-gray-600 m-0">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
          <div class="flex justify-end items-center gap-2 pt-4">
            <InputNumber v-model="quantity" showButtons buttonLayout="stacked" inputClass="w-16" :min="1" />
            <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" @click="addToCart" />
          </div>
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

const addToCart = () => {
  console.log('Added', quantity.value, 'of Produkt1 to cart');
};
</script>