<template>
  <div class="flex flex-col gap-2.5 p-6">
    <Card>
      <div class="flex gap-[7px]">
        <span>Produkt1</span>
        <Tag value="Neu" :rounded="true" />
      </div>
      <template #content>
        <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</span>
      </template>
      <template #footer>
        <InputNumber
          buttonLayout="stacked"
          v-model="_state.n16_2409"
          showButtons
          value="1"
         />
      </template>
      <template #footer>
        <Button label="Hinzufügen" />
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const _state = reactive({ n16_2409: null })
</script>
