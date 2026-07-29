<template>
    <main class="flex min-h-[271px] w-full items-center justify-center bg-white p-6">
        <Card class="w-full max-w-[512px] overflow-hidden rounded-xl border border-surface-100 shadow-sm">
            <template #content>
                <div class="flex flex-col gap-6 p-[17.5px]">
                    <div class="flex flex-col gap-[7px]">
                        <h2 class="m-0 text-[17.5px] font-medium leading-[21px] text-slate-700">
                            Dashboardeinrichtung
                        </h2>
                        <p class="m-0 text-sm font-normal leading-[17px] text-slate-500">
                            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                        </p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <ProgressBar
                            :value="progressValue"
                            :show-value="false"
                            class="h-[17.5px] overflow-hidden rounded-md"
                            :pt="{
                                root: { class: '!bg-slate-200 !rounded-md !h-[17.5px]' },
                                value: { class: '!bg-emerald-500 !rounded-l-md !rounded-r-none' }
                            }"
                        >
                            <span class="text-[10.5px] font-semibold leading-[13px] text-white">{{ progressValue }}%</span>
                        </ProgressBar>
                        <span class="text-xs font-light leading-[15px] text-slate-600">
                            Projektmetriken werden analysiert
                        </span>
                    </div>

                    <div class="flex justify-end">
                        <Button label="Weiter" severity="secondary" :disabled="isNextDisabled" size="small" />
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
import ProgressBar from 'primevue/progressbar';

const progressValue = ref(50);
const isNextDisabled = ref(true);
</script>