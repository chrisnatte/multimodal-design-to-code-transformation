<template>
    <Card class="w-[512px] rounded-xl border border-surface-100 shadow-sm">
        <template #content>
            <div class="flex flex-col gap-6 p-[17.5px]">
                <div class="flex flex-col gap-[7px]">
                    <h2 class="m-0 text-[17.5px] font-medium text-surface-700">Dashboardeinrichtung</h2>
                    <p class="m-0 text-sm font-normal leading-[17px] text-surface-500">
                        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                    </p>
                </div>

                <div class="flex flex-col gap-3">
                    <ProgressBar :value="progress" :showValue="false" class="h-[17.5px]">
                        <span class="text-[10.5px] font-semibold text-white">{{ progress }}%</span>
                    </ProgressBar>
                    <span class="text-xs font-light text-surface-600">Projektmetriken werden analysiert</span>
                </div>

                <div class="flex justify-end">
                    <Button label="Weiter" severity="secondary" size="small" disabled />
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

const progress = ref(50);
</script>