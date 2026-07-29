<template>
    <div class="flex w-[479px] flex-col gap-2.5 bg-white p-6">
        <div class="flex min-h-[128px] w-[431px] gap-1">
            <div class="flex h-fit items-start gap-[7px] rounded-md bg-white p-[14px]">
                <Breadcrumb :home="home" :model="breadcrumbItems" class="p-0">
                    <template #item="{ item, props }">
                        <a v-bind="props.action" class="flex items-center gap-[7px] text-sm text-surface-700">
                            <span v-if="item.icon" :class="item.icon" class="text-sm" />
                            <span>{{ item.label }}</span>
                        </a>
                    </template>
                </Breadcrumb>

                <span class="pi pi-chevron-right mt-2 text-sm text-surface-500" aria-hidden="true"></span>

                <div class="relative flex flex-col gap-0.5">
                    <Button
                        label="Dashboard anzeigen"
                        severity="secondary"
                        size="small"
                        class="h-[33px] whitespace-nowrap"
                        aria-haspopup="menu"
                        aria-controls="dashboard-menu"
                    />
                    <Menu
                        id="dashboard-menu"
                        :model="dashboardItems"
                        class="w-[175px] border border-surface-200"
                        aria-label="Dashboard auswählen"
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