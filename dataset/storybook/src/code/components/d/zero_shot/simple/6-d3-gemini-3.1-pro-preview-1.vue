<template>
  <div class="p-6 bg-white flex flex-col w-fit">
    <div class="flex flex-col gap-3 w-[320px]">
      <ProgressBar 
        :value="25" 
        style="height: 17.5px" 
        :pt="{ value: { class: 'bg-[#10b981]' } }" 
      />
      <Tag 
        value="Datei wird hochgeladen..." 
        severity="info" 
        rounded 
        class="self-start text-xs font-light" 
      />
    </div>
  </div>
</template>

<script setup>
import ProgressBar from 'primevue/progressbar';
import Tag from 'primevue/tag';
</script>