<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <div class="flex w-full flex-col gap-[7px] rounded-xl bg-white">
      <div class="flex h-[172px] w-full flex-col gap-2.5 p-2.5"></div>

      <div class="flex h-[212px] w-full flex-col gap-[7px] rounded-md bg-white p-[17.5px]">
        <div class="flex h-[22px] items-center gap-[7px]">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" rounded />
        </div>

        <div class="flex h-[92px] flex-col">
          <span class="text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
            repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
            quam perferendis esse, cupiditate neque quas!
          </span>
        </div>

        <div class="flex h-[49px] items-center justify-end gap-2 pt-4">
          <InputNumber
            v-model="quantity"
            :min="1"
            show-buttons
            button-layout="vertical"
            increment-button-icon="pi pi-angle-up"
            decrement-button-icon="pi pi-angle-down"
            class="w-32"
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