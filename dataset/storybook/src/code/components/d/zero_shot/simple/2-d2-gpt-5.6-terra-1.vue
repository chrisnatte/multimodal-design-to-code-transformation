<template>
    <div class="flex flex-col bg-white p-6">
        <div class="flex items-center gap-4">
            <OverlayBadge value="8" class="inline-flex">
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
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import OverlayBadge from 'primevue/overlaybadge';
</script>