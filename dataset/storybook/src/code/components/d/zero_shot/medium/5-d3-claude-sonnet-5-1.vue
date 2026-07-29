<template>
  <div class="p-6 flex justify-center bg-gray-50">
    <Card class="w-[488px] overflow-hidden shadow-md rounded-xl">
      <template #header>
        <div
          class="w-full h-[172px] bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 flex items-center justify-center relative overflow-hidden"
        >
          <div
            class="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-700 to-slate-900 flex items-center justify-center shadow-inner"
          >
            <i class="pi pi-box text-5xl text-emerald-300"></i>
          </div>
          <div
            class="absolute bottom-[-30px] right-[-10px] w-16 h-16 rounded-full bg-gradient-to-br from-emerald-700 to-slate-900"
          ></div>
        </div>
      </template>

      <template #title>
        <div class="flex items-center gap-2">
          <span class="text-lg font-medium">Produkt1</span>
          <Tag value="Neu" severity="success" rounded class="!bg-emerald-100 !text-emerald-700"></Tag>
        </div>
      </template>

      <template #content>
        <p class="text-sm text-gray-600 leading-relaxed m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
      </template>

      <template #footer>
        <div class="flex justify-end items-center gap-2 pt-4">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            :min="1"
            inputClass="w-16"
            class="max-w-[128px]"
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
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const quantity = ref(1);
</script>