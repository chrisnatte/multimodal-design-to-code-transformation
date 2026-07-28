<template>
  <Card class="w-[320px] border border-surface-200 shadow-sm rounded-2xl">
    <template #content>
      <div class="flex flex-col p-2">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <span class="text-2xl font-semibold text-surface-800">Paket 1</span>
          <Tag 
            value="Beliebt" 
            icon="pi pi-arrow-up-right" 
            class="bg-blue-50 text-blue-700 font-semibold px-3 py-1.5 rounded-lg text-sm border-none" 
          />
        </div>

        <!-- Features List -->
        <div class="flex flex-col gap-4 mb-8">
          <div class="flex items-center gap-3">
            <Checkbox v-model="feature1" binary readonly class="pointer-events-none" />
            <span class="text-surface-600 text-base">Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-3">
            <Checkbox v-model="feature2" binary readonly class="pointer-events-none" />
            <span class="text-surface-600 text-base">Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-3">
            <Checkbox v-model="feature3" binary readonly class="pointer-events-none" />
            <span class="text-surface-600 text-base">Erweiterte Analytics</span>
          </div>
        </div>

        <!-- Action Button -->
        <Button 
          label="Jetzt starten" 
          severity="success" 
          class="w-full rounded-xl font-semibold py-3" 
        />
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

const feature1 = ref(true);
const feature2 = ref(true);
const feature3 = ref(true);
</script>