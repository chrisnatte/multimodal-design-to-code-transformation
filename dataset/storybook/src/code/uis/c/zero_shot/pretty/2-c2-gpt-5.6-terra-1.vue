<template>
    <div class="min-h-screen">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :closable="false"
            :draggable="false"
            :style="{ width: '22.75rem' }"
            :breakpoints="{ '575px': '94vw' }"
            pt:root:class="!rounded-lg !border-0"
            pt:header:class="!px-4 !pt-3 !pb-2"
            pt:content:class="!px-4 !pt-0 !pb-3"
            pt:mask:class="!bg-black/40"
        >
            <template #header>
                <div class="flex w-full items-center justify-between">
                    <div class="flex items-center gap-2">
                        <Avatar
                            label="M"
                            shape="circle"
                            aria-label="Max Mustermann"
                            class="!h-5 !w-5 !text-[10px]"
                            style="background-color: #e8eef5; color: #64748b"
                        />
                        <div class="flex flex-col leading-none">
                            <span class="text-[11px] font-medium text-slate-600">Max Mustermann</span>
                            <span class="mt-0.5 text-[8px] text-slate-400">Manager</span>
                        </div>
                    </div>
                    <div class="flex items-center gap-4">
                        <Tag value="Aktiv" severity="success" class="!px-1.5 !py-0.5 !text-[9px]" />
                        <Button
                            icon="pi pi-times"
                            variant="text"
                            severity="secondary"
                            aria-label="Schließen"
                            class="!h-5 !w-5 !p-0 !text-xs"
                            @click="dialogVisible = false"
                        />
                    </div>
                </div>
            </template>

            <Tabs v-model:value="activeTab">
                <TabList class="!mb-2">
                    <Tab value="personal" class="!px-2.5 !py-2 !text-[10px]">Persönliche Daten</Tab>
                    <Tab value="settings" class="!px-2.5 !py-2 !text-[10px]">Einstellungen</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="personal" class="!p-0">
                        <div class="flex flex-col gap-2.5 pt-1">
                            <div class="flex flex-col gap-1">
                                <label for="name" class="text-[10px] text-slate-600">Name</label>
                                <InputText
                                    id="name"
                                    v-model="name"
                                    class="!h-6 !w-full !px-2 !py-1 !text-[10px]"
                                />
                            </div>

                            <div class="flex flex-col gap-1">
                                <label for="email" class="text-[10px] text-slate-600">E-Mail</label>
                                <InputText
                                    id="email"
                                    v-model="email"
                                    class="!h-6 !w-full !px-2 !py-1 !text-[10px]"
                                />
                            </div>

                            <div class="flex flex-col gap-1">
                                <label for="role" class="text-[10px] text-slate-600">Rolle</label>
                                <Select
                                    id="role"
                                    v-model="role"
                                    :options="roleOptions"
                                    class="!h-6 !w-full !text-[10px]"
                                    pt:label:class="!px-2 !py-1 !text-[10px]"
                                    pt:dropdown:class="!w-6"
                                />
                                <Listbox
                                    v-model="role"
                                    :options="roleOptions"
                                    class="!w-full !text-[10px] shadow-md"
                                    pt:list:class="!py-0.5"
                                    pt:option:class="!px-2 !py-1.5 !text-[10px]"
                                />
                            </div>

                            <div class="flex items-center gap-1.5 pt-0.5">
                                <Checkbox v-model="isActive" input-id="active" binary class="!h-3 !w-3" />
                                <label for="active" class="text-[10px] text-slate-600">Ist aktiv</label>
                            </div>

                            <div class="mt-2 flex justify-end gap-1.5">
                                <Button
                                    label="Abbrechen"
                                    severity="secondary"
                                    size="small"
                                    class="!px-2 !py-1 !text-[10px]"
                                    @click="dialogVisible = false"
                                />
                                <Button
                                    label="Speichern"
                                    severity="success"
                                    size="small"
                                    class="!px-2 !py-1 !text-[10px]"
                                    @click="dialogVisible = false"
                                />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="settings" class="!p-0">
                        <div class="h-56"></div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
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
import Listbox from 'primevue/listbox';
import Select from 'primevue/select';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Tag from 'primevue/tag';

const dialogVisible = ref(true);
const activeTab = ref('personal');
const name = ref('Max Mustermann');
const email = ref('max@example.com');
const role = ref('Manager');
const isActive = ref(true);
const roleOptions = ref(['Manager', 'Mitarbeiter', 'Kunde']);
</script>