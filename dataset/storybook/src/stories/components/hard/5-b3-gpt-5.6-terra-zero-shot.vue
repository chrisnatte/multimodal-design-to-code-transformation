<template>
    <main class="flex h-[768px] w-[768px] items-center justify-center bg-black">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :dismissableMask="false"
            :style="{ width: '512px' }"
            contentClass="!p-0"
        >
            <div class="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <header class="flex items-center justify-between px-[17.5px] py-[17.5px]">
                    <h1 class="text-[17.5px] font-semibold leading-[21px] text-slate-900">Neues Projekt</h1>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        text
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px]"
                        @click="dialogVisible = false"
                    />
                </header>

                <section class="flex px-[17.5px] pb-[17.5px]">
                    <Tabs v-model:value="activeTab" class="w-full">
                        <TabList class="border-b border-slate-200">
                            <Tab value="general" class="!px-4 !py-[14px] !text-sm !font-bold">
                                1 - Allgemein
                            </Tab>
                            <Tab value="schedule" class="!px-4 !py-[14px] !text-sm !font-bold">
                                2 - Zeitplan
                            </Tab>
                            <Tab value="settings" class="!px-4 !py-[14px] !text-sm !font-bold">
                                3 - Einstellungen
                            </Tab>
                        </TabList>

                        <TabPanels class="!p-0">
                            <TabPanel value="general" class="!px-1 !pb-[15.75px] !pt-[12.25px]">
                                <div class="flex flex-col gap-4">
                                    <div class="flex items-center justify-between px-1">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold leading-[17px] text-slate-900">
                                                Öffentlich sichtbar
                                            </span>
                                            <span class="text-[10px] font-light leading-[12px] text-slate-600">
                                                Für alle Teammitglieder
                                            </span>
                                        </div>
                                        <ToggleSwitch v-model="isPublic" aria-label="Öffentlich sichtbar" />
                                    </div>

                                    <div class="flex items-center justify-between px-1">
                                        <div class="flex flex-col">
                                            <span class="text-sm font-semibold leading-[17px] text-slate-900">
                                                Benachrichtigungen
                                            </span>
                                            <span class="text-[10px] font-light leading-[12px] text-slate-600">
                                                Bei Statusänderungen
                                            </span>
                                        </div>
                                        <ToggleSwitch v-model="notificationsEnabled" aria-label="Benachrichtigungen" />
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value="schedule" class="!px-1 !pb-[15.75px] !pt-[12.25px]" />
                            <TabPanel value="settings" class="!px-1 !pb-[15.75px] !pt-[12.25px]" />
                        </TabPanels>
                    </Tabs>
                </section>

                <footer class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        class="!h-[33px] !px-[11.5px] !text-sm"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Weiter"
                        class="!h-[33px] !px-[11.5px] !text-sm"
                        @click="activeTab = 'schedule'"
                    />
                </footer>
            </div>
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
const isPublic = ref(true);
const notificationsEnabled = ref(false);
</script>