<template>
  <div class="flex justify-center p-6 bg-gray-100">
    <Card class="w-96 overflow-hidden shadow-md">
      <template #header>
        <img
          src="https://primefaces.org/cdn/primevue/images/product/product-placeholder-green.png"
          alt="Produkt1"
          class="w-full h-48 object-cover"
        />
      </template>
      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-xl font-semibold">Produkt1</span>
          <Tag value="Neu" severity="success" rounded />
        </div>
      </template>
      <template #content>
        <p class="text-gray-600 text-sm leading-relaxed m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end items-center gap-3 mt-3">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            :min="1"
            inputClass="w-14 text-center"
            class="w-24"
          />
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
import Button from 'primevue/button';
import InputNumber from 'primevue/inputnumber';

const quantity = ref(1);
</script>