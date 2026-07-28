<template>
    <div class="h-[176px] w-[479px] bg-white p-6">
        <div class="flex items-start gap-[7px] rounded-md bg-white p-[14px]">
            <div class="flex items-center gap-[7px] pt-[8px]">
                <Breadcrumb :home="home" :model="breadcrumbItems" class="!border-0 !bg-transparent !p-0">
                    <template #item="{ item, props }">
                        <a v-bind="props.action" class="flex items-center gap-[7px] text-sm text-slate-500 no-underline">
                            <i v-if="item.icon" :class="item.icon" class="text-[14px] text-slate-400" />
                            <span v-if="item.label">{{ item.label }}</span>
                        </a>
                    </template>
                </Breadcrumb>
                <i class="pi pi-chevron-right text-[14px] text-slate-400" aria-hidden="true" />
            </div>

            <div class="flex w-[175px] flex-col gap-0.5">
                <Button
                    label="Dashboard anzeigen"
                    severity="secondary"
                    size="small"
                    class="!h-[33px] !justify-start !border-0 !bg-slate-100 !px-[11px] !text-sm !font-medium !text-slate-600"
                />
                <Menu :model="dashboardItems" class="w-[175px]" />
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
    {
        label: 'Projekt1'
    },
    {
        label: 'Gruppe1',
        icon: 'pi pi-table'
    }
]);

const dashboardItems = ref([
    {
        label: 'Dashboard 1'
    },
    {
        label: 'Dashboard 2'
    }
]);
</script>