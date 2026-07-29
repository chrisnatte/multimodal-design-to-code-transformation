<template>
  <div class="p-6 inline-flex flex-col gap-2.5 bg-white">
    <Card class="w-[488px]">
      <template #header>
        <div class="flex flex-col gap-2.5 p-2.5 h-[172px]"></div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2 p-4">
          <div class="flex items-center gap-2 w-full">
            <span class="text-lg font-medium">Produkt1</span>
            <Tag value="Neu" severity="success" rounded></Tag>
          </div>
          <div class="w-full">
            <p class="text-sm m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </div>
          <div class="flex items-center justify-end gap-2 w-full pt-4">
            <InputNumber
              v-model="quantity"
              inputId="stacked-buttons"
              showButtons
              buttonLayout="stacked"
              :min="1"
              class="w-32"
            />
            <Button
              label="Hinzufügen"
              icon="pi pi-plus"
              iconPos="right"
              severity="success"
            />
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
</script>