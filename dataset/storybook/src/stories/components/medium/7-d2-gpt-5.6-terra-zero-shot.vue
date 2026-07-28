<template>
    <Card
        class="w-64 overflow-hidden rounded-xl border border-surface-100 shadow-sm"
        :pt="{
            body: { class: '!p-0' },
            content: { class: '!p-0' }
        }"
    >
        <template #content>
            <div class="flex flex-col gap-8 p-[17.5px]">
                <div class="flex items-center justify-between gap-2">
                    <span class="text-[17.5px] font-medium leading-[22px] text-slate-700">Paket 1</span>
                    <Tag
                        value="Beliebt"
                        icon="pi pi-arrow-up-right"
                        severity="info"
                        class="!bg-sky-100 !px-2 !py-1 !text-[12.25px] !font-bold !text-sky-600"
                    />
                </div>

                <div class="flex flex-col gap-4">
                    <div class="flex items-center gap-[7px]">
                        <Checkbox
                            v-model="unlimitedProjects"
                            inputId="unlimited-projects"
                            binary
                            class="[&_.p-checkbox-box]:!border-emerald-500 [&_.p-checkbox-box.p-highlight]:!bg-emerald-500"
                        />
                        <label for="unlimited-projects" class="text-sm leading-[17px] text-slate-700">Unbegrenzte Projekte</label>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox
                            v-model="unlimitedDashboards"
                            inputId="unlimited-dashboards"
                            binary
                            class="[&_.p-checkbox-box]:!border-emerald-500 [&_.p-checkbox-box.p-highlight]:!bg-emerald-500"
                        />
                        <label for="unlimited-dashboards" class="text-sm leading-[17px] text-slate-700">Unbegrenzte Dashboards</label>
                    </div>

                    <div class="flex items-center gap-[7px]">
                        <Checkbox
                            v-model="advancedAnalytics"
                            inputId="advanced-analytics"
                            binary
                            class="[&_.p-checkbox-box]:!border-emerald-500 [&_.p-checkbox-box.p-highlight]:!bg-emerald-500"
                        />
                        <label for="advanced-analytics" class="text-sm leading-[17px] text-slate-700">Erweiterte Analytics</label>
                    </div>
                </div>

                <Button
                    label="Jetzt starten"
                    class="h-[33px] w-full !border-emerald-500 !bg-emerald-500 !py-0 !text-sm !font-medium"
                />
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