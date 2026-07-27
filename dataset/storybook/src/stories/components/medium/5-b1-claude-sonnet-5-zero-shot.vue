<template>
  <div class="flex flex-col gap-2 p-0 bg-white rounded-xl w-[488px]">
    <!-- header -->
    <div class="flex flex-col gap-2.5 p-2.5"></div>

    <!-- body -->
    <div class="flex flex-col gap-2 p-4 rounded-md">
      <!-- caption -->
      <div class="flex items-center gap-2 w-full">
        <span class="font-medium text-lg flex-1">Produkt1</span>
        <Tag value="Neu" severity="success" rounded></Tag>
      </div>

      <!-- content -->
      <div class="flex flex-col w-full">
        <p class="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed
          consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </div>

      <!-- footer -->
      <div class="flex items-center justify-end gap-2 pt-4 w-full">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" class="w-32" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="primary" />
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