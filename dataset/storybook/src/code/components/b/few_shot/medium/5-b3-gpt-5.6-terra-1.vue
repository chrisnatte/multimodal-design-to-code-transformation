<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-[488px] flex-col gap-[7px] rounded-xl bg-white">
      <div class="h-[172px] w-full p-2.5"></div>

      <div class="flex w-full flex-col gap-[7px] rounded-md bg-white p-[17.5px]">
        <div class="flex items-center gap-[7px]">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" rounded />
        </div>

        <div class="flex flex-col">
          <span class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur
            error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis,
            culpa ratione quam perferendis esse, cupiditate neque quas!
          </span>
        </div>

        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber
            v-model="quantity"
            input-id="product-quantity"
            show-buttons
            button-layout="stacked"
            class="w-32"
            input-class="w-[94px]"
          />
          <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)
</script>