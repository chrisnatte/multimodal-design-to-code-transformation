<template>
    <aside class="box-border h-[560px] w-72 bg-white p-6">
        <div class="flex h-[512px] w-60 flex-col justify-between bg-[#e2e8f0] p-6 text-[#64748b]">
            <div class="flex flex-col items-center gap-6">
                <h1 class="m-0 text-2xl font-normal leading-[29px] text-[#334155]">Emails</h1>

                <nav class="flex w-full flex-col gap-4" aria-label="E-Mail Navigation">
                    <Button
                        label="Postfach"
                        icon="pi pi-inbox"
                        severity="secondary"
                        variant="outlined"
                        size="small"
                        :class="[
                            '!h-[33px] !w-full !justify-start !border-transparent !px-3 !py-2 !font-medium !text-[#64748b]',
                            activeSection === 'inbox' ? '!bg-[#f1f5f9]' : '!bg-transparent'
                        ]"
                        @click="activeSection = 'inbox'"
                    />
                    <Button
                        label="Ordner"
                        icon="pi pi-folder"
                        severity="secondary"
                        variant="outlined"
                        size="small"
                        :class="[
                            '!h-[33px] !w-full !justify-start !border-transparent !px-3 !py-2 !font-medium !text-[#64748b]',
                            activeSection === 'folders' ? '!bg-[#f1f5f9]' : '!bg-transparent'
                        ]"
                        @click="activeSection = 'folders'"
                    />
                    <Button
                        label="Konto"
                        icon="pi pi-user"
                        severity="secondary"
                        variant="outlined"
                        size="small"
                        :class="[
                            '!h-[33px] !w-full !justify-start !border-transparent !px-3 !py-2 !font-medium !text-[#64748b]',
                            activeSection === 'account' ? '!bg-[#f1f5f9]' : '!bg-transparent'
                        ]"
                        @click="activeSection = 'account'"
                    />
                </nav>
            </div>

            <div class="flex w-full flex-col">
                <Divider class="!m-0 !h-[29px]" />
                <div class="flex items-center gap-4 px-3">
                    <Avatar
                        label="B"
                        shape="circle"
                        aria-label="Benutzername"
                        class="!h-[42px] !w-[42px] !bg-[#64748b] !text-[21px] !text-white"
                    />
                    <span class="text-base font-normal text-[#334155]">Benutzername</span>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const activeSection = ref('inbox');
</script>