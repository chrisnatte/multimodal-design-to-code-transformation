<template>
  <div class="flex flex-col p-6 bg-white w-fit">
    <div class="flex items-center gap-4">
      <OverlayBadge value="8" severity="success">
        <Avatar 
          label="B" 
          size="xlarge" 
          shape="circle" 
          style="background-color: #e2e8f0; color: #334155;" 
        />
      </OverlayBadge>
      <span class="text-[20px] font-normal text-gray-900">Benutzername</span>
    </div>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>