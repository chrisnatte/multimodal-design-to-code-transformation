<template>
    <div class="flex items-end gap-3">
        <div class="flex w-[216px] flex-col gap-[7px]">
            <label for="search" class="text-sm font-normal text-slate-700">Suche</label>
            <span class="relative">
                <i class="pi pi-search absolute left-3 top-1/2 z-10 -translate-y-1/2 text-sm text-slate-400"></i>
                <InputText
                    id="search"
                    v-model="searchValue"
                    placeholder="Nach Namen suchen"
                    variant="filled"
                    class="h-[33px] w-full !border-slate-300 !bg-slate-50 !py-[7px] !pl-[35px] !pr-3 !text-sm"
                />
            </span>
        </div>

        <Button
            icon="pi pi-check"
            rounded
            aria-label="Submit"
            class="h-[35px] w-[35px] !bg-emerald-500 !p-0 !text-sm !border-emerald-500"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

const searchValue = ref('')
</script>