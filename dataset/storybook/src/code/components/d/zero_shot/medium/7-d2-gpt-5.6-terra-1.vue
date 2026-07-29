<template>
    <div class="flex h-[287px] w-[304px] flex-col bg-white p-6">
        <Card
            class="w-64 shadow-sm"
            :pt="{
                body: { class: '!p-[17.5px]' },
                content: { class: '!p-0' }
            }"
        >
            <template #content>
                <div class="flex flex-col gap-8">
                    <div class="flex items-center justify-between gap-2">
                        <span class="text-[17.5px] font-medium text-slate-700">Paket 1</span>
                        <Tag
                            value="Beliebt"
                            icon="pi pi-arrow-up-right"
                            severity="info"
                            class="!gap-1 !px-2 !py-1 !text-[12.25px] !font-bold"
                        />
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="unlimitedProjects"
                                inputId="unlimited-projects"
                                binary
                                :dt="{
                                    checkedBackground: '#10b981',
                                    checkedBorderColor: '#10b981',
                                    checkedHoverBackground: '#10b981',
                                    checkedHoverBorderColor: '#10b981'
                                }"
                            />
                            <label for="unlimited-projects" class="text-sm text-slate-700">Unbegrenzte Projekte</label>
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="unlimitedDashboards"
                                inputId="unlimited-dashboards"
                                binary
                                :dt="{
                                    checkedBackground: '#10b981',
                                    checkedBorderColor: '#10b981',
                                    checkedHoverBackground: '#10b981',
                                    checkedHoverBorderColor: '#10b981'
                                }"
                            />
                            <label for="unlimited-dashboards" class="text-sm text-slate-700">Unbegrenzte Dashboards</label>
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="advancedAnalytics"
                                inputId="advanced-analytics"
                                binary
                                :dt="{
                                    checkedBackground: '#10b981',
                                    checkedBorderColor: '#10b981',
                                    checkedHoverBackground: '#10b981',
                                    checkedHoverBorderColor: '#10b981'
                                }"
                            />
                            <label for="advanced-analytics" class="text-sm text-slate-700">Erweiterte Analytics</label>
                        </div>
                    </div>

                    <Button
                        label="Jetzt starten"
                        size="small"
                        class="w-full !border-[#10b981] !bg-[#10b981] !py-2 !font-medium hover:!border-[#10b981] hover:!bg-[#10b981]"
                    />
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
import Tag from 'primevue/tag';

const unlimitedProjects = ref(true);
const unlimitedDashboards = ref(true);
const advancedAnalytics = ref(true);
</script>