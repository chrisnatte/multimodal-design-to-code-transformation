<template>
  <main class="min-h-screen bg-white p-6">
    <div class="w-full max-w-[488px] overflow-hidden rounded-xl border border-surface-200 bg-white shadow-sm">
      <div
        class="relative h-[172px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-950 to-emerald-950"
        aria-label="Produktbild"
      >
        <div class="absolute inset-x-0 bottom-0 h-8 bg-[linear-gradient(rgba(16,185,129,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.08)_1px,transparent_1px)] bg-[size:18px_18px]"></div>
        <div class="absolute -left-3 -top-10 h-52 w-52 rounded-full border border-emerald-300/20 bg-[radial-gradient(circle_at_45%_30%,rgba(74,222,128,0.9),rgba(22,101,52,0.65)_45%,rgba(15,23,42,0.9)_72%)] shadow-[inset_0_-20px_30px_rgba(15,23,42,0.9)]"></div>
        <div class="absolute -bottom-14 right-16 h-32 w-32 rounded-full border border-emerald-300/20 bg-[radial-gradient(circle_at_45%_30%,rgba(74,222,128,0.9),rgba(22,101,52,0.65)_48%,rgba(15,23,42,0.9)_75%)]"></div>
        <i class="pi pi-shield absolute left-[112px] top-[48px] text-7xl text-emerald-400 drop-shadow-lg"></i>
        <i class="pi pi-shield absolute -bottom-4 right-[72px] text-5xl text-emerald-300"></i>
      </div>

      <div class="flex flex-col gap-[7px] rounded-b-md p-[17.5px]">
        <div class="flex items-center gap-[7px]">
          <span class="text-[17.5px] font-medium text-slate-700">Produkt1</span>
          <Tag value="Neu" severity="success" rounded class="text-xs" />
        </div>

        <div class="flex flex-col">
          <span class="text-sm leading-[23px] text-slate-700">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </span>
        </div>

        <div class="flex items-center justify-end gap-2 pt-4">
          <InputNumber
            v-model="quantity"
            :min="1"
            show-buttons
            button-layout="stacked"
            class="w-32"
            input-class="w-full"
          />
          <Button label="Hinzufügen" icon="pi pi-plus" icon-pos="right" @click="addProduct" />
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputNumber from 'primevue/inputnumber'
import Tag from 'primevue/tag'

const quantity = ref(1)

const addProduct = () => {
  quantity.value = quantity.value
}
</script>