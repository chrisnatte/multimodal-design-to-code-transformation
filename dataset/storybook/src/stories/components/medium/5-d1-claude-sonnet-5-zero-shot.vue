<template>
  <Card class="w-[488px] shadow-md overflow-hidden">
    <template #header>
      <div class="relative h-[172px] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900 flex items-center justify-center">
        <img
          src="https://placehold.co/200x200/1a2e2a/34d399?text=+"
          alt="Produkt1"
          class="w-32 h-32 rounded-full object-cover"
        />
      </div>
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-lg font-medium">Produkt1</span>
        <Tag value="Neu" severity="success" rounded class="text-xs" />
      </div>
    </template>
    <template #content>
      <p class="text-sm text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex items-center justify-end gap-2 pt-4">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" inputClass="w-16" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const quantity = ref(1)
</script>