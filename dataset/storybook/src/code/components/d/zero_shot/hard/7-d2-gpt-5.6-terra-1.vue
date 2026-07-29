<template>
    <main class="flex min-h-screen w-full justify-center bg-white p-6">
        <section class="w-full max-w-[688px] bg-white">
            <div class="flex flex-col gap-4">
                <Card
                    v-for="notification in notifications"
                    :key="notification.name"
                    class="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
                    :pt="{
                        body: { class: '!p-0 !gap-0' },
                        content: { class: '!p-0' }
                    }"
                >
                    <template #content>
                        <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
                            <div class="flex items-center gap-3">
                                <Avatar
                                    :label="notification.initial"
                                    shape="circle"
                                    class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                                    :aria-label="notification.name"
                                />
                                <div class="flex h-[29px] w-[115px] flex-col">
                                    <span class="text-sm leading-[17px] text-slate-700">{{ notification.name }}</span>
                                    <span class="text-[10px] font-light leading-3 text-slate-500">{{ notification.time }}</span>
                                </div>
                            </div>

                            <Tag :value="notification.category" :severity="notification.severity" class="!text-[12px]" />
                        </div>

                        <Divider class="!my-0 !h-[29px]" />

                        <div class="flex flex-col gap-[7px] pb-[17.5px]">
                            <div
                                class="flex px-4 text-sm leading-[23px] text-slate-700"
                                :class="notification.multiline ? 'min-h-[46px]' : 'min-h-[23px]'"
                            >
                                <span>{{ notification.message }}</span>
                            </div>

                            <Divider class="!my-0 !h-[21px]" />

                            <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                                <Button
                                    label="Ablehnen"
                                    severity="secondary"
                                    size="small"
                                    class="!h-[33px] !border-slate-100 !bg-slate-100 !px-[11px] !py-0 !text-sm !text-slate-600"
                                />
                                <Button
                                    label="Akzeptieren"
                                    size="small"
                                    class="!h-[33px] !border-emerald-500 !bg-emerald-500 !px-[11px] !py-0 !text-sm hover:!border-emerald-600 hover:!bg-emerald-600"
                                />
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
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
        category: 'Einladung',
        severity: 'info',
        message: 'Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.',
        multiline: false
    },
    {
        initial: 'A',
        name: 'Anna Schmidt',
        time: 'Vor 24 Minuten',
        category: 'Review',
        severity: 'warn',
        message: 'Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.',
        multiline: false
    },
    {
        initial: 'T',
        name: 'Tom Fischer',
        time: 'Vor 1 Stunde',
        category: 'Zugriff',
        severity: 'danger',
        message: 'Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.',
        multiline: true
    }
]);
</script>