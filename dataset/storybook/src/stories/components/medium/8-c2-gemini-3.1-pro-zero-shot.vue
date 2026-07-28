<template>
    <div class="w-[280px] h-screen bg-[#eef2f6] flex flex-col p-6 font-sans">
        <!-- Header -->
        <div class="text-center mb-8 mt-4">
            <h1 class="text-2xl font-semibold text-slate-700 m-0">Emails</h1>
        </div>

        <!-- Navigation -->
        <div class="flex flex-col gap-2 flex-grow">
            <Button 
                icon="pi pi-envelope" 
                label="Postfach" 
                variant="text" 
                class="w-full justify-start bg-white text-slate-700 font-medium rounded-lg hover:bg-gray-50 px-4 py-3" 
            />
            <Button 
                icon="pi pi-folder" 
                label="Ordner" 
                variant="text" 
                class="w-full justify-start text-slate-500 font-medium rounded-lg hover:bg-slate-200/50 px-4 py-3" 
            />
            <Button 
                icon="pi pi-user" 
                label="Konto" 
                variant="text" 
                class="w-full justify-start text-slate-500 font-medium rounded-lg hover:bg-slate-200/50 px-4 py-3" 
            />
        </div>

        <!-- Divider -->
        <Divider class="my-6 border-slate-300" />

        <!-- User Profile -->
        <div class="flex items-center gap-4 px-2 pb-4">
            <Avatar 
                label="B" 
                shape="circle" 
                size="large" 
                class="bg-[#64748b] text-white font-semibold" 
            />
            <span class="text-slate-700 font-medium text-lg">Benutzername</span>
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Avatar from 'primevue/avatar';
</script>