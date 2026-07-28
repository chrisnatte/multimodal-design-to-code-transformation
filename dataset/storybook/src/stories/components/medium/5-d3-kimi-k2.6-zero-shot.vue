<template>
  <Card class="w-[488px] rounded-xl overflow-hidden shadow-sm bg-white">
    <template #header>
      <img
        alt="Produkt1"
        class="w-full h-[172px] object-cover block"
        src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        style="background: linear-gradient(135deg, #064e3b 0%, #020617 100%);"
      />
    </template>
    <template #title>
      <div class="flex items-center gap-2">
        <span class="text-lg font-medium text-slate-800">Produkt1</span>
        <Tag value="Neu" severity="success" rounded />
      </div>
    </template>
    <template #content>
      <p class="text-sm text-slate-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
      </p>
    </template>
    <template #footer>
      <div class="flex justify-end items-center gap-2">
        <InputNumber v-model="quantity" showButtons buttonLayout="stacked" :min="1" size="small" class="w-32" inputClass="text-center" />
        <Button label="Hinzufügen" icon="pi pi-plus" iconPos="right" severity="success" size="small" />
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const quantity = ref(1);
</script>