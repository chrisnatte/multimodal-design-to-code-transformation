<template>
    <aside class="flex h-[560px] w-[288px] flex-col bg-white p-6">
        <div class="flex h-[512px] w-full flex-col justify-between bg-[#e2e8f0] p-6">
            <div class="flex w-full flex-col items-center gap-6">
                <h2 class="m-0 text-2xl font-normal text-surface-900">Emails</h2>

                <nav class="flex w-full flex-col gap-4" aria-label="Email navigation">
                    <Button
                        label="Postfach"
                        icon="pi pi-inbox"
                        severity="secondary"
                        variant="outlined"
                        class="!h-[33px] !w-full !justify-start !bg-[#f1f5f9] !px-3 !py-2 !text-sm"
                    />
                    <Button
                        label="Ordner"
                        icon="pi pi-folder"
                        severity="secondary"
                        variant="outlined"
                        class="!h-[33px] !w-full !justify-start !px-3 !py-2 !text-sm"
                    />
                    <Button
                        label="Konto"
                        icon="pi pi-user"
                        severity="secondary"
                        variant="outlined"
                        class="!h-[33px] !w-full !justify-start !px-3 !py-2 !text-sm"
                    />
                </nav>
            </div>

            <div class="flex w-full flex-col">
                <Divider class="!my-0" />
                <div class="flex items-center gap-4 pt-0">
                    <Avatar
                        label="B"
                        size="large"
                        shape="circle"
                        aria-label="Benutzername"
                        class="!h-[42px] !w-[42px] !bg-[#64748b] !text-[21px] !text-white"
                    />
                    <span class="text-base font-normal text-surface-900">Benutzername</span>
                </div>
            </div>
        </div>
    </aside>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
</script>