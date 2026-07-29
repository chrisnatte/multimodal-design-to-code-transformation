<template>
    <div class="h-44 w-[479px] bg-white p-6">
        <div class="flex items-start gap-1">
            <Breadcrumb :home="home" :model="breadcrumbItems" class="!bg-transparent !p-3.5">
                <template #item="{ item, props }">
                    <a v-bind="props.action" class="flex items-center gap-2 text-sm text-surface-500 no-underline">
                        <span v-if="item.icon" :class="item.icon" class="text-[14px] text-surface-400" />
                        <span v-if="item.label">{{ item.label }}</span>
                    </a>
                </template>
            </Breadcrumb>

            <span class="flex h-[33px] items-center pt-3.5 text-[14px] text-surface-400">
                <i class="pi pi-chevron-right text-[12px]" aria-hidden="true"></i>
            </span>

            <div class="relative pt-0">
                <Button
                    label="Dashboard anzeigen"
                    severity="secondary"
                    class="!h-[33px] !border-0 !bg-surface-100 !px-3 !py-2 !text-sm !font-medium !text-surface-600"
                />
                <Menu
                    :model="dashboardItems"
                    class="absolute left-0 top-[34px] z-10 !w-[176px] !rounded-md !border !border-surface-200 !bg-white !p-1 !shadow-md"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const home = ref({
    icon: 'pi pi-home'
});

const breadcrumbItems = ref([
    { label: 'Projekt1' },
    { label: 'Gruppe1', icon: 'pi pi-table' }
]);

const dashboardItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
]);
</script>