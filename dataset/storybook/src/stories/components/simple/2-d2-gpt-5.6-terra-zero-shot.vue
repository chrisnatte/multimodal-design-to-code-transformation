<template>
  <div class="flex items-center gap-4">
    <OverlayBadge value="8" class="inline-flex" :pt="{ root: { class: 'bg-emerald-500 text-white' } }">
      <Avatar
        label="B"
        size="xlarge"
        shape="circle"
        aria-label="Benutzername"
        class="bg-slate-200 text-slate-700"
      />
    </OverlayBadge>
    <span class="text-xl font-normal text-black">Benutzername</span>
  </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import OverlayBadge from 'primevue/overlaybadge'
</script>