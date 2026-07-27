<template>
  <div class="w-64 bg-white rounded-xl flex flex-col gap-[7px]">
    <div class="w-full p-[17.5px] flex flex-col gap-8 rounded-md">
      <div class="w-full flex justify-between items-center gap-[7px]">
        <span class="font-medium text-[17.5px]">Paket 1</span>
        <Tag severity="info" value="Beliebt" icon="pi pi-arrow-up-right" />
      </div>
      <div class="w-full flex flex-col gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked1" binary />
          <label class="text-sm">Unbegrenzte Projekte</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked2" binary />
          <label class="text-sm">Unbegrenzte Dashboards</label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="checked3" binary />
          <label class="text-sm">Erweiterte Analytics</label>
        </div>
      </div>
      <div class="w-full flex gap-[7px]">
        <Button label="Jetzt starten" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>