<template>
    <div class="flex min-h-[287px] items-start justify-center bg-white p-6">
        <Card class="w-64 shadow-sm">
            <template #content>
                <div class="flex flex-col gap-6">
                    <div class="flex items-center justify-between">
                        <h2 class="m-0 text-lg font-medium text-slate-700">Paket 1</h2>
                        <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="text-xs" />
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-2">
                            <Checkbox v-model="unlimitedProjects" input-id="projects" binary />
                            <label for="projects" class="text-sm text-slate-700">Unbegrenzte Projekte</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <Checkbox v-model="unlimitedDashboards" input-id="dashboards" binary />
                            <label for="dashboards" class="text-sm text-slate-700">Unbegrenzte Dashboards</label>
                        </div>
                        <div class="flex items-center gap-2">
                            <Checkbox v-model="advancedAnalytics" input-id="analytics" binary />
                            <label for="analytics" class="text-sm text-slate-700">Erweiterte Analytics</label>
                        </div>
                    </div>

                    <Divider class="my-0" />

                    <Button label="Jetzt starten" fluid />
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Checkbox from 'primevue/checkbox';
import Divider from 'primevue/divider';
import Tag from 'primevue/tag';

const unlimitedProjects = ref(true);
const unlimitedDashboards = ref(true);
const advancedAnalytics = ref(true);
</script>