<template>
    <Card class="w-[512px] rounded-xl bg-white">
        <template #content>
            <div class="flex flex-col gap-6 p-[17.5px]">
                <div class="flex flex-col gap-[7px]">
                    <span class="text-[17.5px] font-medium text-surface-900">Dashboardeinrichtung</span>
                    <span class="text-sm font-normal text-surface-700">
                        Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                    </span>
                </div>

                <div class="flex flex-col gap-3">
                    <ProgressBar :value="progress" :showValue="false" class="h-[17.5px]">
                        <span class="text-[10.5px] font-semibold text-white">{{ progress }}%</span>
                    </ProgressBar>

                    <span class="text-xs font-light text-surface-700">Projektmetriken werden analysiert</span>
                </div>

                <div class="flex justify-end gap-[7px]">
                    <Button label="Weiter" severity="secondary" :disabled="isNextDisabled" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
const isNextDisabled = ref(true)
</script>