<template>
    <div class="flex w-fit items-end gap-3">
        <div class="flex w-[216px] flex-col gap-2">
            <label for="search-name" class="text-sm font-normal text-surface-700">Suche</label>
            <div class="relative">
                <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-400"></i>
                <InputText
                    id="search-name"
                    v-model="searchName"
                    placeholder="Nach Namen suchen"
                    variant="filled"
                    fluid
                    class="h-[33px] !rounded-md !border-surface-300 !bg-surface-50 !py-1.5 !pl-9 !pr-3 text-sm"
                />
            </div>
        </div>
        <Button
            icon="pi pi-check"
            rounded
            aria-label="Suche bestätigen"
            class="!h-[35px] !w-[35px] !bg-emerald-500 !p-0 !border-emerald-500"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchName = ref('');
</script>