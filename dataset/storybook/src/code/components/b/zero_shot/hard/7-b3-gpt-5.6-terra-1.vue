<template>
    <div class="flex w-[688px] flex-col gap-[10px] bg-white p-6">
        <div class="flex w-full flex-col gap-4">
            <div class="flex w-full flex-col rounded-[12px] bg-white">
                <div class="flex h-[49px] w-full items-center justify-between gap-[10px] p-[10px]">
                    <div class="flex items-center gap-3">
                        <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm" />
                        <div class="flex w-[115px] flex-col">
                            <span class="text-sm font-normal">Max Mustermann</span>
                            <span class="text-[10px] font-light">Vor 5 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Einladung" severity="info" class="!text-[12.25px] !font-bold" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex w-full flex-col gap-[7px] pb-[17.5px]">
                    <div class="flex min-h-[23px] w-full flex-col px-4">
                        <span class="text-sm font-normal">
                            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] w-full items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" class="!h-[33px] !text-sm" />
                        <Button
                            label="Akzeptieren"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !text-sm hover:!border-[#10b981] hover:!bg-[#10b981]"
                        />
                    </div>
                </div>
            </div>

            <div class="flex w-full flex-col rounded-[12px] bg-white">
                <div class="flex h-[49px] w-full items-center justify-between gap-[10px] p-[10px]">
                    <div class="flex items-center gap-3">
                        <Avatar label="A" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm" />
                        <div class="flex w-[115px] flex-col">
                            <span class="text-sm font-normal">Anna Schmidt</span>
                            <span class="text-[10px] font-light">Vor 24 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Review" severity="warn" class="!text-[12.25px] !font-bold" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex w-full flex-col gap-[7px] pb-[17.5px]">
                    <div class="flex min-h-[23px] w-full flex-col px-4">
                        <span class="text-sm font-normal">
                            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] w-full items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" class="!h-[33px] !text-sm" />
                        <Button
                            label="Akzeptieren"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !text-sm hover:!border-[#10b981] hover:!bg-[#10b981]"
                        />
                    </div>
                </div>
            </div>

            <div class="flex w-full flex-col rounded-[12px] bg-white">
                <div class="flex h-[49px] w-full items-center justify-between gap-[10px] p-[10px]">
                    <div class="flex items-center gap-3">
                        <Avatar label="T" shape="circle" class="!h-7 !w-7 !bg-[#e2e8f0] !text-sm" />
                        <div class="flex w-[115px] flex-col">
                            <span class="text-sm font-normal">Tom Fischer</span>
                            <span class="text-[10px] font-light">Vor 1 Stunde</span>
                        </div>
                    </div>
                    <Tag value="Zugriff" severity="danger" class="!text-[12.25px] !font-bold" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex w-full flex-col gap-[7px] pb-[17.5px]">
                    <div class="flex min-h-[46px] w-full flex-col px-4">
                        <span class="text-sm font-normal">
                            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] w-full items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" class="!h-[33px] !text-sm" />
                        <Button
                            label="Akzeptieren"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] !text-sm hover:!border-[#10b981] hover:!bg-[#10b981]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Divider from 'primevue/divider'
import Tag from 'primevue/tag'
</script>