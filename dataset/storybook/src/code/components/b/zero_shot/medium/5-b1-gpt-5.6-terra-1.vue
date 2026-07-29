<template>
  <div class="flex w-[536px] flex-col gap-2.5 bg-white p-6">
    <div class="flex h-[391px] w-[488px] flex-col gap-[7px] rounded-xl bg-white">
      <div class="flex h-[172px] w-full flex-col gap-2.5 p-2.5"></div>

      <div class="flex h-[212px] w-full flex-col gap-[7px] rounded-md p-[17.5px]">
        <div class="flex w-full items-center gap-[7px]">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" severity="primary" rounded />
        </div>

        <div class="flex w-full flex-col">
          <span class="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </span>
        </div>

        <div class="flex w-full items-center justify-end gap-2 pt-4">
          <InputNumber
            v-model="quantity"
            showButtons
            buttonLayout="vertical"
            incrementButtonIcon="pi pi-angle-up"
            decrementButtonIcon="pi pi-angle-down"
            class="w-32"
            inputClass="w-[94px] h-[31px] text-sm"
            incrementButtonClass="w-[35px]"
            decrementButtonClass="w-[35px]"
          />
          <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" class="h-[33px]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)
</script>