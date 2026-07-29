<template>
    <div class="flex w-[311px] flex-col bg-white p-6">
        <div class="flex items-end gap-3">
            <div class="flex w-[216px] flex-col gap-2">
                <label for="search" class="text-sm font-normal text-surface-700">Suche</label>
                <span class="relative">
                    <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500"></i>
                    <InputText
                        id="search"
                        v-model="searchQuery"
                        placeholder="Nach Namen suchen"
                        variant="filled"
                        class="w-full !bg-surface-50 pl-9"
                    />
                </span>
            </div>
            <Button
                icon="pi pi-check"
                rounded
                aria-label="Suche bestätigen"
                class="!h-[35px] !w-[35px] !bg-emerald-500 !border-emerald-500"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchQuery = ref('');
</script>