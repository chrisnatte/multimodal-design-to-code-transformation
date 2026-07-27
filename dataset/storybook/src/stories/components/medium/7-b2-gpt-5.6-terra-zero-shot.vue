<template>
    <Card
        class="w-64 !rounded-xl"
        :pt="{
            body: { class: 'p-0' },
            content: { class: 'p-0' }
        }"
    >
        <template #content>
            <div class="flex flex-col gap-8 p-[17.5px]">
                <div class="flex items-center justify-between gap-[7px]">
                    <span class="text-[17.5px] font-medium leading-[21px]">Paket 1</span>
                    <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" />
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-[7px]">
                        <Checkbox v-model="unlimitedProjects" inputId="unlimited-projects" binary />
                        <label for="unlimited-projects" class="text-sm leading-[17px]">Unbegrenzte Projekte</label>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox v-model="unlimitedDashboards" inputId="unlimited-dashboards" binary />
                        <label for="unlimited-dashboards" class="text-sm leading-[17px]">Unbegrenzte Dashboards</label>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox v-model="advancedAnalytics" inputId="advanced-analytics" binary />
                        <label for="advanced-analytics" class="text-sm leading-[17px]">Erweiterte Analytics</label>
                    </div>
                </div>

                <div class="flex gap-[7px]">
                    <Button label="Jetzt starten" fluid class="h-[33px]" />
                </div>
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