<template>
    <div class="flex h-32 w-[431px] gap-1">
        <div class="flex h-32 w-full gap-[7px] rounded-md bg-white p-3.5">
            <div class="flex items-start gap-[7px] py-2">
                <Breadcrumb
                    :home="home"
                    :model="breadcrumbItems"
                    aria-label="Projektpfad"
                    class="!border-0 !bg-transparent !p-0"
                />
                <i class="pi pi-chevron-right mt-0.5 text-sm text-surface-500" aria-hidden="true"></i>
            </div>

            <div class="flex flex-col gap-0.5">
                <Button
                    label="Dashboard anzeigen"
                    severity="secondary"
                    size="small"
                    class="!bg-surface-100 !px-3 !py-2"
                    aria-label="Dashboard anzeigen"
                />
                <Menu :model="dashboardItems" class="w-[175px]" aria-label="Dashboard Auswahl" />
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