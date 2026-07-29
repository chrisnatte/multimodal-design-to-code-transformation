<template>
  <Card class="w-[450px] overflow-hidden border border-surface-200 shadow-sm">
    <template #header>
      <img
        alt="Product graphic"
        src="https://primefaces.org/cdn/primevue/images/card-vue.jpg"
        class="h-48 w-full object-cover"
      />
    </template>
    <template #title>
      <div class="flex items-center gap-3 pt-2">
        <span class="text-xl font-semibold text-surface-800">Produkt1</span>
        <Tag
          value="Neu"
          severity="success"
          :pt="{
            root: 'bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium',
          }"
        />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-sm leading-relaxed text-surface-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
        sed consequuntur error repudiandae numquam deserunt quisquam
        repellat libero asperiores earum nam nobis, culpa ratione quam
        perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="mt-2 flex items-center justify-end gap-3">
        <InputNumber
          v-model="quantity"
          show-buttons
          button-layout="stacked"
          :min="1"
          class="h-10 w-20"
          input-class="text-center"
        />
        <Button
          label="Hinzufügen"
          icon="pi pi-plus"
          icon-pos="right"
          severity="success"
          class="h-10 px-4"
        />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>