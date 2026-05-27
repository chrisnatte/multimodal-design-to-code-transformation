<template>
  <div class="p-6 bg-surface-100 min-h-screen">
    <Card class="max-w-[520px] rounded-2xl overflow-hidden shadow-sm border border-surface-200">
      <template #header>
        <img
          src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?auto=format&fit=crop&w=1200&q=80"
          alt="Produktbild"
          class="w-full h-44 object-cover"
        />
      </template>

      <template #content>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <div class="flex items-center gap-2">
              <h2 class="text-3xl font-semibold text-surface-700 leading-none">Produkt1</h2>
              <Tag value="Neu" severity="success" rounded class="text-xs" />
            </div>

            <p class="text-2xl leading-relaxed text-surface-600">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
              numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
              esse, cupiditate neque quas!
            </p>
          </div>

          <div class="flex justify-end">
            <div class="flex items-center gap-2">
              <InputNumber
                v-model="form.quantity"
                showButtons
                buttonLayout="vertical"
                :min="1"
                :step="1"
                class="w-32"
                inputClass="w-full"
              />
              <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" />
            </div>
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