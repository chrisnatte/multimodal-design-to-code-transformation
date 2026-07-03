<template>
  <Card class="rounded-xl">
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2.5 p-2.5"></div>

        <div class="flex flex-col gap-2 rounded-md p-4">
          <div class="flex items-center justify-between gap-2">
            <span class="text-base font-medium">Produkt1</span>
            <Tag value="Neu" rounded />
          </div>

          <div class="flex flex-col">
            <p class="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
            </p>
          </div>

          <div class="flex items-center justify-end gap-2 pt-4">
            <InputNumber
              v-model="state.quantity"
              :min="0"
              showButtons
              buttonLayout="stacked"
              inputId="quantity"
            />
            <Button
              label="Hinzufügen"
              icon="pi pi-plus"
              iconPos="right"
            />
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const state = reactive({
  quantity: 1
});
</script>