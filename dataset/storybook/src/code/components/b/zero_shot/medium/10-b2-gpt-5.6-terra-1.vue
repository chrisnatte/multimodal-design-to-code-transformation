<template>
    <div class="flex w-[560px] flex-col gap-2.5 bg-white p-6">
        <Card
            class="w-full !rounded-xl !bg-white !shadow-none"
            :pt="{
                body: { class: '!gap-6 !p-[17.5px]' },
                caption: { class: '!gap-[7px]' },
                title: { class: '!text-[17.5px] !font-medium !leading-[21px]' },
                subtitle: { class: '!text-[14px] !font-normal !leading-[17px]' },
                content: { class: '!p-0' },
                footer: { class: '!mt-0 !p-0' }
            }"
        >
            <template #title>
                Dashboardeinrichtung
            </template>

            <template #subtitle>
                Dein Dashboard zur Zeit eingerichtet. Dies kann wenige Minuten dauern.
            </template>

            <template #content>
                <div class="flex flex-col gap-3">
                    <ProgressBar
                        :value="50"
                        class="!h-[17.5px] [&_.p-progressbar-label]:!text-[10.5px] [&_.p-progressbar-label]:!font-semibold [&_.p-progressbar-value]:!bg-[#10B981] [&_.p-progressbar]:!bg-[#E2E8F0]"
                    />
                    <span class="text-[12px] font-light leading-[15px]">
                        Projektmetriken werden analysiert
                    </span>
                </div>
            </template>

            <template #footer>
                <div class="flex justify-end">
                    <Button label="Weiter" severity="secondary" size="small" disabled />
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import ProgressBar from 'primevue/progressbar';
</script>