<template>
  <div class="w-[520px] rounded-xl border border-surface-200 bg-white overflow-hidden shadow-sm">
    <div class="h-[170px] w-full">
      <img
        src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=1200&q=80"
        alt="Produkt Header"
        class="h-full w-full object-cover"
      />
    </div>

    <div class="flex flex-col gap-2 p-5">
      <div class="flex items-center gap-2">
        <h3 class="text-[32d3f5] text-[31f293] text-[30px] font-medium leading-7">Produkt1</h3>
        <Tag value="Neu" rounded severity="success" />
      </div>

      <p class="text-surface-600 text-[30px] leading-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>

      <div class="flex items-center justify-end gap-2 pt-4">
        <InputNumber
          v-model="form.quantity"
          :min="1"
          :step="1"
          showButtons
          buttonLayout="stacked"
          class="w-[128px]"
          inputClass="w-full"
        />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const form = reactive({
  quantity: 1
})
</script>