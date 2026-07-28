<template>
    <div class="flex flex-col gap-4 p-6 max-w-3xl mx-auto bg-white font-sans">
        <Card v-for="notification in notifications" :key="notification.id" class="border border-surface-200 shadow-none rounded-xl overflow-hidden" :pt="{ body: { class: 'p-0' }, content: { class: 'p-0' } }">
            <template #content>
                <div class="flex flex-col">
                    <!-- Header -->
                    <div class="flex justify-between items-start p-4">
                        <div class="flex items-center gap-3">
                            <Avatar :label="notification.initials" shape="circle" class="bg-slate-100 text-slate-600 font-medium text-sm w-10 h-10" />
                            <div class="flex flex-col">
                                <span class="font-medium text-surface-900">{{ notification.name }}</span>
                                <span class="text-sm text-surface-500">{{ notification.time }}</span>
                            </div>
                        </div>
                        <Tag :value="notification.tagLabel" :class="['font-semibold px-2.5 py-1 rounded-md text-xs', notification.tagClass]" :unstyled="true" />
                    </div>

                    <Divider class="m-0 border-surface-100" />

                    <!-- Body -->
                    <div class="p-4 text-surface-700 text-sm leading-relaxed">
                        {{ notification.message }}
                    </div>

                    <Divider class="m-0 border-surface-100" />

                    <!-- Footer -->
                    <div class="flex justify-end gap-3 p-4">
                        <Button label="Ablehnen" class="bg-slate-100 hover:bg-slate-200 text-slate-700 border-none font-medium px-4 py-2 text-sm rounded-md transition-colors" :unstyled="true" />
                        <Button label="Akzeptieren" severity="success" class="font-medium px-4 py-2 text-sm rounded-md bg-emerald-500 hover:bg-emerald-600 border-none" />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Avatar from 'primevue/avatar';
import Tag from 'primevue/tag';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const notifications = ref([
    {
        id: 1,
        initials: 'M',
        name: 'Max Mustermann',
        time: 'Vor 5 Minuten',
        tagLabel: 'Einladung',
        tagClass: 'bg-blue-50 text-blue-600',
        message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
    },
    {
        id: 2,
        initials: 'A',
        name: 'Anna Schmidt',
        time: 'Vor 24 Minuten',
        tagLabel: 'Review',
        tagClass: 'bg-orange-50 text-orange-600',
        message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
    },
    {
        id: 3,
        initials: 'T',
        name: 'Tom Fischer',
        time: 'Vor 1 Stunde',
        tagLabel: 'Zugriff',
        tagClass: 'bg-red-50 text-red-600',
        message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
    }
]);
</script>