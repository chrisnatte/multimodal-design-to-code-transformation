<template>
    <main class="flex min-h-screen items-start justify-center bg-white pt-6">
        <Card class="w-[258px] border border-surface-100 !shadow-sm">
            <template #title>
                <div class="flex items-center justify-between">
                    <span class="text-lg font-medium text-surface-700">Paket 1</span>
                    <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="!text-xs" />
                </div>
            </template>

            <template #content>
                <div class="flex flex-col gap-3 pt-1">
                    <div class="flex items-center gap-2">
                        <Checkbox v-model="unlimitedProjects" inputId="projects" binary />
                        <label for="projects" class="text-sm text-surface-600">Unbegrenzte Projekte</label>
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox v-model="unlimitedDashboards" inputId="dashboards" binary />
                        <label for="dashboards" class="text-sm text-surface-600">Unbegrenzte Dashboards</label>
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox v-model="advancedAnalytics" inputId="analytics" binary />
                        <label for="analytics" class="text-sm text-surface-600">Erweiterte Analytics</label>
                    </div>

                    <div class="mt-3 border-t border-surface-200 pt-4">
                        <Button label="Jetzt starten" fluid />
                    </div>
                </div>
            </template>
        </Card>
    </main>
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