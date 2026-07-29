<template>
  <div class="p-6 bg-white flex flex-col gap-2.5 items-start">
    <Card class="w-64 rounded-xl overflow-hidden">
      <template #content>
        <div class="flex flex-col gap-8">
          <div class="flex items-center justify-between w-full">
            <span class="text-lg font-medium">Paket 1</span>
            <Tag severity="info" icon="pi pi-arrow-up-right">
              <span class="text-xs font-bold">Beliebt</span>
            </Tag>
          </div>

          <div class="flex flex-col gap-4 w-full">
            <div class="flex items-center gap-2">
              <Checkbox v-model="feature1" binary inputId="feature1" />
              <label for="feature1" class="text-sm">Unbegrenzte Projekte</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="feature2" binary inputId="feature2" />
              <label for="feature2" class="text-sm">Unbegrenzte Dashboards</label>
            </div>
            <div class="flex items-center gap-2">
              <Checkbox v-model="feature3" binary inputId="feature3" />
              <label for="feature3" class="text-sm">Erweiterte Analytics</label>
            </div>
          </div>

          <div class="flex gap-1.5 w-full">
            <Button label="Jetzt starten" class="w-full" />
          </div>
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

const feature1 = ref(true);
const feature2 = ref(true);
const feature3 = ref(true);
</script>