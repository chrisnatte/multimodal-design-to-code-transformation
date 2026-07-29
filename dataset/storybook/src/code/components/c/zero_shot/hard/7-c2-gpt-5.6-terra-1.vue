<template>
    <main class="min-h-screen bg-white p-6">
        <section class="mx-auto flex max-w-[640px] flex-col gap-4">
            <Card class="overflow-hidden" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
                <template #content>
                    <div class="flex items-center justify-between px-2.5 py-2.5">
                        <div class="flex items-center gap-3">
                            <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-slate-700">Max Mustermann</span>
                                <span class="text-[10px] leading-3 text-slate-500">Vor 5 Minuten</span>
                            </div>
                        </div>
                        <Tag value="Einladung" severity="info" class="!px-2 !py-1 !text-xs" />
                    </div>

                    <Divider class="!my-0" />

                    <p class="px-4 py-4 text-sm leading-5 text-slate-700">
                        Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
                    </p>

                    <Divider class="!my-0" />

                    <div class="flex justify-end gap-2 px-4 py-5">
                        <Button label="Ablehnen" severity="secondary" size="small" />
                        <Button label="Akzeptieren" severity="success" size="small" />
                    </div>
                </template>
            </Card>

            <Card class="overflow-hidden" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
                <template #content>
                    <div class="flex items-center justify-between px-2.5 py-2.5">
                        <div class="flex items-center gap-3">
                            <Avatar label="A" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-slate-700">Anna Schmidt</span>
                                <span class="text-[10px] leading-3 text-slate-500">Vor 24 Minuten</span>
                            </div>
                        </div>
                        <Tag value="Review" severity="warn" class="!px-2 !py-1 !text-xs" />
                    </div>

                    <Divider class="!my-0" />

                    <p class="px-4 py-4 text-sm leading-5 text-slate-700">
                        Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
                    </p>

                    <Divider class="!my-0" />

                    <div class="flex justify-end gap-2 px-4 py-5">
                        <Button label="Ablehnen" severity="secondary" size="small" />
                        <Button label="Akzeptieren" severity="success" size="small" />
                    </div>
                </template>
            </Card>

            <Card class="overflow-hidden" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
                <template #content>
                    <div class="flex items-center justify-between px-2.5 py-2.5">
                        <div class="flex items-center gap-3">
                            <Avatar label="T" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
                            <div class="flex flex-col">
                                <span class="text-sm font-medium text-slate-700">Tom Fischer</span>
                                <span class="text-[10px] leading-3 text-slate-500">Vor 1 Stunde</span>
                            </div>
                        </div>
                        <Tag value="Zugriff" severity="danger" class="!px-2 !py-1 !text-xs" />
                    </div>

                    <Divider class="!my-0" />

                    <p class="px-4 py-4 text-sm leading-5 text-slate-700">
                        Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
                    </p>

                    <Divider class="!my-0" />

                    <div class="flex justify-end gap-2 px-4 py-5">
                        <Button label="Ablehnen" severity="secondary" size="small" />
                        <Button label="Akzeptieren" severity="success" size="small" />
                    </div>
                </template>
            </Card>
        </section>
    </main>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
</script>