<template>
    <div class="flex w-full flex-col gap-2 p-6">
        <label for="search" class="text-sm font-normal text-surface-900">Suche</label>
        <div class="flex items-center gap-3">
            <span class="relative">
                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-sm text-surface-400"></i>
                <InputText
                    id="search"
                    v-model="searchQuery"
                    placeholder="Nach Namen suchen"
                    class="w-54 !bg-surface-50 pl-9"
                />
            </span>
            <Button icon="pi pi-check" aria-label="Suche bestätigen" severity="success" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchQuery = ref('');
</script>