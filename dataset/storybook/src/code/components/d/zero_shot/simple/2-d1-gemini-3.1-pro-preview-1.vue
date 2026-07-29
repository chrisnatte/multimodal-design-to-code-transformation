<template>
  <div class="bg-white p-6 flex flex-col w-fit">
    <div class="flex flex-row items-center gap-4">
      <OverlayBadge value="8" severity="success">
        <Avatar 
          label="B" 
          size="xlarge" 
          shape="circle" 
          style="background-color: #e2e8f0; color: #334155;" 
        />
      </OverlayBadge>
      <span class="text-[20px] font-normal font-sans text-gray-900">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>