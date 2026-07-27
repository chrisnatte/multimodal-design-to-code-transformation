<template>
    <main class="flex min-h-screen items-center justify-center bg-black p-4">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '512px', maxWidth: '100%' }"
            contentClass="!p-0"
            pt:root:class="!rounded-xl !border !border-[#e2e8f0] !shadow-none"
            pt:mask:class="!bg-black"
        >
            <template #header>
                <div class="flex w-full items-center justify-between px-[17.5px] py-[17.5px]">
                    <span class="text-[17.5px] font-semibold text-slate-900">Neues Projekt</span>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px] !p-0"
                        @click="dialogVisible = false"
                    />
                </div>
            </template>

            <div class="flex px-[17.5px] pb-[17.5px]">
                <Tabs v-model:value="activeTab" class="w-full">
                    <TabList class="!border-[#e2e8f0]">
                        <Tab value="general" class="!px-4 !py-[14px] !text-sm !font-bold">1 - Allgemein</Tab>
                        <Tab value="schedule" class="!px-4 !py-[14px] !text-sm !font-bold">2 - Zeitplan</Tab>
                        <Tab value="settings" class="!px-4 !py-[14px] !text-sm !font-bold">3 - Einstellungen</Tab>
                    </TabList>

                    <TabPanels class="!p-0">
                        <TabPanel value="general" class="!px-1 !pb-[15.75px] !pt-[12.25px]">
                            <div class="flex flex-col justify-center gap-4">
                                <div class="flex items-center justify-between px-1">
                                    <div class="flex flex-col">
                                        <span class="text-sm font-semibold text-slate-900">Öffentlich sichtbar</span>
                                        <span class="text-[10px] font-light text-slate-700">Für alle Teammitglieder</span>
                                    </div>
                                    <ToggleSwitch v-model="publicVisible" aria-label="Öffentlich sichtbar" />
                                </div>

                                <div class="flex items-center justify-between px-1">
                                    <div class="flex flex-col">
                                        <span class="text-sm font-semibold text-slate-900">Benachrichtigungen</span>
                                        <span class="text-[10px] font-light text-slate-700">Bei Statusänderungen</span>
                                    </div>
                                    <ToggleSwitch v-model="notificationsEnabled" aria-label="Benachrichtigungen" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="schedule" class="!px-1 !pb-[15.75px] !pt-[12.25px]">
                            <div class="h-[74px]"></div>
                        </TabPanel>

                        <TabPanel value="settings" class="!px-1 !pb-[15.75px] !pt-[12.25px]">
                            <div class="h-[74px]"></div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>

            <template #footer>
                <div class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
                    <Button label="Weiter" class="!border-[#10b981] !bg-[#10b981] hover:!border-[#059669] hover:!bg-[#059669]" />
                </div>
            </template>
        </Dialog>
    </main>
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

const dialogVisible = ref(true);
const activeTab = ref('general');
const publicVisible = ref(true);
const notificationsEnabled = ref(false);
</script>