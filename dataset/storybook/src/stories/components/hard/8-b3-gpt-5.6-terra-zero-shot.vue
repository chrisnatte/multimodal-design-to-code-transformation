<template>
    <Card
        class="w-[488px] overflow-hidden rounded-xl"
        :pt="{
            body: { class: 'p-0' },
            content: { class: 'p-0' }
        }"
    >
        <template #header>
            <div class="flex h-[124px] flex-col items-center justify-center gap-[10px] p-[10px]">
                <div class="flex w-[120px] flex-col items-center gap-1">
                    <span class="text-[17.5px] font-medium leading-[21px]">ProDesk X500</span>
                    <span class="text-xs font-light leading-[15px]">Workstation Monitor</span>
                </div>
            </div>
        </template>

        <template #content>
            <div class="flex flex-col gap-[7px] rounded-md px-1">
                <div class="flex flex-col">
                    <Tabs v-model:value="activeTab">
                        <TabList class="h-[46px] border-b border-[#e2e8f0] bg-white">
                            <Tab value="0" class="!h-[46px] !px-4 !text-sm !font-bold">
                                Beschreibung
                            </Tab>
                            <Tab value="1" class="!h-[46px] !px-4 !text-sm !font-bold">
                                Spezifikationen
                            </Tab>
                            <Tab value="2" class="!h-[46px] !px-4 !text-sm !font-bold">
                                Bewertungen
                            </Tab>
                        </TabList>

                        <TabPanels class="bg-white">
                            <TabPanel value="0" class="!p-0">
                                <div class="flex min-h-[47px] flex-col gap-2 px-4 py-3">
                                    <span class="text-sm font-normal leading-[23px]">
                                        Noch keine Bewertungen vorhanden.
                                    </span>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>

                <div class="flex h-[49px] justify-end gap-2 px-4 py-2">
                    <Button label="Merken" severity="secondary" size="small" />
                    <Button label="In den Warenkorb" icon="pi pi-cart-plus" size="small" />
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'

const activeTab = ref('0')
</script>