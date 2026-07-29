<template>
  <Card class="w-full max-w-[450px] overflow-hidden">
    <template #header>
      <img
        alt="Product image"
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
        class="h-48 w-full object-cover"
      />
    </template>
    <template #title>
      <div class="flex items-center gap-3">
        <span class="text-xl font-semibold text-surface-900 dark:text-surface-0">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="m-0 leading-relaxed text-surface-600 dark:text-surface-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        sed consequuntur error repudiandae numquam deserunt quisquam
        repellat libero asperiores earum nam nobis, culpa ratione quam
        perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-3 pt-2">
        <InputNumber
          v-model="quantity"
          show-buttons
          button-layout="stacked"
          class="w-20"
          :min="1"
        />
        <Button
          label="Hinzufügen"
          icon="pi pi-plus"
          icon-pos="right"
          severity="primary"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import InputNumber from 'primevue/inputnumber';
import Button from 'primevue/button';

const quantity = ref(1);
</script>