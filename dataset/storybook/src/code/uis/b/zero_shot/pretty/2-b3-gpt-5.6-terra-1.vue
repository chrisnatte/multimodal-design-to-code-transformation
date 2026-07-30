<template>
    <div class="min-h-screen bg-black flex items-center justify-center p-[280px]">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '512px' }"
            :contentStyle="{ padding: '0' }"
            :pt="{ mask: { class: '!bg-black' } }"
        >
            <div class="flex flex-col bg-white rounded-xl overflow-hidden border border-[#e2e8f0]">
                <header class="flex items-center gap-4 px-[17.5px] py-[17.5px]">
                    <div class="flex flex-1 items-center justify-between gap-16 min-w-0">
                        <div class="flex items-center gap-3">
                            <Avatar label="M" shape="circle" class="!w-7 !h-7 !text-sm !bg-[#e2e8f0] !text-slate-900" />
                            <div class="flex flex-col">
                                <span class="text-sm leading-[17px] text-slate-950">Max Mustermann</span>
                                <span class="text-[10px] leading-3 font-light text-slate-950">Manager</span>
                            </div>
                        </div>
                        <Tag value="Aktiv" severity="success" class="!text-[12px]" />
                    </div>
                    <Button
                        icon="pi pi-times"
                        text
                        severity="secondary"
                        aria-label="Dialog schließen"
                        class="!w-[35px] !h-7 !p-0"
                        @click="dialogVisible = false"
                    />
                </header>

                <main class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Tabs v-model:value="activeTab" class="w-full">
                        <TabList>
                            <Tab value="personal" class="!px-4 !py-[14px] !text-sm !font-bold">
                                Persönliche Daten
                            </Tab>
                            <Tab value="settings" class="!px-4 !py-[14px] !text-sm !font-bold">
                                Einstellungen
                            </Tab>
                        </TabList>

                        <TabPanels class="!px-1 !pt-[12.25px] !pb-[15.75px]">
                            <TabPanel value="personal" class="!p-0">
                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col gap-[7px]">
                                        <label for="name" class="text-sm leading-[21px] text-slate-950">Name</label>
                                        <InputText
                                            id="name"
                                            v-model="name"
                                            class="!h-[33px] !w-full !rounded-md !px-[10.5px] !py-[7px] !text-sm"
                                        />
                                    </div>

                                    <div class="flex flex-col gap-[7px]">
                                        <label for="email" class="text-sm leading-[21px] text-slate-950">E-Mail</label>
                                        <InputText
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            class="!h-[33px] !w-full !rounded-md !px-[10.5px] !py-[7px] !text-sm"
                                        />
                                    </div>

                                    <div class="flex flex-col gap-0.5">
                                        <label for="role" class="text-sm leading-[21px] text-slate-950">Rolle</label>
                                        <Select
                                            id="role"
                                            v-model="role"
                                            :options="roles"
                                            class="!h-[33px] !w-full !rounded-md !text-sm"
                                        />
                                    </div>

                                    <div class="flex items-center">
                                        <Checkbox v-model="isActive" inputId="active" binary />
                                        <label for="active" class="ml-[7px] text-sm text-slate-950">Ist aktiv</label>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel value="settings" class="!p-0">
                                <div class="min-h-[356px]"></div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </main>

                <footer class="flex justify-end gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Button
                        label="Abbrechen"
                        severity="secondary"
                        class="!h-[33px] !px-[11.5px] !py-2 !text-sm"
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
                        class="!h-[33px] !px-[11.5px] !py-2 !text-sm"
                        @click="dialogVisible = false"
                    />
                </footer>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Tag from 'primevue/tag';

const dialogVisible = ref(true);
const activeTab = ref('personal');
const name = ref('Max Mustmann');
const email = ref('max@example.com');
const role = ref('Manager');
const isActive = ref(true);
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde']);
</script>