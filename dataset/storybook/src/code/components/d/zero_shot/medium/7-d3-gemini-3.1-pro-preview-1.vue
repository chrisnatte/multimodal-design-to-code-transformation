<template>
  <div class="p-6 flex items-center justify-center bg-white">
    <Card class="w-64 shadow-sm border border-surface-200 rounded-xl overflow-hidden">
      <template #title>
        <div class="flex justify-between items-center">
          <span class="text-[17.5px] font-medium text-surface-900">Paket 1</span>
          <Tag 
            value="Beliebt" 
            severity="info" 
            icon="pi pi-arrow-up-right" 
            class="text-xs font-bold px-2 py-1"
            :pt="{ icon: { class: 'text-[10.5px] mr-1' } }"
          />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-1">
          <div class="flex items-center gap-2">
            <Checkbox v-model="check1" inputId="check1" binary />
            <label for="check1" class="text-sm text-surface-700 cursor-pointer">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check2" inputId="check2" binary />
            <label for="check2" class="text-sm text-surface-700 cursor-pointer">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check3" inputId="check3" binary />
            <label for="check3" class="text-sm text-surface-700 cursor-pointer">Erweiterte Analytics</label>
          </div>
        </div>
      </template>
      <template #footer>
        <Button label="Jetzt starten" class="w-full mt-2 font-medium" />
      </template>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const check1 = ref(true);
const check2 = ref(true);
const check3 = ref(true);
</script>