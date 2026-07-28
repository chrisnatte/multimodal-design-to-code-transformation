<template>
  <div class="flex justify-center p-8 bg-surface-50 dark:bg-surface-900 min-h-screen">
    <Card class="w-full max-w-[500px] overflow-hidden shadow-sm border border-surface-200 dark:border-surface-700">
      <template #header>
        <img
          alt="Product header"
          src="https://www.primefaces.org/cdn/primevue/images/usercard.png"
          class="w-full h-[200px] object-cover"
          style="background: linear-gradient(to bottom, #0f172a, #020617);"
        />
      </template>
      <template #title>
        <div class="flex items-center gap-3">
          <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Produkt1</span>
          <Tag value="Neu" severity="success" class="!bg-green-100 !text-green-700 dark:!bg-green-900/40 dark:!text-green-400 px-2 py-0.5 text-xs font-medium rounded-md"></Tag>
        </div>
      </template>
      <template #content>
        <p class="m-0 text-surface-600 dark:text-surface-300 leading-relaxed text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam
          repellat libero asperiores earum nam nobis, culpa ratione quam
          perferendis esse, cupiditate neque quas!
        </p>
      </template>
      <template #footer>
        <div class="flex justify-end items-center gap-3 mt-2">
          <InputNumber
            v-model="quantity"
            inputId="quantity"
            showButtons
            buttonLayout="stacked"
            :min="1"
            :max="99"
            class="w-20"
            :pt="{
              root: { class: 'h-10' },
              input: { class: 'w-full text-center h-10' },
              buttonGroup: { class: 'w-6' },
              incrementButton: { class: 'h-5 px-0' },
              decrementButton: { class: 'h-5 px-0' }
            }"
          />
          <Button
            label="Hinzufügen"
            icon="pi pi-plus"
            iconPos="right"
            severity="success"
            class="h-10 px-4 font-medium"
          />
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