<template>
    <Card
        class="w-[488px] overflow-hidden rounded-xl"
        :pt="{
            body: { class: 'p-0 gap-0' },
            content: { class: 'p-0' },
            footer: { class: 'p-0' }
        }"
    >
        <template #header>
            <div class="flex h-[124px] flex-col items-center justify-center gap-[10px] bg-white p-[10px]">
                <div class="flex w-[120px] flex-col items-center gap-1">
                    <span class="text-[17.5px] font-medium leading-[21px] text-surface-900">ProDesk X500</span>
                    <span class="text-xs font-light leading-[15px] text-surface-700">Workstation Monitor</span>
                </div>
            </div>
        </template>

        <template #content>
            <div class="flex flex-col gap-[7px] px-1">
                <div class="flex flex-col">
                    <Tabs v-model:value="activeTab">
                        <TabList class="h-[46px] bg-white">
                            <Tab value="description" class="text-sm font-bold">Beschreibung</Tab>
                            <Tab value="specifications" class="text-sm font-bold">Spezifikationen</Tab>
                            <Tab value="reviews" class="text-sm font-bold">Bewertungen</Tab>
                        </TabList>

                        <TabPanels class="bg-white !p-0">
                            <TabPanel value="description" class="!p-0">
                                <div class="flex min-h-[47px] flex-col gap-2 px-4 py-3">
                                    <span class="text-sm font-normal leading-[23px] text-surface-900">
                                        Noch keine Bewertungen vorhanden.
                                    </span>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>

                <div class="flex h-[49px] items-center justify-end gap-2 px-4 py-2">
                    <Button label="Merken" severity="secondary" size="small" />
                    <Button label="In den Warenkorb" icon="pi pi-cart-plus" size="small" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';

const activeTab = ref('description');
</script>