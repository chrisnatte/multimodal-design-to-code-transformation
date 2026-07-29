<template>
    <aside class="flex h-[32rem] w-[15rem] flex-col bg-slate-200 px-6 py-5 text-slate-600">
        <Button
            label="Emails"
            variant="text"
            plain
            class="mb-5 self-center !p-0 !text-2xl !font-normal !text-slate-700"
        />

        <nav class="flex flex-col gap-3">
            <Button
                label="Postfach"
                icon="pi pi-inbox"
                variant="text"
                plain
                class="w-full !justify-start !rounded-md !bg-slate-50 !px-3 !py-2 !text-sm !font-normal !text-slate-500"
            />
            <Button
                label="Ordner"
                icon="pi pi-folder"
                variant="text"
                plain
                class="w-full !justify-start !px-3 !py-2 !text-sm !font-normal !text-slate-500"
            />
            <Button
                label="Konto"
                icon="pi pi-user"
                variant="text"
                plain
                class="w-full !justify-start !px-3 !py-2 !text-sm !font-normal !text-slate-500"
            />
        </nav>

        <div class="mt-auto">
            <Divider class="!my-3" />
            <div class="flex items-center gap-3 px-3 pt-1">
                <Avatar
                    label="B"
                    shape="circle"
                    class="!h-11 !w-11 !bg-slate-500 !text-xl !text-white"
                    aria-label="Benutzername"
                />
                <Button
                    label="Benutzername"
                    variant="text"
                    plain
                    class="!p-0 !text-sm !font-normal !text-slate-700"
                />
            </div>
        </div>
    </aside>
</template>

<script setup>
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
</script>