<template>
    <main class="min-h-screen bg-white p-6">
        <aside class="flex h-[32rem] w-60 flex-col bg-slate-200 px-6 py-5">
            <h1 class="mb-6 text-center text-2xl font-normal text-slate-700">Emails</h1>

            <nav class="flex flex-col gap-3" aria-label="Main navigation">
                <Button
                    label="Postfach"
                    icon="pi pi-inbox"
                    variant="text"
                    :class="[
                        'justify-start !border-0 !px-3 !py-2 !text-sm !font-normal',
                        activeNav === 'inbox'
                            ? '!bg-slate-50 !text-slate-500'
                            : '!text-slate-500'
                    ]"
                    @click="activeNav = 'inbox'"
                />
                <Button
                    label="Ordner"
                    icon="pi pi-folder"
                    variant="text"
                    :class="[
                        'justify-start !border-0 !px-3 !py-2 !text-sm !font-normal',
                        activeNav === 'folders'
                            ? '!bg-slate-50 !text-slate-500'
                            : '!text-slate-500'
                    ]"
                    @click="activeNav = 'folders'"
                />
                <Button
                    label="Konto"
                    icon="pi pi-user"
                    variant="text"
                    :class="[
                        'justify-start !border-0 !px-3 !py-2 !text-sm !font-normal',
                        activeNav === 'account'
                            ? '!bg-slate-50 !text-slate-500'
                            : '!text-slate-500'
                    ]"
                    @click="activeNav = 'account'"
                />
            </nav>

            <div class="mt-auto">
                <Divider class="!my-3" />
                <div class="flex items-center gap-4 px-2">
                    <Avatar
                        label="B"
                        shape="circle"
                        class="!h-11 !w-11 !bg-slate-500 !text-xl !text-white"
                        aria-label="Benutzername"
                    />
                    <span class="text-base text-slate-700">Benutzername</span>
                </div>
            </div>
        </aside>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Divider from 'primevue/divider';

const activeNav = ref('inbox');
</script>