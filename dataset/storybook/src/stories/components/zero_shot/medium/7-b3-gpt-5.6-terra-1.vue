<template>
    <div class="flex w-[304px] flex-col gap-2.5 bg-white p-6">
        <Card
            class="w-64 overflow-hidden rounded-xl bg-white shadow-none"
            :pt="{
                body: { class: '!p-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #content>
                <div class="flex flex-col gap-8 rounded-md p-[17.5px]">
                    <div class="flex items-center justify-between gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[21px] text-surface-900">Paket 1</span>
                        <Tag value="Beliebt" icon="pi pi-arrow-up-right" severity="info" class="text-[12.25px] font-bold" />
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-[7px]">
                            <Checkbox v-model="unlimitedProjects" input-id="unlimited-projects" binary />
                            <label for="unlimited-projects" class="text-sm font-normal leading-[17px] text-surface-900">
                                Unbegrenzte Projekte
                            </label>
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox v-model="unlimitedDashboards" input-id="unlimited-dashboards" binary />
                            <label for="unlimited-dashboards" class="text-sm font-normal leading-[17px] text-surface-900">
                                Unbegrenzte Dashboards
                            </label>
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox v-model="advancedAnalytics" input-id="advanced-analytics" binary />
                            <label for="advanced-analytics" class="text-sm font-normal leading-[17px] text-surface-900">
                                Erweiterte Analytics
                            </label>
                        </div>
                    </div>

                    <div class="flex gap-[7px]">
                        <Button
                            label="Jetzt starten"
                            class="h-[33px] w-full !border-emerald-500 !bg-emerald-500 !text-sm !font-medium"
                        />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Checkbox from 'primevue/checkbox'
import Tag from 'primevue/tag'

const unlimitedProjects = ref(true)
const unlimitedDashboards = ref(true)
const advancedAnalytics = ref(true)
</script>