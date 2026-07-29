<template>
  <div class="w-[320px] bg-white border border-surface-200 rounded-2xl p-6 shadow-sm font-sans">
    <!-- Header -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold text-surface-900 m-0">Paket 1</h2>
      <Tag class="!bg-blue-50 !text-blue-700 !px-2 !py-1 !rounded-md">
        <div class="flex items-center gap-1">
          <i class="pi pi-arrow-up-right text-xs font-bold"></i>
          <span class="text-sm font-semibold">Beliebt</span>
        </div>
      </Tag>
    </div>

    <!-- Features -->
    <div class="flex flex-col gap-4 mb-8">
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-center w-6 h-6 rounded bg-[#10b981] text-white shrink-0">
          <i class="pi pi-check text-sm font-bold"></i>
        </div>
        <span class="text-surface-700">Unbegrenzte Projekte</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-center w-6 h-6 rounded bg-[#10b981] text-white shrink-0">
          <i class="pi pi-check text-sm font-bold"></i>
        </div>
        <span class="text-surface-700">Unbegrenzte Dashboards</span>
      </div>
      <div class="flex items-center gap-3">
        <div class="flex items-center justify-center w-6 h-6 rounded bg-[#10b981] text-white shrink-0">
          <i class="pi pi-check text-sm font-bold"></i>
        </div>
        <span class="text-surface-700">Erweiterte Analytics</span>
      </div>
    </div>

    <!-- Button -->
    <Button label="Jetzt starten" class="w-full !bg-[#10b981] !border-none hover:!bg-[#059669] !text-white font-semibold !py-3 !rounded-lg" />
  </div>
</template>

<script setup>
import Tag from 'primevue/tag';
import Button from 'primevue/button';
</script>