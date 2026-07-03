<template>
  <div class="p-6 bg-gray-100 min-h-screen flex items-start justify-center">
    <Card class="w-[520px] overflow-hidden rounded-xl shadow-sm border border-gray-200">
      <template #header>
        <div class="p-0">
          <img
            src="https://images.unsplash.com/photo-1635372722656-389f87a941b7?auto=format&fit=crop&w=1200&q=80"
            alt="Produkt Header"
            class="w-full h-[172px] object-cover"
          />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-2 px-1 pb-1">
          <div class="flex items-center gap-2">
            <h2 class="text-[32f3f4] text-[30f3f4] text-[29f3f4]"></h2>
            <h3 class="text-[30f3f4]"></h3>
            <span class="text-[29f3f4]"></span>
            <span class="text-[28f3f4]"></span>
            <span class="text-[27f3f4]"></span>
            <span class="text-[26f3f4]"></span>
            <span class="text-[25f3f4]"></span>
            <span class="text-[24f3f4]"></span>
            <span class="text-[23f3f4]"></span>
            <span class="text-[22f3f4]"></span>
            <span class="text-[21f3f4]"></span>
            <span class="text-[20f3f4]"></span>
            <span class="text-[19f3f4]"></span>
            <span class="text-[18f3f4]"></span>
            <span class="text-[17.5px] font-medium text-slate-700">Produkt1</span>
            <Tag value="Neu" rounded severity="success" class="!bg-emerald-100 !text-emerald-700 !text-xs !font-semibold !px-2 !py-1" />
          </div>

          <p class="text-[31f3f4]"></p>
          <p class="text-[14px] leading-9 text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>

          <div class="flex justify-end items-center gap-2 pt-4">
            <InputNumber
              v-model="state.quantity"
              showButtons
              buttonLayout="vertical"
              :min="1"
              inputClass="!w-[64px]"
            />
            <Button
              label="Hinzufügen"
              icon="pi pi-plus"
              iconPos="right"
              class="!bg-emerald-500 !border-emerald-500 hover:!bg-emerald-600 hover:!border-emerald-600"
              @click="addItem"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
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

const addItem = () => {
  // action placeholder
};
</script>