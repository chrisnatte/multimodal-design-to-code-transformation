<template>
  <div class="flex flex-col gap-2 bg-white rounded-xl">
    <div class="flex flex-col gap-2.5 p-2.5"></div>

    <div class="flex flex-col gap-2 rounded-md p-4">
      <div class="flex flex-row gap-2 items-center">
        <span class="text-[18px] font-medium">Produkt1</span>
        <Tag value="Neu" rounded severity="info" />
      </div>

      <div class="flex flex-col">
        <p class="text-sm font-normal m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </div>

      <div class="flex flex-row items-center justify-end gap-2 pt-4">
        <InputNumber
          v-model="state.quantity"
          :min="0"
          showButtons
          buttonLayout="stacked"
          inputId="quantity"
        />
        <Button
          label="Hinzufügen"
          icon="pi pi-plus"
          iconPos="right"
          severity="primary"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const state = reactive({
  quantity: 1
})
</script>