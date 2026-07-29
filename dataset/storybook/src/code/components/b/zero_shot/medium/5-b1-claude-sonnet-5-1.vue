<template>
  <div class="flex flex-col gap-2.5 p-6 bg-white">
    <div class="flex flex-col gap-[7px] rounded-xl bg-white">
      <!-- header -->
      <div class="flex flex-col gap-2.5 p-2.5 w-[488px]">
        <!-- header content placeholder (no children provided) -->
      </div>

      <!-- body -->
      <div class="flex flex-col gap-[7px] rounded-md p-[17.5px] w-[488px]">
        <!-- caption -->
        <div class="flex items-center gap-[7px] w-full">
          <span class="text-[17.5px] font-medium">Produkt1</span>
          <Tag value="Neu" severity="success" rounded></Tag>
        </div>

        <!-- content -->
        <div class="flex flex-col w-full">
          <p class="text-sm font-normal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
            consequuntur error repudiandae numquam deserunt quisquam repellat libero
            asperiores earum nam nobis, culpa ratione quam perferendis esse,
            cupiditate neque quas!
          </p>
        </div>

        <!-- footer -->
        <div class="flex items-center justify-end gap-2 w-full pt-4">
          <InputNumber v-model="quantity" showButtons buttonLayout="stacked" inputClass="w-24" />
          <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>