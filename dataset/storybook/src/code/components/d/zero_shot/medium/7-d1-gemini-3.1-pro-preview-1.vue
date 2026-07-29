<template>
  <div class="p-6 bg-white flex flex-col w-fit font-sans">
    <div class="bg-white rounded-xl border border-surface-200 flex flex-col w-[256px] shadow-sm">
      <div class="p-[17.5px] flex flex-col gap-8">
        
        <!-- Caption -->
        <div class="flex justify-between items-center">
          <span class="font-medium text-[17.5px] text-surface-900">Paket 1</span>
          <Tag 
            value="Beliebt" 
            icon="pi pi-arrow-up-right" 
            severity="info" 
            class="!bg-[#e0f2fe] !text-[#0369a1] !font-bold !text-[12.25px] px-2 py-1" 
          />
        </div>

        <!-- Content -->
        <div class="flex flex-col gap-4">
          <div class="flex items-center gap-2">
            <Checkbox v-model="check1" :binary="true" readonly class="*:!bg-[#10b981] *:!border-[#10b981]" />
            <span class="text-sm text-surface-700">Unbegrenzte Projekte</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check2" :binary="true" readonly class="*:!bg-[#10b981] *:!border-[#10b981]" />
            <span class="text-sm text-surface-700">Unbegrenzte Dashboards</span>
          </div>
          <div class="flex items-center gap-2">
            <Checkbox v-model="check3" :binary="true" readonly class="*:!bg-[#10b981] *:!border-[#10b981]" />
            <span class="text-sm text-surface-700">Erweiterte Analytics</span>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex w-full">
          <Button 
            label="Jetzt starten" 
            class="w-full !bg-[#10b981] !border-[#10b981] hover:!bg-[#059669] hover:!border-[#059669] !text-white font-medium text-sm py-2" 
          />
        </div>

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