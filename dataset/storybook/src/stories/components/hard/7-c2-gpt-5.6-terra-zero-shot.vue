<template>
    <main class="flex min-h-screen flex-col gap-4 bg-white px-6 py-6 text-slate-700">
        <Card
            v-for="notification in notifications"
            :key="notification.name"
            class="overflow-hidden border border-slate-100 shadow-sm"
            :pt="{
                body: { class: '!p-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #content>
                <div class="flex h-[63px] items-center justify-between px-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            :label="notification.initial"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                        />
                        <div class="flex flex-col leading-tight">
                            <span class="text-sm font-medium text-slate-700">{{ notification.name }}</span>
                            <span class="text-[11px] text-slate-500">{{ notification.time }}</span>
                        </div>
                    </div>
                    <Tag :value="notification.type" :severity="notification.severity" class="!text-xs" />
                </div>

                <Divider class="!my-0" />

                <div class="flex min-h-[50px] items-center px-4 py-3">
                    <p class="m-0 text-sm leading-5 text-slate-700">{{ notification.message }}</p>
                </div>

                <Divider class="!my-0" />

                <div class="flex h-[72px] items-center justify-end gap-2 px-4">
                    <Button label="Ablehnen" severity="secondary" size="small" />
                    <Button label="Akzeptieren" severity="success" size="small" />
                </div>
            </template>
        </Card>
    </main>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';

const notifications = [
    {
        initial: 'M',
        name: 'Max Mustermann',
        time: 'Vor 5 Minuten',
        type: 'Einladung',
        severity: 'info',
        message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
    },
    {
        initial: 'A',
        name: 'Anna Schmidt',
        time: 'Vor 24 Minuten',
        type: 'Review',
        severity: 'warn',
        message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
    },
    {
        initial: 'T',
        name: 'Tom Fischer',
        time: 'Vor 1 Stunde',
        type: 'Zugriff',
        severity: 'danger',
        message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
    }
];
</script>