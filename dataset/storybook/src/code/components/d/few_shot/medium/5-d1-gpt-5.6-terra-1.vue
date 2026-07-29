<template>
  <div class="p-6">
    <Card
      :pt="{
        root: 'w-[488px] overflow-hidden',
        header: 'h-[172px] overflow-hidden',
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div
          class="h-full w-full bg-[radial-gradient(circle_at_35%_25%,rgba(34,197,94,0.65),transparent_28%),radial-gradient(circle_at_76%_60%,rgba(34,197,94,0.7),transparent_18%),linear-gradient(135deg,#020617_20%,#021026_55%,#001a13)]"
        />
      </template>

      <template #content>
        <div class="flex flex-col gap-2 p-[17.5px]">
          <div class="flex items-center gap-2">
            <span class="text-base font-medium">Produkt1</span>
            <Tag value="Neu" severity="primary" rounded />
          </div>

          <p class="m-0 text-sm leading-[23px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
            repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
            ratione quam perferendis esse, cupiditate neque quas!
          </p>

          <div class="flex items-center justify-end gap-2 pt-4">
            <InputNumber
              v-model="quantity"
              :min="1"
              show-buttons
              button-layout="stacked"
              class="w-32"
              input-class="w-full"
            />
            <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="primary" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)
</script>