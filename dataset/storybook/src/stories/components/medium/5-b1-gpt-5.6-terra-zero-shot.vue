<template>
  <div class="flex w-[488px] flex-col gap-[7px] overflow-hidden rounded-xl bg-white">
    <div class="h-[172px] p-[10px]"></div>

    <div class="flex h-[212px] flex-col gap-[7px] rounded-md p-[17.5px]">
      <div class="flex h-[22px] items-center gap-[7px]">
        <span class="text-[17.5px] font-medium leading-[22px]">Produkt1</span>
        <Tag value="Neu" severity="primary" rounded />
      </div>

      <div class="flex h-[92px] flex-col">
        <span class="text-sm font-normal leading-[23px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione
          quam perferendis esse, cupiditate neque quas!
        </span>
      </div>

      <div class="flex h-[49px] items-center justify-end gap-2 pt-4">
        <InputNumber
          v-model="quantity"
          showButtons
          buttonLayout="stacked"
          incrementButtonIcon="pi pi-angle-up"
          decrementButtonIcon="pi pi-angle-down"
          class="w-32"
          inputClass="h-[31px] w-[94px] text-sm"
        />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" class="h-[33px]" />
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