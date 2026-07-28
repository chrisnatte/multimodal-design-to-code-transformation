<template>
    <div class="flex min-h-[271px] items-start bg-white p-6">
        <Card class="w-full max-w-[512px] border border-surface-100 shadow-sm">
            <template #content>
                <div class="flex flex-col gap-5">
                    <div>
                        <h1 class="m-0 text-lg font-medium text-slate-700">Dashboardeinrichtung</h1>
                        <p class="mb-0 mt-1 text-sm text-slate-500">
                            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                        </p>
                    </div>

                    <div class="flex flex-col gap-2">
                        <ProgressBar :value="progress" :showValue="false" aria-label="Einrichtungsfortschritt" />
                        <span class="text-xs text-slate-500">Projektmetriken werden analysiert</span>
                    </div>

                    <div class="flex justify-end pt-1">
                        <Button label="Weiter" severity="secondary" variant="text" disabled />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';

const progress = ref(50);
</script>