<template>
  <div class="w-[536px] p-6">
    <Card
      class="overflow-hidden"
      :pt="{
        root: 'overflow-hidden border border-surface-200 shadow-sm',
        header: 'h-[172px] overflow-hidden bg-surface-950',
        body: '!p-0 !gap-0',
        content: '!p-0',
      }"
    >
      <template #header>
        <div
          class="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(48,180,82,0.75),transparent_28%),radial-gradient(circle_at_78%_95%,rgba(43,181,84,0.7),transparent_20%),linear-gradient(135deg,#02081b_10%,#00131d_55%,#03081a)]"
        ></div>
      </template>

      <template #content>
        <div class="flex flex-col gap-[7px] p-[17.5px]">
          <div class="flex items-center gap-[7px]">
            <span class="text-[17.5px] font-medium">Produkt1</span>
            <Tag
              value="Neu"
              rounded
              :dt="{
                primary: {
                  background: '#d1fae5',
                  color: '#047857',
                },
              }"
            />
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
              button-layout="vertical"
              class="w-32"
              :pt="{
                pcInputText: {
                  root: 'h-[31px] !rounded-r-none !py-[7px] text-sm',
                },
                buttonGroup: 'h-[31px]',
                incrementButton: 'w-[35px] !p-0',
                decrementButton: 'w-[35px] !p-0',
              }"
            />
            <Button
              label="Hinzufügen"
              icon="pi pi-plus"
              icon-pos="right"
              size="small"
              :dt="{
                primary: {
                  background: '#10b981',
                  borderColor: '#10b981',
                  hoverBackground: '#059669',
                  hoverBorderColor: '#059669',
                  activeBackground: '#047857',
                  activeBorderColor: '#047857',
                },
              }"
            />
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