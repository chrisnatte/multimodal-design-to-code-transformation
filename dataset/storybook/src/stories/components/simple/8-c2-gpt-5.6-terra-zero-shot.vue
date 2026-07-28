<template>
    <div class="flex min-h-[109px] w-[311px] flex-col gap-2 bg-white px-6 py-6">
        <label for="search" class="text-sm font-normal text-slate-700">Suche</label>
        <div class="flex items-center gap-3">
            <span class="relative flex-1">
                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400"></i>
                <InputText
                    id="search"
                    v-model="searchQuery"
                    placeholder="Nach Namen suchen"
                    aria-label="Nach Namen suchen"
                    class="w-full !py-2 !pl-9 !pr-3 text-sm"
                />
            </span>
            <Button icon="pi pi-check" severity="success" aria-label="Suche bestätigen" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchQuery = ref('');
</script>