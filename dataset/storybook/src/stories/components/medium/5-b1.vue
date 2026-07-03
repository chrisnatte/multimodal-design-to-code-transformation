<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl">
    <div class="flex flex-col gap-2 p-2"></div>

    <div class="flex flex-col gap-2 p-4 rounded-md">
      <div class="flex items-center gap-2">
        <span class="text-[18px] font-medium">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </div>

      <div class="flex flex-col">
        <p class="text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </div>

      <div class="flex items-center justify-end gap-2 pt-4">
        <InputNumber v-model="state.quantity" :min="0" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const state = reactive({
  quantity: 1
})
</script>