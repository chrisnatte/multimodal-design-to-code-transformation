<template>
  <Card class="w-full max-w-sm overflow-hidden rounded-xl shadow-md">
    <template #header>
      <img alt="Produkt1" src="/images/produkt1.png" class="w-full h-48 object-cover" />
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-xl font-semibold">Produkt1</span>
        <Tag value="Neu" severity="success" />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-sm text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end items-center gap-3 mt-2">
        <InputNumber v-model="quantity" showButtons :min="1" class="w-28" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
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