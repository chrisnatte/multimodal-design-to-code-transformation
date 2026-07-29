<template>
  <Card class="w-[488px] overflow-hidden">
    <template #header>
      <Image
        src="https://placehold.co/976x344/020a20/020a20"
        alt="Produkt1"
        image-class="block h-[172px] w-full object-cover"
      />
    </template>
    <template #content>
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <span class="text-base font-medium">Produkt1</span>
          <Tag value="Neu" severity="success" />
        </div>
        <p class="m-0 text-sm leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
          repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
          ratione quam perferendis esse, cupiditate neque quas!
        </p>
      </div>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <InputNumber
          v-model="quantity"
          input-id="product-quantity"
          :min="1"
          show-buttons
          button-layout="vertical"
          class="w-32"
          input-class="w-full"
        />
        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" />
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