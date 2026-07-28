<template>
    <div class="flex w-full max-w-[640px] flex-col gap-4 font-['Inter'] text-slate-700">
        <Card
            class="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
            :pt="{ body: { class: '!p-0 !gap-0' }, content: { class: '!p-0' } }"
        >
            <template #content>
                <div class="flex h-[49px] items-center justify-between gap-2.5 px-2.5 py-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                            aria-label="Max Mustermann"
                        />
                        <div class="flex h-[29px] w-[115px] flex-col">
                            <span class="text-sm leading-[17px] text-slate-700">Max Mustermann</span>
                            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 5 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Einladung" class="!bg-sky-100 !text-sky-700" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex flex-col gap-[7px] pb-[17.5px]">
                    <div class="min-h-[23px] px-4 text-sm leading-[23px]">
                        Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
                    </div>
                    <Divider class="!my-0 !h-[21px]" />
                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" size="small" />
                        <Button
                            label="Akzeptieren"
                            size="small"
                            class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
                        />
                    </div>
                </div>
            </template>
        </Card>

        <Card
            class="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
            :pt="{ body: { class: '!p-0 !gap-0' }, content: { class: '!p-0' } }"
        >
            <template #content>
                <div class="flex h-[49px] items-center justify-between gap-2.5 px-2.5 py-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="A"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                            aria-label="Anna Schmidt"
                        />
                        <div class="flex h-[29px] w-[115px] flex-col">
                            <span class="text-sm leading-[17px] text-slate-700">Anna Schmidt</span>
                            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 24 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Review" class="!bg-orange-100 !text-orange-700" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex flex-col gap-[7px] pb-[17.5px]">
                    <div class="min-h-[23px] px-4 text-sm leading-[23px]">
                        Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
                    </div>
                    <Divider class="!my-0 !h-[21px]" />
                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" size="small" />
                        <Button
                            label="Akzeptieren"
                            size="small"
                            class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
                        />
                    </div>
                </div>
            </template>
        </Card>

        <Card
            class="overflow-hidden rounded-xl border border-slate-100 shadow-sm"
            :pt="{ body: { class: '!p-0 !gap-0' }, content: { class: '!p-0' } }"
        >
            <template #content>
                <div class="flex h-[49px] items-center justify-between gap-2.5 px-2.5 py-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="T"
                            shape="circle"
                            class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600"
                            aria-label="Tom Fischer"
                        />
                        <div class="flex h-[29px] w-[115px] flex-col">
                            <span class="text-sm leading-[17px] text-slate-700">Tom Fischer</span>
                            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 1 Stunde</span>
                        </div>
                    </div>
                    <Tag value="Zugriff" class="!bg-red-100 !text-red-700" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex flex-col gap-[7px] pb-[17.5px]">
                    <div class="min-h-[46px] px-4 text-sm leading-[23px]">
                        Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
                    </div>
                    <Divider class="!my-0 !h-[21px]" />
                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" size="small" />
                        <Button
                            label="Akzeptieren"
                            size="small"
                            class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600"
                        />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
</script>