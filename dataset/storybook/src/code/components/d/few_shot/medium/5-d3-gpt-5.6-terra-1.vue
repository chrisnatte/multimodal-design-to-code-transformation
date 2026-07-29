<template>
  <div class="p-6">
    <Card
      class="w-[488px] overflow-hidden"
      :pt="{
        body: '!p-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div
          class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950"
        >
          <div
            class="absolute -top-8 left-16 h-52 w-52 rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/70 via-emerald-900/50 to-slate-950/80 shadow-2xl"
          />
          <div
            class="absolute -bottom-20 right-16 h-36 w-36 rounded-full border border-emerald-300/30 bg-gradient-to-br from-emerald-400/70 via-emerald-900/50 to-slate-950/80"
          />
          <div class="absolute inset-x-0 bottom-0 h-8 border-t border-emerald-500/10" />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-[7px] p-[17.5px]">
          <div class="flex items-center gap-[7px]">
            <span class="text-[17.5px] font-medium">Produkt1</span>
            <Tag value="Neu" severity="success" rounded />
          </div>

          <p class="m-0 text-sm leading-[23px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
            repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
            ratione quam perferendis esse, cupiditate neque quas!
          </p>

          <div class="flex items-center justify-end gap-2 pt-4">
            <InputNumber
              v-model="quantity"
              input-id="product-quantity"
              :min="1"
              show-buttons
              button-layout="stacked"
              class="w-32"
              input-class="w-full"
            />
            <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="success" />
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