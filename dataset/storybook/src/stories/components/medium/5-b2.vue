<template>
  <Card class="rounded-xl bg-white">
    <template #header>
      <div class="flex flex-col gap-2.5 p-2.5"></div>
    </template>

    <template #content>
      <div class="flex flex-col gap-2 rounded-md p-4">
        <div class="flex flex-row items-center gap-2">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" rounded />
        </div>

        <div class="flex flex-col">
          <p class="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
            numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </p>
        </div>

        <div class="flex flex-row items-center justify-end gap-2 pt-4">
          <InputNumber
            v-model="state.quantity"
            :min="0"
            showButtons
            buttonLayout="stacked"
            class="w-24"
          />
          <Button
            label="Hinzufügen"
            icon="pi pi-plus"
            iconPos="right"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const state = reactive({
  quantity: 1
})
</script>