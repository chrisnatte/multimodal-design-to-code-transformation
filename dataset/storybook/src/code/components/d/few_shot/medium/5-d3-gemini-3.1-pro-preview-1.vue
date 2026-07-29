<template>
  <Card class="w-full max-w-[488px] overflow-hidden">
    <template #header>
      <div class="h-[172px] w-full bg-slate-900 relative flex items-center justify-center overflow-hidden">
        <!-- Placeholder for the specific 3D graphic in the mockup -->
        <div class="absolute inset-0 bg-gradient-to-b from-emerald-900/40 to-slate-900"></div>
      </div>
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-lg font-medium text-surface-900 dark:text-surface-0">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="m-0 text-sm leading-relaxed text-surface-600 dark:text-surface-300">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2 pt-2">
        <InputNumber
          v-model="quantity"
          show-buttons
          button-layout="stacked"
          class="w-32"
          :pt="{
            root: 'h-10',
            input: 'w-full',
          }"
        />
        <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="primary" class="h-10" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'
  import Button from 'primevue/button'
  import InputNumber from 'primevue/inputnumber'

  const quantity = ref(1)
</script>