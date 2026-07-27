<template>
    <main class="flex h-[768px] w-[768px] items-center justify-center bg-black">
        <section
            v-if="visible"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-dialog-title"
            class="box-border flex h-[281px] w-[512px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white"
        >
            <header class="flex h-[63px] shrink-0 items-center justify-between px-[17.5px] py-[17.5px]">
                <h2 id="project-dialog-title" class="text-[17.5px] font-semibold leading-[21px] text-slate-900">
                    Neues Projekt
                </h2>

                <div class="flex flex-col gap-[7px]">
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        text
                        aria-label="Dialog schließen"
                        class="!h-[28px] !w-[35px]"
                        @click="visible = false"
                    />
                </div>
            </header>

            <div class="h-[165.5px] shrink-0 px-[17.5px] pb-[17.5px]">
                <Tabs v-model:value="activeTab" class="flex h-[148px] flex-col">
                    <TabList class="h-[46px] shrink-0 border-b border-slate-200">
                        <Tab value="general" class="!h-[46px] !px-4 !text-[14px] !font-bold">
                            1 - Allgemein
                        </Tab>
                        <Tab value="schedule" class="!h-[46px] !px-4 !text-[14px] !font-bold">
                            2 - Zeitplan
                        </Tab>
                        <Tab value="settings" class="!h-[46px] !px-4 !text-[14px] !font-bold">
                            3 - Einstellungen
                        </Tab>
                    </TabList>

                    <TabPanels class="!h-[102px] !flex-1 !p-0">
                        <TabPanel value="general" class="h-full !p-0">
                            <div class="flex h-full flex-col justify-center gap-4 px-1 pb-[15.75px] pt-[12.25px]">
                                <div class="flex h-[29px] items-center justify-between px-1">
                                    <div class="flex flex-col">
                                        <span class="text-[14px] font-semibold leading-[17px] text-slate-900">
                                            Öffentlich sichtbar
                                        </span>
                                        <span class="text-[10px] font-light leading-3 text-slate-600">
                                            Für alle Teammitglieder
                                        </span>
                                    </div>

                                    <ToggleSwitch v-model="isPublic" aria-label="Öffentlich sichtbar" />
                                </div>

                                <div class="flex h-[29px] items-center justify-between px-1">
                                    <div class="flex flex-col">
                                        <span class="text-[14px] font-semibold leading-[17px] text-slate-900">
                                            Benachrichtigungen
                                        </span>
                                        <span class="text-[10px] font-light leading-3 text-slate-600">
                                            Bei Statusänderungen
                                        </span>
                                    </div>

                                    <ToggleSwitch v-model="notificationsEnabled" aria-label="Benachrichtigungen" />
                                </div>
                            </div>
                        </TabPanel>

                        <TabPanel value="schedule" class="h-full !p-0" />
                        <TabPanel value="settings" class="h-full !p-0" />
                    </TabPanels>
                </Tabs>
            </div>

            <footer class="flex h-[50.5px] shrink-0 justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                <Button
                    label="Abbrechen"
                    severity="secondary"
                    class="!h-[33px] !w-[97px] !border-slate-100 !bg-slate-100"
                    @click="visible = false"
                />
                <Button
                    label="Weiter"
                    class="!h-[33px] !w-[67px] !border-emerald-500 !bg-emerald-500"
                />
            </footer>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import ToggleSwitch from 'primevue/toggleswitch'

const visible = ref(true)
const activeTab = ref('general')
const isPublic = ref(true)
const notificationsEnabled = ref(false)
</script>