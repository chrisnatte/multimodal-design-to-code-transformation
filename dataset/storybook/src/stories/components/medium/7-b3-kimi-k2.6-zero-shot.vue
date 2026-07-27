<template>
  <Card class="w-64 rounded-xl">
    <template #content>
      <div class="flex flex-col p-[17.5px] gap-8">
        <div class="flex justify-between items-center">
          <span class="text-[17.5px] font-medium">Paket 1</span>
          <Tag value="Beliebt" severity="info" icon="pi pi-arrow-up-right" />
        </div>
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="checked1" binary inputId="check1" />
            <label for="check1" class="text-sm">Unbegrenzte Projekte</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="checked2" binary inputId="check2" />
            <label for="check2" class="text-sm">Unbegrenzte Dashboards</label>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="checked3" binary inputId="check3" />
            <label for="check3" class="text-sm">Erweiterte Analytics</label>
          </div>
        </div>
        <div class="flex">
          <Button label="Jetzt starten" class="w-full" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';
import Checkbox from 'primevue/checkbox';
import Button from 'primevue/button';

const checked1 = ref(true);
const checked2 = ref(true);
const checked3 = ref(true);
</script>