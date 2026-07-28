<template>
    <Card class="w-[258px] overflow-hidden rounded-xl border border-surface-100 shadow-sm">
        <template #content>
            <div class="flex flex-col gap-6 px-1 py-0">
                <div class="flex items-center justify-between">
                    <h2 class="m-0 text-base font-medium text-surface-700">Paket 1</h2>
                    <Tag value="↗ Beliebt" severity="info" class="text-xs" />
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-2">
                        <Checkbox v-model="unlimitedProjects" binary input-id="projects" />
                        <label for="projects" class="text-sm text-surface-700">Unbegrenzte Projekte</label>
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox v-model="unlimitedDashboards" binary input-id="dashboards" />
                        <label for="dashboards" class="text-sm text-surface-700">Unbegrenzte Dashboards</label>
                    </div>

                    <div class="flex items-center gap-2">
                        <Checkbox v-model="advancedAnalytics" binary input-id="analytics" />
                        <label for="analytics" class="text-sm text-surface-700">Erweiterte Analytics</label>
                    </div>
                </div>

                <Button label="Jetzt starten" fluid />
            </div>
        </template>
    </Card>
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