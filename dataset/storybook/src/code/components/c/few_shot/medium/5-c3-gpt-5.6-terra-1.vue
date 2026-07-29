<template>
  <Card class="w-[488px] overflow-hidden shadow-sm">
    <template #header>
      <Image
        src="https://primefaces.org/cdn/primevue/images/usercard.png"
        alt="Produktgrafik"
        class="block h-[172px] w-full"
        image-class="h-[172px] w-full object-cover"
      />
    </template>

    <template #content>
      <div class="flex items-center gap-2">
        <span class="font-semibold">Produkt1</span>
        <Tag value="Neu" severity="success" />
      </div>
      <p class="mt-2 text-sm leading-6">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam
        deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate
        neque quas!
      </p>
    </template>

    <template #footer>
      <div class="flex items-center justify-end gap-2">
        <InputNumber v-model="quantity" :min="1" show-buttons class="w-32" input-class="w-full" />
        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="success" />
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