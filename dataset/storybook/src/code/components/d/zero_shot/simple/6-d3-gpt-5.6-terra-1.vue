<template>
  <div class="flex w-[368px] flex-col bg-white p-6">
    <div class="flex w-full flex-col gap-3">
      <ProgressBar
        :value="25"
        :show-value="true"
        class="w-full"
        :pt="{
          root: { class: 'h-[18px] rounded-md bg-[#e2e8f0]' },
          value: { class: 'rounded-l-md bg-[#10b981]' },
          label: { class: 'text-[11px] font-semibold text-white' }
        }"
      />
      <Tag
        value="Datei wird hochgeladen..."
        severity="info"
        rounded
        class="w-fit text-[12px] font-light"
      />
    </div>
  </div>
</template>

<script setup>
import ProgressBar from 'primevue/progressbar'
import Tag from 'primevue/tag'
</script>