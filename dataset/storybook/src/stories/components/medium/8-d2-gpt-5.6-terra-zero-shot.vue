<template>
    <aside class="flex h-[512px] w-[240px] flex-col justify-between bg-[#e2e8f0] p-6 text-[#334155]">
        <div class="flex w-full flex-col items-center gap-6">
            <h1 class="m-0 text-2xl font-normal leading-[29px]">Emails</h1>

            <nav class="flex w-full flex-col gap-4" aria-label="E-Mail Navigation">
                <Button
                    label="Postfach"
                    icon="pi pi-inbox"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !border-transparent !bg-[#f1f5f9] !px-[11px] !py-0 !text-sm !font-medium !text-[#64748b]"
                />
                <Button
                    label="Ordner"
                    icon="pi pi-folder"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !border-transparent !bg-transparent !px-[11px] !py-0 !text-sm !font-medium !text-[#64748b]"
                />
                <Button
                    label="Konto"
                    icon="pi pi-user"
                    severity="secondary"
                    variant="outlined"
                    fluid
                    class="!h-[33px] !justify-start !border-transparent !bg-transparent !px-[11px] !py-0 !text-sm !font-medium !text-[#64748b]"
                />
            </nav>
        </div>

        <div class="flex w-full flex-col items-center">
            <Divider class="!m-0 !h-[29px] !w-full" style="--p-divider-border-color: #64748b" />

            <div class="flex items-center gap-4">
                <Avatar
                    label="B"
                    size="large"
                    shape="circle"
                    class="!h-[42px] !w-[42px] !bg-[#64748b] !text-[21px] !text-white"
                    aria-label="Benutzername"
                />
                <span class="text-base font-normal leading-[19px]">Benutzername</span>
            </div>
        </div>
    </aside>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
</script>