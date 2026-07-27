<template>
    <div class="flex w-[640px] flex-col gap-4">
        <Card unstyled class="overflow-hidden rounded-xl bg-white">
            <template #content>
                <div class="flex flex-col">
                    <div class="flex items-center justify-between gap-2.5 p-2.5">
                        <div class="flex items-center gap-3">
                            <Avatar
                                label="M"
                                shape="circle"
                                class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-slate-700"
                            />
                            <div class="flex w-[115px] flex-col">
                                <span class="text-sm font-normal">Max Mustermann</span>
                                <span class="text-[10px] font-light">Vor 5 Minuten</span>
                            </div>
                        </div>
                        <Tag value="Einladung" severity="info" class="!text-[12.25px] !font-bold" />
                    </div>

                    <Divider class="!my-0 !h-[29px]" />

                    <div class="flex flex-col gap-[7px] pb-[17.5px]">
                        <div class="flex flex-col px-4">
                            <span class="text-sm font-normal leading-[23px]">
                                Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
                            </span>
                        </div>

                        <Divider class="!my-0 !h-[21px]" />

                        <div class="flex items-center justify-end gap-2 px-4">
                            <Button label="Ablehnen" severity="secondary" class="!h-[33px] !text-sm" />
                            <Button label="Akzeptieren" class="!h-[33px] !text-sm" />
                        </div>
                    </div>
                </div>
            </template>
        </Card>

        <Card unstyled class="overflow-hidden rounded-xl bg-white">
            <template #content>
                <div class="flex flex-col">
                    <div class="flex items-center justify-between gap-2.5 p-2.5">
                        <div class="flex items-center gap-3">
                            <Avatar
                                label="A"
                                shape="circle"
                                class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-slate-700"
                            />
                            <div class="flex w-[115px] flex-col">
                                <span class="text-sm font-normal">Anna Schmidt</span>
                                <span class="text-[10px] font-light">Vor 24 Minuten</span>
                            </div>
                        </div>
                        <Tag value="Review" severity="warn" class="!text-[12.25px] !font-bold" />
                    </div>

                    <Divider class="!my-0 !h-[29px]" />

                    <div class="flex flex-col gap-[7px] pb-[17.5px]">
                        <div class="flex flex-col px-4">
                            <span class="text-sm font-normal leading-[23px]">
                                Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
                            </span>
                        </div>

                        <Divider class="!my-0 !h-[21px]" />

                        <div class="flex items-center justify-end gap-2 px-4">
                            <Button label="Ablehnen" severity="secondary" class="!h-[33px] !text-sm" />
                            <Button label="Akzeptieren" class="!h-[33px] !text-sm" />
                        </div>
                    </div>
                </div>
            </template>
        </Card>

        <Card unstyled class="overflow-hidden rounded-xl bg-white">
            <template #content>
                <div class="flex flex-col">
                    <div class="flex items-center justify-between gap-2.5 p-2.5">
                        <div class="flex items-center gap-3">
                            <Avatar
                                label="T"
                                shape="circle"
                                class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-slate-700"
                            />
                            <div class="flex w-[115px] flex-col">
                                <span class="text-sm font-normal">Tom Fischer</span>
                                <span class="text-[10px] font-light">Vor 1 Stunde</span>
                            </div>
                        </div>
                        <Tag value="Zugriff" severity="danger" class="!text-[12.25px] !font-bold" />
                    </div>

                    <Divider class="!my-0 !h-[29px]" />

                    <div class="flex flex-col gap-[7px] pb-[17.5px]">
                        <div class="flex flex-col px-4">
                            <span class="text-sm font-normal leading-[23px]">
                                Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die
                                Berechtigung.
                            </span>
                        </div>

                        <Divider class="!my-0 !h-[21px]" />

                        <div class="flex items-center justify-end gap-2 px-4">
                            <Button label="Ablehnen" severity="secondary" class="!h-[33px] !text-sm" />
                            <Button label="Akzeptieren" class="!h-[33px] !text-sm" />
                        </div>
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