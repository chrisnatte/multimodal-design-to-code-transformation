<template>
  <Card class="w-full max-w-[320px] rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.04)] border border-surface-100">
    <template #content>
      <div class="p-2">
        <!-- Header -->
        <div class="flex justify-between items-center mb-6">
          <span class="text-2xl font-semibold text-surface-900">Paket 1</span>
          <Tag 
            value="Beliebt" 
            icon="pi pi-arrow-up-right" 
            class="!bg-blue-50 !text-blue-700 !font-semibold px-3 py-1.5 rounded-lg text-sm" 
          />
        </div>

        <!-- Features -->
        <div class="flex flex-col gap-4 mb-8">
          <div class="flex items-center gap-3">
            <Checkbox v-model="checked" binary readonly class="pointer-events-none" :pt="{ box: { class: '!bg-[#10b981] !border-[#10b981]' } }" />
            <span class="text-surface-700 text-base">Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-3">
            <Checkbox v-model="checked" binary readonly class="pointer-events-none" :pt="{ box: { class: '!bg-[#10b981] !border-[#10b981]' } }" />
            <span class="text-surface-700 text-base">Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-3">
            <Checkbox v-model="checked" binary readonly class="pointer-events-none" :pt="{ box: { class: '!bg-[#10b981] !border-[#10b981]' } }" />
            <span class="text-surface-700 text-base">Erweiterte Analytics</span>
          </div>
        </div>

        <!-- Action -->
        <Button 
          label="Jetzt starten" 
          class="w-full !bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] !text-white font-semibold py-3 rounded-xl" 
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

const checked = ref(true);
</script>