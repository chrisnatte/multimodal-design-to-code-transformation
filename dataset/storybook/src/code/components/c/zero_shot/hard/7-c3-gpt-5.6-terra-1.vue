<template>
    <main class="min-h-screen bg-white p-6">
        <section class="flex w-[640px] flex-col gap-4" aria-label="Benachrichtigungen">
            <Card
                v-for="notification in notifications"
                :key="notification.name"
                :pt="{
                    root: { class: '!overflow-hidden !rounded-2xl !border !border-slate-100 !shadow-sm' },
                    body: { class: '!p-0' },
                    content: { class: '!p-0' }
                }"
            >
                <template #content>
                    <div class="flex h-[63px] items-center justify-between px-4">
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

                        <Tag :value="notification.tag" :severity="notification.tagSeverity" />
                    </div>

                    <Divider class="!m-0" />

                    <div class="flex min-h-[50px] items-center px-4 py-3">
                        <p class="m-0 text-sm leading-[1.55] text-slate-700">
                            {{ notification.message }}
                        </p>
                    </div>

                    <Divider class="!m-0" />

                    <div class="flex h-[72px] items-center justify-end gap-2 px-4">
                        <Button
                            label="Ablehnen"
                            severity="secondary"
                            size="small"
                            @click="respond(notification.name, 'abgelehnt')"
                        />
                        <Button
                            label="Akzeptieren"
                            severity="success"
                            size="small"
                            @click="respond(notification.name, 'akzeptiert')"
                        />
                    </div>
                </template>
            </Card>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';

const notifications = ref([
    {
        initial: 'M',
        name: 'Max Mustermann',
        time: 'Vor 5 Minuten',
        tag: 'Einladung',
        tagSeverity: 'info',
        message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.'
    },
    {
        initial: 'A',
        name: 'Anna Schmidt',
        time: 'Vor 24 Minuten',
        tag: 'Review',
        tagSeverity: 'warn',
        message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.'
    },
    {
        initial: 'T',
        name: 'Tom Fischer',
        time: 'Vor 1 Stunde',
        tag: 'Zugriff',
        tagSeverity: 'danger',
        message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.'
    }
]);

const responses = ref({});

const respond = (name, response) => {
    responses.value[name] = response;
};
</script>