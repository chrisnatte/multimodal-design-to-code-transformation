<template>
  <div class="min-h-screen bg-gray-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-2xl overflow-hidden rounded-2xl shadow-sm">
      <template #header>
        <div class="h-44 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1636955816868-fcb881e57954?auto=format&fit=crop&w=1200&q=80"
            alt="Produktbild"
            class="h-full w-full object-cover"
          />
        </div>
      </template>

      <template #content>
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-3">
            <h2 class="text-3xl font-semibold text-slate-700">Produkt1</h2>
            <Tag value="Neu" severity="success" class="text-sm" />
          </div>

          <p class="text-2xl leading-relaxed text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>

          <div class="flex items-center justify-end gap-3 pt-2">
            <InputNumber
              v-model="form.quantity"
              :min="1"
              showButtons
              buttonLayout="stacked"
              inputClass="text-center"
              class="w-32"
            />
            <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import Card from 'primevue/card'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'

const form = reactive({
  quantity: 1
})
</script>