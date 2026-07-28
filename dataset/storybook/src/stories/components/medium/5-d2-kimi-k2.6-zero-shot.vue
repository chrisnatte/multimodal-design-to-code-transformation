<template>
  <div class="flex justify-center p-8">
    <Card class="w-[488px] overflow-hidden rounded-xl border border-gray-100 shadow-sm">
      <template #header>
        <img
          src="https://placehold.co/488x172/022c22/10b981?text="
          alt="Produkt Header"
          class="w-full h-[172px] object-cover block"
        />
      </template>
      <template #content>
        <div class="flex flex-col gap-2">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium text-gray-900">Produkt1</span>
            <Tag value="Neu" severity="success" rounded />
          </div>
          <p class="m-0 text-sm text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>
        </div>
      </template>
      <template #footer>
        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber
            v-model="quantity"
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