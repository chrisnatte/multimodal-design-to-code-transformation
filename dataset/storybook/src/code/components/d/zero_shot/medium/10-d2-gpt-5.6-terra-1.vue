<template>
    <main class="flex h-[270.5px] w-[560px] bg-white p-6">
        <Card
            class="h-[222.5px] w-full rounded-xl border border-slate-100 shadow-sm [&_.p-card-body]:h-full [&_.p-card-body]:p-[17.5px] [&_.p-card-content]:h-full [&_.p-card-content]:p-0"
        >
            <template #content>
                <div class="flex h-full flex-col gap-6">
                    <div class="flex flex-col gap-[7px]">
                        <h2 class="m-0 text-[17.5px] font-medium leading-[21px] text-slate-700">Dashboardeinrichtung</h2>
                        <p class="m-0 text-sm font-normal leading-[17px] text-slate-500">
                            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                        </p>
                    </div>

                    <div class="flex flex-col gap-3">
                        <ProgressBar
                            :value="progressValue"
                            aria-label="Dashboardeinrichtung Fortschritt"
                            class="h-[17.5px] [--p-progressbar-background:#e2e8f0] [--p-progressbar-border-radius:6px] [--p-progressbar-label-color:#ffffff] [--p-progressbar-label-font-size:10.5px] [--p-progressbar-label-font-weight:600] [--p-progressbar-value-background:#10b981]"
                        />
                        <span class="text-xs font-light leading-[15px] text-slate-600">Projektmetriken werden analysiert</span>
                    </div>

                    <div class="flex justify-end">
                        <Button label="Weiter" severity="secondary" size="small" disabled />
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
</script>