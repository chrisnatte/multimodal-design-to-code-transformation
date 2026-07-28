<template>
  <div class="border border-gray-100 rounded-2xl p-6 w-[320px] bg-white flex flex-col gap-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] font-sans">
    <!-- Header -->
    <div class="flex justify-between items-center">
      <h2 class="text-2xl font-medium text-slate-800 m-0">Paket 1</h2>
      <Tag class="bg-[#EBF4FA] text-[#005B9F] border-none font-medium px-2.5 py-1 rounded-md text-sm flex items-center gap-1.5">
        <template #icon>
          <i class="pi pi-arrow-up-right text-[10px] font-bold"></i>
        </template>
        Beliebt
      </Tag>
    </div>

    <!-- Features -->
    <div class="flex flex-col gap-4 mt-2">
      <div class="flex items-center gap-3">
        <div class="bg-[#10B981] text-white rounded flex items-center justify-center w-5 h-5 shrink-0">
          <i class="pi pi-check text-[12px] font-bold"></i>
        </div>
        <span class="text-slate-600 text-base">Unbegrenzte Projekte</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="bg-[#10B981] text-white rounded flex items-center justify-center w-5 h-5 shrink-0">
          <i class="pi pi-check text-[12px] font-bold"></i>
        </div>
        <span class="text-slate-600 text-base">Unbegrenzte Dashboards</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="bg-[#10B981] text-white rounded flex items-center justify-center w-5 h-5 shrink-0">
          <i class="pi pi-check text-[12px] font-bold"></i>
        </div>
        <span class="text-slate-600 text-base">Erweiterte Analytics</span>
      </div>
    </div>

    <!-- Action -->
    <Button label="Jetzt starten" class="w-full bg-[#10B981] border-none hover:bg-[#059669] text-white font-medium py-3 rounded-lg mt-2 transition-colors" />
  </div>
</template>

<script setup>
import Tag from 'primevue/tag';
import Button from 'primevue/button';
</script>