<template>
    <div class="flex min-h-screen items-center justify-center bg-black py-[280px]">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '32rem' }"
            contentClass="!p-0"
            pt:mask:class="!bg-black"
            pt:root:class="!border !border-surface-200 !rounded-xl"
        >
            <div class="flex flex-col bg-white">
                <header class="flex items-center gap-4 px-[17.5px] py-[17.5px]">
                    <div class="flex flex-1 items-center justify-between gap-16">
                        <div class="flex items-center gap-3">
                            <Avatar
                                label="M"
                                shape="circle"
                                aria-label="Max Mustermann"
                                style="background-color: #e2e8f0; color: #0f172a"
                            />
                            <div class="flex flex-col">
                                <span class="text-sm">Max Mustermann</span>
                                <span class="text-[10px] font-light">Manager</span>
                            </div>
                        </div>
                        <Tag value="Aktiv" severity="success" class="!text-xs" />
                    </div>
                    <Button
                        icon="pi pi-times"
                        severity="secondary"
                        variant="text"
                        aria-label="Dialog schließen"
                        class="!h-7 !w-[35px] !p-0"
                        @click="dialogVisible = false"
                    />
                </header>

                <main class="flex flex-col gap-[7px] px-[17.5px] pb-[17.5px]">
                    <Tabs v-model:value="activeTab">
                        <TabList>
                            <Tab value="personal" class="!px-4 !py-[14px] !text-sm">
                                Persönliche Daten
                            </Tab>
                            <Tab value="settings" class="!px-4 !py-[14px] !text-sm">
                                Einstellungen
                            </Tab>
                        </TabList>

                        <TabPanels class="!px-1 !pb-[15.75px] !pt-[12.25px]">
                            <TabPanel value="personal" class="!p-0">
                                <div class="flex flex-col gap-4">
                                    <div class="flex flex-col gap-[7px]">
                                        <label for="name" class="text-sm">Name</label>
                                        <InputText
                                            id="name"
                                            v-model="name"
                                            class="w-full !px-[10.5px] !py-[7px] !text-sm"
                                        />
                                    </div>

                                    <div class="flex flex-col gap-[7px]">
                                        <label for="email" class="text-sm">E-Mail</label>
                                        <InputText
                                            id="email"
                                            v-model="email"
                                            type="email"
                                            class="w-full !px-[10.5px] !py-[7px] !text-sm"
                                        />
                                    </div>

                                    <div class="flex flex-col gap-[2px]">
                                        <label for="role" class="text-sm">Rolle</label>
                                        <Select
                                            id="role"
                                            v-model="role"
                                            :options="roles"
                                            optionLabel="label"
                                            optionValue="value"
                                            class="w-full !text-sm"
                                        />
                                    </div>

                                    <div class="flex items-center gap-[7px]">
                                        <Checkbox
                                            id="active"
                                            v-model="isActive"
                                            binary
                                        />
                                        <label for="active" class="text-sm">Ist aktiv</label>
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
                        @click="dialogVisible = false"
                    />
                    <Button
                        label="Speichern"
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
const roles = ref([
    { label: 'Manager', value: 'Manager' },
    { label: 'Mitarbeiter', value: 'Mitarbeiter' },
    { label: 'Kunde', value: 'Kunde' }
]);
</script>