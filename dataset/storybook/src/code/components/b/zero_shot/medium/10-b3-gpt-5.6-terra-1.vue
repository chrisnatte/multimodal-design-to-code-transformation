<template>
    <div class="flex w-[560px] flex-col gap-2.5 bg-white p-6">
        <Card class="w-full">
            <template #content>
                <div class="flex flex-col gap-6 p-[17.5px]">
                    <div class="flex flex-col gap-[7px]">
                        <span class="text-[17.5px] font-medium leading-[21px] text-surface-900">
                            Dashboardeinrichtung
                        </span>
                        <span class="text-sm font-normal leading-[17px] text-surface-700">
                            Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
                        </span>
                    </div>

                    <div class="flex flex-col gap-3">
                        <ProgressBar :value="progress" :showValue="true" class="h-[17.5px]" />
                        <span class="text-xs font-light leading-[15px] text-surface-600">
                            Projektmetriken werden analysiert
                        </span>
                    </div>

                    <div class="flex justify-end gap-[7px]">
                        <Button label="Weiter" severity="secondary" :disabled="isNextDisabled" size="small" />
                    </div>
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import ProgressBar from 'primevue/progressbar'

const progress = ref(50)
const isNextDisabled = ref(true)
</script>