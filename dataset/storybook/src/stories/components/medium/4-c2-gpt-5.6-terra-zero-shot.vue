<template>
    <div class="flex min-h-44 items-start px-9 pt-9">
        <Breadcrumb :home="home" :model="breadcrumbItems" aria-label="Navigationspfad">
            <template #item="{ item, props }">
                <div v-if="item.label === 'Dashboard anzeigen'" class="relative">
                    <Button
                        :label="item.label"
                        severity="secondary"
                        variant="text"
                        class="!bg-surface-100 !px-3 !py-2"
                        aria-haspopup="true"
                        :aria-expanded="menuVisible"
                        @click="menuVisible = !menuVisible"
                    />
                    <Menu
                        v-if="menuVisible"
                        :model="dashboardItems"
                        class="absolute left-0 top-full z-10 mt-0 w-44 shadow-md"
                    />
                </div>
                <a v-else v-bind="props.action" class="flex items-center gap-2 no-underline">
                    <span v-if="item.icon" :class="item.icon" />
                    <span>{{ item.label }}</span>
                </a>
            </template>
        </Breadcrumb>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';
import Button from 'primevue/button';
import Menu from 'primevue/menu';

const menuVisible = ref(true);

const home = ref({
    icon: 'pi pi-home'
});

const breadcrumbItems = ref([
    { label: 'Projekt1' },
    { icon: 'pi pi-table', label: 'Gruppe1' },
    { label: 'Dashboard anzeigen' }
]);

const dashboardItems = ref([
    { label: 'Dashboard 1' },
    { label: 'Dashboard 2' }
]);
</script>