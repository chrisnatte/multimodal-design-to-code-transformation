<template>
    <div class="flex items-center gap-4 p-6">
        <OverlayBadge value="8" severity="success">
            <Avatar label="B" shape="circle" class="!h-14 !w-14 !bg-slate-200 !text-3xl !text-slate-700" />
        </OverlayBadge>
        <span class="text-xl text-surface-900">Benutzername</span>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge';
</script>