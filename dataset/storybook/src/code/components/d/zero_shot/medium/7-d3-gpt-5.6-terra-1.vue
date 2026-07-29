<template>
    <div class="flex w-[304px] flex-col gap-2.5 bg-white p-6">
        <Card class="w-64 overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <template #content>
                <div class="flex flex-col gap-8 p-[17.5px]">
                    <div class="flex items-center justify-between gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[22px] text-slate-700">Paket 1</span>
                        <Tag
                            value="Beliebt"
                            icon="pi pi-arrow-up-right"
                            severity="info"
                            class="!h-[22px] !bg-[#e0f2fe] !px-[7px] !py-0 !text-[12.25px] !font-bold !text-[#0284c7]"
                        />
                    </div>

                    <div class="flex flex-col gap-4">
                        <div class="flex items-center gap-[7px]">
                            <Checkbox
                                v-model="unlimitedProjects"
                                input-id="unlimited-projects"
                                binary
                                :pt="checkboxPassThrough"
                                style="--p-checkbox-checked-background: #10b981; --p-checkbox-checked-border-color: #10b981"
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
                                :pt="checkboxPassThrough"
                                style="--p-checkbox-checked-background: #10b981; --p-checkbox-checked-border-color: #10b981"
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
                                :pt="checkboxPassThrough"
                                style="--p-checkbox-checked-background: #10b981; --p-checkbox-checked-border-color: #10b981"
                            />
                            <label for="advanced-analytics" class="text-sm leading-[17px] text-slate-700">
                                Erweiterte Analytics
                            </label>
                        </div>
                    </div>

                    <Button
                        label="Jetzt starten"
                        class="h-[33px] w-full !border-[#10b981] !bg-[#10b981] !px-4 !py-2 !text-sm !font-medium hover:!border-[#10b981] hover:!bg-[#10b981]"
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

const checkboxPassThrough = {
    box: {
        class: '!h-[17.5px] !w-[17.5px] !rounded-[4px]'
    },
    icon: {
        class: '!h-[12.2px] !w-[12.2px]'
    }
}
</script>