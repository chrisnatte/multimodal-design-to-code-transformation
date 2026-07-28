<template>
    <div class="flex min-h-screen items-start justify-center bg-white px-6 pt-6">
        <Card class="w-full max-w-[512px] rounded-2xl border border-slate-100 shadow-sm">
            <template #content>
                <div class="flex flex-col">
                    <h1 class="m-0 text-lg font-medium text-slate-700">Dashboardeinrichtung</h1>

                    <p class="mb-5 mt-1 text-sm leading-4 text-slate-500">
                        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten<br />
                        dauern.
                    </p>

                    <ProgressBar :value="progress" :show-value="false" class="h-[18px] overflow-hidden rounded-md" />

                    <p class="mb-6 mt-3 text-xs text-slate-500">Projektmetriken werden analysiert</p>

                    <div class="flex justify-end">
                        <Button label="Weiter" severity="secondary" :disabled="true" size="small" />
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