<template>
    <div class="flex items-center gap-4">
        <Avatar
            label="B"
            size="xlarge"
            shape="circle"
            aria-label="Benutzername"
            class="relative"
            :pt="{
                root: {
                    style: {
                        backgroundColor: '#e2e8f0',
                        color: '#1f2937'
                    }
                }
            }"
        >
            <Badge
                value="8"
                class="absolute -right-2 -top-2"
                :pt="{
                    root: {
                        style: {
                            backgroundColor: '#10b981',
                            color: '#ffffff',
                            borderRadius: '9999px'
                        }
                    }
                }"
            />
        </Avatar>
        <span class="text-[20px] font-normal leading-6 text-surface-900">Benutzername</span>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
</script>