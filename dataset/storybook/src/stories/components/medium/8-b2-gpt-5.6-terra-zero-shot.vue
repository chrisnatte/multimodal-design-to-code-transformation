<template>
    <div class="flex h-[512px] w-[240px] flex-col justify-between gap-6 bg-[#e2e8f0] p-6 font-[Inter]">
        <div class="flex w-full flex-col items-center gap-6">
            <span class="text-2xl font-normal">Emails</span>

            <div class="flex w-full flex-col gap-4">
                <Button
                    label="Postfach"
                    icon="pi pi-inbox"
                    severity="secondary"
                    variant="outlined"
                    class="h-[33px] w-full justify-start !bg-[#f1f5f9]"
                />
                <Button
                    label="Ordner"
                    icon="pi pi-folder"
                    severity="secondary"
                    variant="outlined"
                    class="h-[33px] w-full justify-start"
                />
                <Button
                    label="Konto"
                    icon="pi pi-user"
                    severity="secondary"
                    variant="outlined"
                    class="h-[33px] w-full justify-start"
                />
            </div>
        </div>

        <div class="flex w-full flex-col items-center">
            <Divider class="!my-0 w-full" />
            <div class="flex items-center gap-4">
                <Avatar
                    label="B"
                    size="large"
                    shape="circle"
                    class="!h-[42px] !w-[42px]"
                    style="background-color: #64748b; color: #ffffff"
                    aria-label="Benutzername"
                />
                <span class="text-base font-normal">Benutzername</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
</script>