<template>
  <div class="min-h-screen bg-surface-100 p-6 flex items-start justify-center">
    <Card class="w-full max-w-2xl overflow-hidden shadow-sm rounded-2xl">
      <template #header>
        <img
          src="https://images.unsplash.com/photo-1633412802994-5c058f151b66?auto=format&fit=crop&w=1200&q=80"
          alt="Produktbild"
          class="w-full h-44 object-cover"
        />
      </template>

      <template #content>
        <div class="flex flex-col gap-5">
          <div class="flex items-center gap-3">
            <h2 class="text-3xl font-semibold text-slate-700 leading-none">Produkt1</h2>
            <Tag value="Neu" severity="success" rounded />
          </div>

          <p class="text-slate-600 text-2xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
          </p>

          <div class="flex justify-end items-center gap-3 pt-2">
            <InputNumber
              v-model="form.quantity"
              :min="1"
              showButtons
              buttonLayout="vertical"
              inputClass="text-center"
            />
            <Button
              label="Hinzufügen"
              icon="pi pi-plus"
              iconPos="right"
              severity="success"
            />
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const form = reactive({
  quantity: 1
});
</script>