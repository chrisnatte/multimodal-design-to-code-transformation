<template>
  <div class="flex flex-col gap-2 rounded-xl bg-white p-0">
    <div class="flex flex-col gap-2 p-2.5"></div>

    <div class="flex flex-col gap-2 rounded-md p-4">
      <div class="flex flex-row items-center gap-2">
        <span class="text-[17.5px] font-medium">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </div>

      <div class="flex flex-col">
        <p class="text-sm font-normal">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </div>

      <div class="flex flex-row items-center justify-end gap-2 pt-4">
        <InputNumber v-model="state.quantity" :min="0" showButtons buttonLayout="stacked" class="w-28" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'

const state = reactive({
  quantity: 1
})
</script>