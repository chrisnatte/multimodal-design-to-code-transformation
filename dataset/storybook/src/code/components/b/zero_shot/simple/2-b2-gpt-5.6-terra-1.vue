<template>
    <div class="flex w-fit flex-col bg-white p-6">
        <div class="flex items-center gap-4">
            <div class="relative inline-flex">
                <Avatar
                    label="B"
                    size="xlarge"
                    shape="circle"
                    aria-label="Benutzername"
                    class="bg-[#e2e8f0] text-[28px] text-slate-900"
                />
                <Badge
                    value="8"
                    class="absolute -right-2 -top-2 rounded-full bg-[#10b981] text-white"
                />
            </div>
            <span class="text-xl font-normal text-slate-900">Benutzername</span>
        </div>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
</script>