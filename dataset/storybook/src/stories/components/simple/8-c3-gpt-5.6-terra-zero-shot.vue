<template>
    <div class="flex items-end gap-3 p-6">
        <div class="flex flex-col gap-2">
            <label for="search" class="text-sm text-slate-700">Suche</label>
            <span class="relative">
                <i class="pi pi-search absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"></i>
                <InputText
                    id="search"
                    v-model="searchValue"
                    placeholder="Nach Namen suchen"
                    class="w-54 !py-2 !pl-9 !text-sm"
                />
            </span>
        </div>
        <Button icon="pi pi-check" aria-label="Suchen" class="!h-9 !w-9" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';

const searchValue = ref('');
</script>