<template>
  <Card class="w-full max-w-[420px] shadow-sm border border-gray-200 rounded-xl overflow-hidden">
    <template #header>
      <img
        alt="Product Header"
        src="https://picsum.photos/id/180/420/200"
        class="w-full h-[200px] object-cover"
      />
    </template>
    <template #title>
      <div class="flex items-center gap-3 pt-1">
        <span class="text-xl font-semibold text-gray-800">Produkt1</span>
        <Tag value="Neu" class="!bg-[#d1fae5] !text-[#065f46] !text-xs !font-bold !px-2 !py-0.5 !rounded" />
      </div>
    </template>
    <template #content>
      <p class="text-gray-600 leading-relaxed m-0 text-sm mt-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        sed consequuntur error repudiandae numquam deserunt quisquam
        repellat libero asperiores earum nam nobis, culpa ratione quam
        perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end items-center gap-3 mt-4">
        <InputNumber
          v-model="quantity"
          inputId="quantity"
          showButtons
          buttonLayout="stacked"
          class="w-[4.5rem]"
          :min="1"
        />
        <Button
          label="Hinzufügen"
          icon="pi pi-plus"
          iconPos="right"
          class="!bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] !text-white !font-medium"
        />
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