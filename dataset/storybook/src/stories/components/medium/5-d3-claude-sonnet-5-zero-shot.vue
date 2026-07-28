<template>
  <Card class="w-[488px] overflow-hidden shadow-md">
    <template #header>
      <div class="p-2.5">
        <div
          class="w-full h-[172px] rounded-md bg-gradient-to-br from-slate-900 via-emerald-950 to-black flex items-center justify-center overflow-hidden relative"
        >
          <img
            src="https://primefaces.org/cdn/primevue/images/product/bamboo-watch.jpg"
            alt="Produkt1"
            class="w-full h-full object-cover opacity-90"
          />
        </div>
      </div>
    </template>
    <template #content>
      <div class="flex flex-col gap-[7px] px-1">
        <div class="flex items-center gap-[7px]">
          <span class="text-[17.5px] font-medium text-gray-900">Produkt1</span>
          <Tag value="Neu" rounded severity="success" class="!bg-emerald-100 !text-emerald-700" />
        </div>
        <div class="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </div>
        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            inputId="quantity"
            :min="0"
            class="w-24"
            inputClass="w-full"
          />
          <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
        </div>
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