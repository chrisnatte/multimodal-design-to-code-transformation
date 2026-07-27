<template>
    <Card class="w-full max-w-[512px] overflow-hidden rounded-xl bg-white">
        <template #content>
            <div class="flex flex-col gap-6 p-[17.5px]">
                <div class="flex flex-col gap-[7px]">
                    <h2 class="m-0 text-[17.5px] font-medium leading-[21px] text-surface-900">
                        Dashboardeinrichtung
                    </h2>
                    <p class="m-0 text-sm font-normal leading-[17px] text-surface-700">
                        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                    </p>
                </div>

                <div class="flex flex-col gap-3">
                    <ProgressBar
                        :value="progressValue"
                        :showValue="true"
                        aria-label="Fortschritt der Dashboardeinrichtung"
                        class="h-[17.5px]"
                    >
                        <span class="text-[10.5px] font-semibold leading-[13px] text-white">{{ progressValue }}%</span>
                    </ProgressBar>
                    <span class="text-xs font-light leading-[15px] text-surface-600">
                        Projektmetriken werden analysiert
                    </span>
                </div>

                <div class="flex justify-end gap-[7px]">
                    <Button
                        label="Weiter"
                        severity="secondary"
                        :disabled="isNextDisabled"
                        size="small"
                    />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';

const progressValue = ref(50);
const isNextDisabled = ref(true);
</script>