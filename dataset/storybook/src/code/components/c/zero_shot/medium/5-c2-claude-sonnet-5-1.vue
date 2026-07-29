<template>
  <div class="flex justify-center p-6">
    <Card class="w-96 overflow-hidden shadow-md">
      <template #header>
        <img
          alt="Product header"
          src="https://primefaces.org/cdn/primevue/images/usercard.png"
          class="w-full h-48 object-cover"
        />
      </template>
      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-xl font-semibold">Produkt1</span>
          <Tag value="Neu" severity="success" rounded></Tag>
        </div>
      </template>
      <template #content>
        <p class="m-0 text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end items-center gap-3 mt-4">
          <InputNumber v-model="quantity" showButtons :min="1" inputClass="w-16 text-center" class="w-28" />
          <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
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
</script>