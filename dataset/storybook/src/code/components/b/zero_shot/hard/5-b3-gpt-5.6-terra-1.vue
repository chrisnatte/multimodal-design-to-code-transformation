<template>
    <div class="flex h-[768px] w-[768px] items-center justify-center bg-black">
        <Dialog
            v-model:visible="dialogVisible"
            appendTo="self"
            :draggable="false"
            :closable="false"
            :showHeader="false"
            :style="{ width: '512px' }"
            :contentStyle="{ padding: '0' }"
            class="overflow-hidden"
        >
            <div class="flex flex-col">
                <div class="flex items-center justify-between px-[17.5px] py-[17.5px]">
                    <span class="text-[17.5px] font-semibold leading-[21px]">Neues Projekt</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        text
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px] !p-0"
                        @click="dialogVisible = false"
                    />
                </div>

                <div class="flex gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Tabs v-model:value="activeTab" class="w-full">
                        <TabList>
                            <Tab value="0" class="!px-4 !py-[14px] !text-sm !font-bold">1 - Allgemein</Tab>
                            <Tab value="1" class="!px-4 !py-[14px] !text-sm !font-bold">2 - Zeitplan</Tab>
                            <Tab value="2" class="!px-4 !py-[14px] !text-sm !font-bold">3 - Einstellungen</Tab>
                        </TabList>

                        <TabPanels class="!px-1 !pb-[15.75px] !pt-[12.25px]">
                            <TabPanel value="0" class="!p-0">
                                <div class="flex flex-col justify-center gap-4">
                                    <div class="flex items-center justify-between px-1">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold leading-[17px]">Öffentlich sichtbar</span>
                                            <span class="text-[10px] font-light leading-3">Für alle Teammitglieder</span>
                                        </div>
                                        <ToggleSwitch v-model="publicVisible" />
                                    </div>

                                    <div class="flex items-center justify-between px-1">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold leading-[17px]">Benachrichtigungen</span>
                                            <span class="text-[10px] font-light leading-3">Bei Statusänderungen</span>
                                        </div>
                                        <ToggleSwitch v-model="notificationsEnabled" />
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value="1" class="!p-0">
                                <div class="min-h-[74px]"></div>
                            </TabPanel>

                            <TabPanel value="2" class="!p-0">
                                <div class="min-h-[74px]"></div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>

                <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
                    <Button label="Weiter" />
                </div>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const dialogVisible = ref(true)
const activeTab = ref('0')
const publicVisible = ref(true)
const notificationsEnabled = ref(false)
</script>