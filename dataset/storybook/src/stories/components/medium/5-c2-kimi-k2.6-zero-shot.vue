<template>
  <Card class="w-full max-w-md overflow-hidden rounded-xl shadow-md">
    <template #header>
      <img src="/images/product.png" alt="Produkt1" class="w-full h-48 object-cover" />
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span>Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="text-gray-600 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end items-center gap-3">
        <div class="w-24">
          <InputNumber v-model="quantity" showButtons :min="1" fluid />
        </div>
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