<template>
  <div class="flex justify-center p-6">
    <Card style="width: 30.5rem" class="overflow-hidden shadow-md rounded-xl">
      <template #header>
        <img
          alt="Produkt1 header"
          src="https://placehold.co/488x172/06251f/1a3d33?text=Produkt+Bild"
          class="w-full h-[172px] object-cover"
        />
      </template>
      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-lg font-medium">Produkt1</span>
          <Tag value="Neu" rounded style="background-color: #d1fae5; color: #059669;" />
        </div>
      </template>
      <template #content>
        <p class="m-0 text-sm text-surface-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end items-center gap-2 pt-4">
          <InputNumber v-model="quantity" showButtons buttonLayout="stacked" inputStyle="width: 4rem" :min="1" />
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