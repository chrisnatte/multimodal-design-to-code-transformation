<template>
    <div class="flex min-h-screen items-start bg-white p-6">
        <Card class="w-full max-w-[512px]">
            <template #title>
                <h1 class="m-0 text-lg font-medium text-slate-700">Dashboardeinrichtung</h1>
            </template>

            <template #subtitle>
                <p class="m-0 max-w-[460px] text-sm font-normal leading-4 text-slate-500">
                    Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                </p>
            </template>

            <template #content>
                <div class="flex flex-col gap-3 pt-2">
                    <ProgressBar :value="progress" :showValue="false" class="h-[18px] overflow-hidden rounded-md" />
                    <p class="m-0 text-xs text-slate-500">Projektmetriken werden analysiert</p>
                </div>
            </template>

            <template #footer>
                <div class="flex justify-end pt-2">
                    <Button label="Weiter" severity="secondary" :disabled="true" size="small" />
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