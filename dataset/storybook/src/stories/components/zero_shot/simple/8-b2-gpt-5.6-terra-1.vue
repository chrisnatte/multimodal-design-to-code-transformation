<template>
    <div class="flex w-fit flex-col bg-white p-6">
        <div class="flex items-end justify-end gap-3">
            <div class="flex w-[216px] flex-col gap-2">
                <label for="search-input" class="text-sm font-normal text-surface-900">Suche</label>
                <span class="relative">
                    <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500"></i>
                    <InputText
                        id="search-input"
                        v-model="searchQuery"
                        placeholder="Nach Namen suchen"
                        variant="filled"
                        class="h-[33px] w-full !rounded-md !border-surface-300 !bg-surface-50 !py-[7px] !pl-9 !pr-3 !text-sm"
                    />
                </span>
            </div>

            <Button
                icon="pi pi-check"
                rounded
                aria-label="Suche bestätigen"
                class="h-[35px] w-[35px] !bg-emerald-500 !border-emerald-500"
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