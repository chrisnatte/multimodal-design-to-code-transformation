<template>
    <div class="flex min-h-44 items-start px-9 pt-9">
        <div class="flex items-start">
            <Breadcrumb :home="home" :model="breadcrumbItems" class="!bg-transparent !p-0" />
            <div class="relative -ml-1">
                <Button
                    label="Dashboard anzeigen"
                    severity="secondary"
                    variant="text"
                    class="!rounded-md !px-3 !py-2 !text-sm"
                    aria-haspopup="true"
                    aria-expanded="true"
                    aria-controls="dashboard_menu"
                />
                <Menu id="dashboard_menu" :model="dashboardItems" class="absolute left-0 top-full z-10 !mt-0 !w-44" />
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