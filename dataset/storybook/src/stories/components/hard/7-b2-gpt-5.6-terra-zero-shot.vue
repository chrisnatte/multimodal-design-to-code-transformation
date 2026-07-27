<template>
    <div class="flex w-full max-w-[640px] flex-col gap-4">
        <Card class="w-full overflow-hidden !rounded-xl !bg-white !shadow-none" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
            <template #content>
                <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="M"
                            shape="circle"
                            aria-label="Max Mustermann"
                            class="!h-7 !w-7 !text-sm"
                            style="background-color: #e2e8f0; color: #334155"
                        />
                        <div class="flex w-[115px] flex-col">
                            <span class="text-sm font-normal leading-[17px] text-slate-900">Max Mustermann</span>
                            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 5 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Einladung" severity="info" class="!text-[12.25px]" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex flex-col gap-[7px] pb-[17.5px]">
                    <div class="px-4">
                        <span class="block text-sm font-normal leading-[23px] text-slate-900">
                            Hat dich zum Projekt Website Relaunch eingeladen. Du wirst als Editor hinzugefügt.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" size="small" class="!h-[33px]" />
                        <Button
                            label="Akzeptieren"
                            size="small"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] hover:!border-[#10b981] hover:!bg-[#10b981]"
                        />
                    </div>
                </div>
            </template>
        </Card>

        <Card class="w-full overflow-hidden !rounded-xl !bg-white !shadow-none" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
            <template #content>
                <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="A"
                            shape="circle"
                            aria-label="Anna Schmidt"
                            class="!h-7 !w-7 !text-sm"
                            style="background-color: #e2e8f0; color: #334155"
                        />
                        <div class="flex w-[115px] flex-col">
                            <span class="text-sm font-normal leading-[17px] text-slate-900">Anna Schmidt</span>
                            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 24 Minuten</span>
                        </div>
                    </div>
                    <Tag value="Review" severity="warn" class="!text-[12.25px]" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex flex-col gap-[7px] pb-[17.5px]">
                    <div class="px-4">
                        <span class="block text-sm font-normal leading-[23px] text-slate-900">
                            Bittet um dein Review für den Pull Request #42 – Neue Navigationsstruktur.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" size="small" class="!h-[33px]" />
                        <Button
                            label="Akzeptieren"
                            size="small"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] hover:!border-[#10b981] hover:!bg-[#10b981]"
                        />
                    </div>
                </div>
            </template>
        </Card>

        <Card class="w-full overflow-hidden !rounded-xl !bg-white !shadow-none" :pt="{ body: { class: '!p-0' }, content: { class: '!p-0' } }">
            <template #content>
                <div class="flex h-[49px] items-center justify-between gap-2.5 p-2.5">
                    <div class="flex items-center gap-3">
                        <Avatar
                            label="T"
                            shape="circle"
                            aria-label="Tom Fischer"
                            class="!h-7 !w-7 !text-sm"
                            style="background-color: #e2e8f0; color: #334155"
                        />
                        <div class="flex w-[115px] flex-col">
                            <span class="text-sm font-normal leading-[17px] text-slate-900">Tom Fischer</span>
                            <span class="text-[10px] font-light leading-3 text-slate-500">Vor 1 Stunde</span>
                        </div>
                    </div>
                    <Tag value="Zugriff" severity="danger" class="!text-[12.25px]" />
                </div>

                <Divider class="!my-0 !h-[29px]" />

                <div class="flex flex-col gap-[7px] pb-[17.5px]">
                    <div class="px-4">
                        <span class="block text-sm font-normal leading-[23px] text-slate-900">
                            Beantragt Admin-Zugriff auf das Dashboard Analytics Q2 2026. Bitte prüfe die Berechtigung.
                        </span>
                    </div>

                    <Divider class="!my-0 !h-[21px]" />

                    <div class="flex h-[33px] items-center justify-end gap-2 px-4">
                        <Button label="Ablehnen" severity="secondary" size="small" class="!h-[33px]" />
                        <Button
                            label="Akzeptieren"
                            size="small"
                            class="!h-[33px] !border-[#10b981] !bg-[#10b981] hover:!border-[#10b981] hover:!bg-[#10b981]"
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