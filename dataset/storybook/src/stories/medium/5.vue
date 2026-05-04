<template>
  <Card
    :pt="{
      root: 'w-full max-w-md overflow-hidden',
      footer: 'flex items-center justify-end gap-2',
    }"
  >
    <template #header>
      <img src="/images/primevue.png" alt="primevue" />
    </template>
    <template #title>Produkt1 <Tag value="Neu" /></template>
    <template #content>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error
        repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa
        ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <InputNumber
        model-value="0"
        show-buttons
        button-layout="stacked"
        input-class="w-fit"
        class="w-[128px]"
      />
      <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" severity="primary" />
    </template>
  </Card>
</template>

<script setup lang="ts">
  import Tag from 'primevue/tag'
  import Card from 'primevue/card'
  import Button from 'primevue/button'
  import InputNumber from 'primevue/inputnumber'
</script>
