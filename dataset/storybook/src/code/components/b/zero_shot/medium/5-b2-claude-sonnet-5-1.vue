<template>
  <div class="p-6 inline-block bg-white">
    <Card class="w-[488px] overflow-hidden" :pt="{ body: { class: 'p-0 gap-2' } }">
      <template #header>
        <div class="w-full h-[172px] p-2 flex flex-col gap-2 bg-surface-100"></div>
      </template>
      <template #content>
        <div class="flex flex-col gap-2 p-4">
          <div class="flex items-center gap-2 w-full">
            <span class="text-lg font-medium">Produkt1</span>
            <Tag severity="success" value="Neu" rounded />
          </div>

          <div class="w-full">
            <p class="text-sm text-surface-700 m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
              consequuntur error repudiandae numquam deserunt quisquam repellat libero
              asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
              neque quas!
            </p>
          </div>

          <div class="flex items-center justify-end gap-2 pt-4 w-full">
            <InputNumber
              v-model="quantity"
              showButtons
              buttonLayout="stacked"
              inputId="product-quantity"
              class="w-32"
              :min="1"
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