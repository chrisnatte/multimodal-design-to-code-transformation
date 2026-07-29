<template>
  <Card
    class="w-[488px] overflow-hidden"
    :pt="{
      body: '!p-0',
      content: '!p-0',
    }"
  >
    <template #header>
      <Image
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
        alt="Produkt1"
        image-class="h-[172px] w-full object-cover"
      />
    </template>

    <template #content>
      <div class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
          <h2 class="text-base font-medium">Produkt1</h2>
          <Tag value="Neu" severity="success" />
        </div>

        <p class="m-0 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </p>

        <div class="mt-3 flex items-center justify-end gap-2">
          <InputNumber
            v-model="quantity"
            input-id="quantity"
            :min="1"
            :use-grouping="false"
            show-buttons
            button-layout="vertical"
            class="w-32"
            input-class="w-full"
          />
          <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="success" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Image from 'primevue/image'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)
</script>