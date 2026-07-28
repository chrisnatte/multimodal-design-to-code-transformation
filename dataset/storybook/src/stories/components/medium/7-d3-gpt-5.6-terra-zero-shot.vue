<template>
    <div class="flex min-h-[287px] items-start bg-white p-6">
        <Card
            class="w-64 overflow-hidden rounded-xl border border-slate-100 bg-white shadow-sm"
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
                            class="!h-[22px] !bg-[#e0f2fe] !px-1.5 !py-0.5 !text-[12.25px] !font-bold !text-[#0284c7]"
                        />
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="unlimitedProjects"
                                input-id="unlimited-projects"
                                binary
                                class="!h-[17.5px] !w-[17.5px]"
                                :pt="{
                                    box: { class: '!border-[#10b981] !bg-[#10b981]' }
                                }"
                            />
                            <label for="unlimited-projects" class="text-sm leading-[17px] text-slate-700">
                                Unbegrenzte Projekte
                            </label>
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="unlimitedDashboards"
                                input-id="unlimited-dashboards"
                                binary
                                class="!h-[17.5px] !w-[17.5px]"
                                :pt="{
                                    box: { class: '!border-[#10b981] !bg-[#10b981]' }
                                }"
                            />
                            <label for="unlimited-dashboards" class="text-sm leading-[17px] text-slate-700">
                                Unbegrenzte Dashboards
                            </label>
                        </div>

                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="advancedAnalytics"
                                input-id="advanced-analytics"
                                binary
                                class="!h-[17.5px] !w-[17.5px]"
                                :pt="{
                                    box: { class: '!border-[#10b981] !bg-[#10b981]' }
                                }"
                            />
                            <label for="advanced-analytics" class="text-sm leading-[17px] text-slate-700">
                                Erweiterte Analytics
                            </label>
                        </div>
                    </div>

                    <Button
                        label="Jetzt starten"
                        class="!h-[33px] !w-full !border-[#10b981] !bg-[#10b981] !text-sm !font-medium"
                    />
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