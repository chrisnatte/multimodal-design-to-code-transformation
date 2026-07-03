<template>
  <Card>
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex flex-col gap-2 p-2.5"></div>

        <div class="flex flex-col gap-2 p-4 rounded-md">
          <div class="flex items-center gap-2">
            <span class="text-lg font-medium">Produkt1</span>
            <Tag value="Neu" severity="primary" rounded />
          </div>

          <div class="flex flex-col">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
              esse, cupiditate neque quas!
            </span>
          </div>

          <div class="flex items-center justify-end gap-2 pt-4">
            <InputNumber v-model="form.quantity" />
            <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" />
          </div>
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

const form = reactive({
  quantity: 1,
})
</script>