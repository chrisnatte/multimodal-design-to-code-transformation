<template>
    <div class="w-[688px] bg-white p-6">
        <div class="flex flex-col gap-4">
            <div class="flex h-[186.5px] w-full flex-col overflow-hidden rounded-xl bg-white">
                <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            shape="circle"
                            aria-label="Max Mustermann"
                            class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-slate-900"
                        />
                        <div class="flex h-[29px] w-[115px] flex-col">
                            <span class="text-sm font-normal leading-[17px]">Max Mustermann</span>
                            <span class="text-[10px] font-light leading-3">Vor 5 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Einladung" severity="info" class="!h-[22px] !text-[12.25px]" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex h-[108.5px] flex-col gap-[7px] pb-[17.5px]">
                    <div class="px-4">
                        <span class="text-sm font-normal leading-[23px]">
                            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button
                            label="Ablehnen"
                            severity="secondary"
                            class="!h-[33px] !bg-[#f1f5f9] !px-[11.5px] !py-2 !text-sm"
                        />
                        <Button
                            label="Akzeptieren"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-[11.5px] !py-2 !text-sm"
                        />
                    </div>
                </div>
            </div>

            <div class="flex h-[186.5px] w-full flex-col overflow-hidden rounded-xl bg-white">
                <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="A"
                            shape="circle"
                            aria-label="Anna Schmidt"
                            class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-slate-900"
                        />
                        <div class="flex h-[29px] w-[115px] flex-col">
                            <span class="text-sm font-normal leading-[17px]">Anna Schmidt</span>
                            <span class="text-[10px] font-light leading-3">Vor 24 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Review" severity="warn" class="!h-[22px] !text-[12.25px]" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex h-[108.5px] flex-col gap-[7px] pb-[17.5px]">
                    <div class="px-4">
                        <span class="text-sm font-normal leading-[23px]">
                            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button
                            label="Ablehnen"
                            severity="secondary"
                            class="!h-[33px] !bg-[#f1f5f9] !px-[11.5px] !py-2 !text-sm"
                        />
                        <Button
                            label="Akzeptieren"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-[11.5px] !py-2 !text-sm"
                        />
                    </div>
                </div>
            </div>

            <div class="flex h-[209.5px] w-full flex-col overflow-hidden rounded-xl bg-white">
                <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="T"
                            shape="circle"
                            aria-label="Tom Fischer"
                            class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm !text-slate-900"
                        />
                        <div class="flex h-[29px] w-[115px] flex-col">
                            <span class="text-sm font-normal leading-[17px]">Tom Fischer</span>
                            <span class="text-[10px] font-light leading-3">Vor 1 Stunde</span>
                        </div>
                    </div>
                    <Tag value="Zugriff" severity="danger" class="!h-[22px] !text-[12.25px]" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex h-[131.5px] flex-col gap-[7px] pb-[17.5px]">
                    <div class="px-4">
                        <span class="text-sm font-normal leading-[23px]">
                            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button
                            label="Ablehnen"
                            severity="secondary"
                            class="!h-[33px] !bg-[#f1f5f9] !px-[11.5px] !py-2 !text-sm"
                        />
                        <Button
                            label="Akzeptieren"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !px-[11.5px] !py-2 !text-sm"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';
</script>