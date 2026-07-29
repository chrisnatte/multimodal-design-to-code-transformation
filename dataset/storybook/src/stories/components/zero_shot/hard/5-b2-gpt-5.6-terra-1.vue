<template>
    <div class="h-[768px] w-[768px] bg-white">
        <div class="relative flex h-full w-full items-center justify-center bg-black">
            <Dialog
                v-model:visible="visible"
                modal
                appendTo="self"
                :draggable="false"
                :style="{ width: '512px' }"
                pt:root:class="!rounded-xl !border !border-surface-200 !shadow-none"
                pt:header:class="!p-0"
                pt:content:class="!p-0"
                pt:footer:class="!p-0"
                :closeButtonProps="{
                    severity: 'secondary',
                    variant: 'text',
                    class: '!h-7 !w-[35px] !p-0'
                }"
            >
                <template #header>
                    <div class="flex w-full items-center justify-between px-[17.5px] py-[17.5px]">
                        <span class="text-[17.5px] font-semibold leading-[21px]">Neues Projekt</span>
                    </div>
                </template>

                <div class="flex gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Tabs v-model:value="activeTab" class="w-full">
                        <TabList class="!h-[46px] !border-surface-200">
                            <Tab value="0" class="!px-[15.7px] !py-[14px] !text-sm !font-bold">
                                1 - Allgemein
                            </Tab>
                            <Tab value="1" class="!px-[15.7px] !py-[14px] !text-sm !font-bold">
                                2 - Zeitplan
                            </Tab>
                            <Tab value="2" class="!px-[15.7px] !py-[14px] !text-sm !font-bold">
                                3 - Einstellungen
                            </Tab>
                        </TabList>

                        <TabPanels class="!bg-white !px-1 !pb-[15.75px] !pt-[12.25px]">
                            <TabPanel value="0" class="!p-0">
                                <div class="flex flex-col gap-4">
                                    <div class="flex items-center justify-between px-1">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold leading-[17px]">Öffentlich sichtbar</span>
                                            <span class="text-[10px] font-light leading-3">Für alle Teammitglieder</span>
                                        </div>
                                        <ToggleSwitch v-model="isPublic" />
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

                            <TabPanel value="1" class="!p-0" />
                            <TabPanel value="2" class="!p-0" />
                        </TabPanels>
                    </Tabs>
                </div>

                <template #footer>
                    <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                        <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                        <Button label="Weiter" @click="goNext" />
                    </div>
                </template>
            </Dialog>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import ToggleSwitch from 'primevue/toggleswitch';

const visible = ref(true);
const activeTab = ref('0');
const isPublic = ref(true);
const notificationsEnabled = ref(false);

const goNext = () => {
    if (activeTab.value === '0') {
        activeTab.value = '1';
    } else if (activeTab.value === '1') {
        activeTab.value = '2';
    }
};
</script>