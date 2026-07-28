<template>
    <div class="flex min-h-screen items-start justify-center bg-white pt-6">
        <Card class="w-64">
            <template #content>
                <div class="flex items-center justify-between">
                    <h2 class="text-lg font-medium text-surface-700">Paket 1</h2>
                    <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="text-xs" />
                </div>

                <div class="mt-7 flex flex-col gap-3">
                    <div class="flex items-center gap-2">
                        <Checkbox v-model="unlimitedProjects" inputId="projects" binary disabled />
                        <label for="projects" class="text-sm text-surface-700">Unbegrenzte Projekte</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox v-model="unlimitedDashboards" inputId="dashboards" binary disabled />
                        <label for="dashboards" class="text-sm text-surface-700">Unbegrenzte Dashboards</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <Checkbox v-model="advancedAnalytics" inputId="analytics" binary disabled />
                        <label for="analytics" class="text-sm text-surface-700">Erweiterte Analytics</label>
                    </div>
                </div>

                <Button label="Jetzt starten" severity="success" size="small" fluid class="mt-7" />
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Tag from 'primevue/tag';

const unlimitedProjects = ref(true);
const unlimitedDashboards = ref(true);
const advancedAnalytics = ref(true);
</script>