<template>
  <div class="p-6 bg-white w-fit">
    <Card class="w-[256px] rounded-xl shadow-sm border border-surface-100">
      <template #title>
        <div class="flex justify-between items-center w-full">
          <span class="text-[17.5px] font-medium text-surface-900">Paket 1</span>
          <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="font-bold text-[12.25px]" />
        </div>
      </template>
      <template #content>
        <div class="flex flex-col gap-4 mt-2">
          <div class="flex items-center gap-2">
            <Checkbox v-model="check1" inputId="chk1" binary readonly />
            <label for="chk1" class="text-sm text-surface-700">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check2" inputId="chk2" binary readonly />
            <label for="chk2" class="text-sm text-surface-700">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check3" inputId="chk3" binary readonly />
            <label for="chk3" class="text-sm text-surface-700">Erweiterte Analytics</label>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="mt-2">
          <Button label="Jetzt starten" class="w-full font-medium" />
        </div>
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