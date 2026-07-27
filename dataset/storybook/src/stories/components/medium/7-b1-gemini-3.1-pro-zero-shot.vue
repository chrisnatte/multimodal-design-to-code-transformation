<template>
  <div class="flex flex-col w-[256px] bg-white rounded-xl gap-[7px]">
    <div class="flex flex-col w-full rounded-md gap-8 p-[17.5px]">
      <div class="flex flex-row w-full justify-between items-center gap-[7px]">
        <span class="font-medium text-[17.5px] font-sans text-surface-900">Paket 1</span>
        <Tag severity="info" value="Beliebt" icon="pi pi-arrow-up-right" :rounded="false" />
      </div>
      
      <div class="flex flex-col w-full gap-4">
        <div class="flex items-center gap-2">
          <Checkbox v-model="check1" inputId="cb1" :binary="true" />
          <label for="cb1" class="text-[14px] font-normal font-sans text-surface-700 cursor-pointer">Unbegrenzte Projekte </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="check2" inputId="cb2" :binary="true" />
          <label for="cb2" class="text-[14px] font-normal font-sans text-surface-700 cursor-pointer">Unbegrenzte Dashboards </label>
        </div>
        <div class="flex items-center gap-2">
          <Checkbox v-model="check3" inputId="cb3" :binary="true" />
          <label for="cb3" class="text-[14px] font-normal font-sans text-surface-700 cursor-pointer">Erweiterte Analytics</label>
        </div>
      </div>

      <div class="flex flex-row w-full gap-[7px]">
        <Button label="Jetzt starten" severity="primary" class="w-full" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const check1 = ref(true);
const check2 = ref(true);
const check3 = ref(true);
</script>