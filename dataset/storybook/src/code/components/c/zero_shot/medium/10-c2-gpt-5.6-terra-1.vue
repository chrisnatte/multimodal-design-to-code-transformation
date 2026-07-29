<template>
    <main class="flex min-h-[271px] items-start justify-center bg-white pt-6">
        <Card class="h-[224px] w-[512px]">
            <template #title>
                <h1 class="m-0 text-[18px] font-medium">Dashboardsinrichtung</h1>
            </template>

            <template #subtitle>
                <p class="m-0 max-w-[455px] text-sm leading-4">
                    Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                </p>
            </template>

            <template #content>
                <div class="mt-5">
                    <ProgressBar :value="setupProgress" :showValue="true" class="h-[18px]" aria-label="Einrichtungsfortschritt" />
                    <p class="mb-0 mt-3 text-xs">Projektmetriken werden analysiert</p>
                </div>
            </template>

            <template #footer>
                <div class="mt-5 flex justify-end">
                    <Button label="Weiter" size="small" severity="secondary" disabled />
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

const setupProgress = ref(50);
</script>