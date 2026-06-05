<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <Card class="max-w-[520px] overflow-hidden rounded-xl shadow-sm">
      <template #content>
        <div class="-m-4 mb-0">
          <img
            src="https://images.unsplash.com/photo-1636955779321-819753cd1741?auto=format&fit=crop&w=1200&q=80"
            alt="Produktbild"
            class="h-44 w-full object-cover"
          />
        </div>

        <div class="flex flex-col gap-2 p-4 pt-5">
          <div class="flex items-center gap-2">
            <h3 class="text-[33px] leading-none font-medium text-slate-700">Produkt1</h3>
            <Tag value="Neu" rounded severity="success" class="text-xs" />
          </div>

          <p class="text-[31px] leading-relaxed text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>

          <div class="flex items-center justify-end gap-2 pt-4">
            <InputNumber
              v-model="state.quantity"
              :min="1"
              showButtons
              buttonLayout="stacked"
              inputClass="w-16"
              class="w-32"
            />
            <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const state = reactive({
  quantity: 1
});
</script>