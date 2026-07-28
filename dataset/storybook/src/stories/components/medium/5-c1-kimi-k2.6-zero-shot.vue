<template>
  <div class="p-4 max-w-lg mx-auto">
    <Card class="rounded-xl shadow-md overflow-hidden">
      <template #header>
        <img
          src="https://placehold.co/800x400/052e16/22c55e?text=Produktbild"
          alt="Produktbild"
          class="w-full h-48 object-cover"
        />
      </template>
      <template #content>
        <div class="flex items-center gap-2 mb-2">
          <span class="text-xl font-semibold text-gray-900">Produkt1</span>
          <Tag value="Neu" severity="success" class="text-xs" />
        </div>
        <p class="text-gray-700 text-sm leading-relaxed mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
        <div class="flex justify-end items-center gap-3">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="stacked"
            :min="1"
            class="w-24"
          />
          <Button
            label="Hinzufügen"
            icon="pi pi-plus"
            iconPos="right"
            severity="success"
          />
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>