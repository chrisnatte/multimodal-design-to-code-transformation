<template>
    <div class="flex h-[321px] w-[536px] flex-col gap-2.5 bg-white p-6">
        <Card
            class="h-[273px] w-full overflow-hidden !rounded-xl !bg-white !shadow-none"
            :pt="{
                body: { class: '!p-0 !gap-0' },
                content: { class: '!p-0' }
            }"
        >
            <template #header>
                <div class="flex h-[124px] w-full flex-col items-center justify-center gap-2.5 p-2.5">
                    <div class="flex w-[120px] flex-col items-center gap-1">
                        <span class="text-[17.5px] font-medium leading-[21px] text-surface-900">ProDesk X500</span>
                        <span class="text-xs font-light leading-[15px] text-surface-700">Workstation Monitor</span>
                    </div>
                </div>
            </template>

            <template #content>
                <div class="flex h-[149px] flex-col gap-[7px] px-1">
                    <Tabs v-model:value="activeTab" class="w-full">
                        <TabList class="h-[46px] !bg-white">
                            <Tab value="description" class="h-[46px] !px-4 !text-sm !font-bold">
                                Beschreibung
                            </Tab>
                            <Tab value="specifications" class="h-[46px] !px-4 !text-sm !font-bold">
                                Spezifikationen
                            </Tab>
                            <Tab value="reviews" class="h-[46px] !px-4 !text-sm !font-bold">
                                Bewertungen
                            </Tab>
                        </TabList>

                        <TabPanels class="!bg-white !p-0">
                            <TabPanel value="description" class="!bg-white !p-0">
                                <div class="flex min-h-[47px] flex-col gap-2 px-4 py-3">
                                    <span class="text-sm font-normal leading-[23px] text-surface-900">
                                        Noch keine Bewertungen vorhanden.
                                    </span>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                    <div class="flex h-[49px] w-full items-center justify-end gap-2 px-4 py-2">
                        <Button label="Merken" severity="secondary" size="small" />
                        <Button label="In den Warenkorb" icon="pi pi-cart-plus" size="small" />
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
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';

const activeTab = ref('description');
</script>