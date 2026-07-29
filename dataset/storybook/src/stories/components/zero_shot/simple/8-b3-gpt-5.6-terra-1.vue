<template>
    <div class="flex w-fit flex-col bg-white p-6">
        <div class="flex items-end justify-end gap-3">
            <div class="flex w-[216px] flex-col gap-2">
                <label for="search" class="text-sm font-normal text-surface-900">Suche</label>
                <span class="relative">
                    <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-surface-500" />
                    <InputText
                        id="search"
                        v-model="searchQuery"
                        placeholder="Nach Namen suchen"
                        variant="filled"
                        class="h-[33px] w-full !rounded-md !py-[7px] !pl-9 !pr-[10px] !text-sm"
                    />
                </span>
            </div>

            <Button
                aria-label="Suche bestätigen"
                icon="pi pi-check"
                rounded
                class="h-[35px] w-[35px] !bg-emerald-500 !border-emerald-500"
                @click="submitSearch"
            />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchQuery = ref('');

const submitSearch = () => {
    return searchQuery.value;
};
</script>