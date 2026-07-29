<template>
    <div class="flex min-h-44 w-[479px] flex-col gap-2.5 bg-white p-6">
        <div class="flex gap-1">
            <div class="relative h-32 w-[431px]">
                <Breadcrumb
                    :home="home"
                    :model="breadcrumbItems"
                    class="w-full !border-0 !bg-white !p-[14px] !shadow-none"
                >
                    <template #item="{ item, props }">
                        <a v-bind="props.action" class="flex items-center gap-[7px] whitespace-nowrap text-sm text-slate-500">
                            <span v-if="item.icon" :class="item.icon" class="text-sm text-slate-400" />
                            <span v-if="item.label">{{ item.label }}</span>
                        </a>
                    </template>

                    <template #separator>
                        <span class="pi pi-chevron-right text-xs text-slate-400" />
                    </template>
                </Breadcrumb>

                <div class="absolute left-[242px] top-[14px] z-10 flex flex-col">
                    <Button
                        label="Dashboard anzeigen"
                        severity="secondary"
                        class="!h-[33px] !rounded-md !border-0 !bg-slate-100 !px-3 !py-2 !text-sm !font-medium !text-slate-600"
                    />

                    <Menu
                        :model="dashboardItems"
                        class="mt-[2px] !w-[175px] !rounded-md !border-slate-200 !p-[3.5px] !shadow-md"
                        :pt="{
                            list: { class: '!gap-0.5' },
                            item: { class: '!rounded-sm' },
                            itemContent: { class: '!px-[10.5px] !py-[7px]' },
                            itemLabel: { class: '!text-sm !font-normal !text-slate-600' }
                        }"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const selectedDashboard = ref('');

const home = {
    icon: 'pi pi-home'
};

const breadcrumbItems = [
    {
        label: 'Projekt1'
    },
    {
        label: 'Gruppe1',
        icon: 'pi pi-table'
    }
];

const dashboardItems = [
    {
        label: 'Dashboard 1',
        command: () => {
            selectedDashboard.value = 'Dashboard 1';
        }
    },
    {
        label: 'Dashboard 2',
        command: () => {
            selectedDashboard.value = 'Dashboard 2';
        }
    }
];
</script>