<template>
    <div class="flex items-end justify-end gap-3">
        <div class="flex w-[216px] flex-col gap-[7px]">
            <label for="search-input" class="text-sm font-normal">Suche</label>
            <span class="relative">
                <i class="pi pi-search absolute left-[11px] top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500"></i>
                <InputText
                    id="search-input"
                    v-model="searchValue"
                    placeholder="Nach Namen suchen"
                    variant="filled"
                    class="h-[33px] w-full !rounded-md !border-surface-300 !py-[7px] !pl-9 !pr-[11px] !text-sm"
                />
            </span>
        </div>

        <Button icon="pi pi-check" rounded aria-label="Submit search" class="h-[35px] w-[35px]" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchValue = ref('');
</script>