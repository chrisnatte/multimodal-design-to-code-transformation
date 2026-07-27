<template>
  <Card class="w-[488px]">
    <template #header>
      <div class="p-[10px] flex flex-col gap-[10px]"></div>
    </template>
    <template #content>
      <div class="flex flex-col gap-[7px] p-[17.5px] rounded-md">
        <div class="flex items-center gap-[7px] w-full">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" severity="primary" rounded class="ml-auto" />
        </div>
        <div class="w-full">
          <p class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </div>
        <div class="flex items-center justify-end gap-2 pt-4 w-full">
          <InputNumber v-model="quantity" showButtons buttonLayout="stacked" inputStyle="width: 4rem" />
          <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
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