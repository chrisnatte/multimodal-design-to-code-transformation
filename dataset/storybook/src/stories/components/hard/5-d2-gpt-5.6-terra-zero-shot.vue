<template>
    <div class="flex min-h-screen items-center justify-center bg-black">
        <Dialog
            v-model:visible="visible"
            modal
            :draggable="false"
            :closable="true"
            :style="{ width: '32rem' }"
            :breakpoints="{ '575px': 'calc(100vw - 2rem)' }"
            content-class="!pt-0"
            class="overflow-hidden rounded-xl"
            :pt="{
                mask: { class: '!bg-black/40' },
                header: { class: '!px-[17.5px] !pt-[17.5px] !pb-[17.5px]' },
                title: { class: '!text-[17.5px] !font-semibold' },
                content: { class: '!px-[17.5px] !pb-0' },
                footer: { class: '!px-[17.5px] !pt-0 !pb-[17.5px]' }
            }"
            @hide="visible = true"
        >
            <template #header>
                <span class="text-[17.5px] font-semibold text-slate-700">Neues Projekt</span>
            </template>

            <Tabs v-model:value="activeTab" class="w-full">
                <TabList>
                    <Tab value="0" class="!px-4 !py-[14px] !text-sm !font-bold">1 - Allgemein</Tab>
                    <Tab value="1" class="!px-4 !py-[14px] !text-sm !font-bold">2 - Zeitplan</Tab>
                    <Tab value="2" class="!px-4 !py-[14px] !text-sm !font-bold">3 - Einstellungen</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="0" class="!px-1 !pt-3 !pb-4">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <label for="project-name" class="text-sm text-slate-700">Projektname</label>
                                <InputText id="project-name" v-model="projectName" class="w-full" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="category" class="text-sm text-slate-700">Kategorie</label>
                                <Select
                                    id="category"
                                    v-model="category"
                                    :options="categories"
                                    option-label="label"
                                    option-value="value"
                                    class="w-full"
                                />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="owner" class="text-sm text-slate-700">Verantwortlicher</label>
                                <Select
                                    id="owner"
                                    v-model="owner"
                                    :options="owners"
                                    option-label="name"
                                    option-value="name"
                                    class="w-full"
                                >
                                    <template #value="{ value }">
                                        <div v-if="value" class="flex items-center gap-2">
                                            <Avatar label="M" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-sm !text-slate-600" />
                                            <span>{{ value }}</span>
                                        </div>
                                        <span v-else class="text-slate-400">Verantwortlichen auswählen</span>
                                    </template>
                                    <template #option="{ option }">
                                        <div class="flex items-center gap-2">
                                            <Avatar :label="option.initial" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-sm !text-slate-600" />
                                            <span>{{ option.name }}</span>
                                        </div>
                                    </template>
                                </Select>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="1" class="!px-1 !pt-3 !pb-4">
                        <div class="h-[148px]"></div>
                    </TabPanel>

                    <TabPanel value="2" class="!px-1 !pt-3 !pb-4">
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center justify-between px-1">
                                <div class="flex flex-col">
                                    <span class="text-sm font-semibold text-slate-700">Öffentlich sichtbar</span>
                                    <span class="text-[10px] font-light text-slate-500">Für alle Teammitglieder</span>
                                </div>
                                <ToggleSwitch v-model="isPublic" />
                            </div>
                            <div class="flex items-center justify-between px-1">
                                <div class="flex flex-col">
                                    <span class="text-sm font-semibold text-slate-700">Benachrichtigungen</span>
                                    <span class="text-[10px] font-light text-slate-500">Bei Statusänderungen</span>
                                </div>
                                <ToggleSwitch v-model="notifications" />
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <template #footer>
                <div class="flex justify-end gap-[7px]">
                    <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                    <Button label="Weiter" class="!border-[#10b981] !bg-[#10b981] hover:!border-emerald-600 hover:!bg-emerald-600" @click="activeTab = activeTab === '2' ? '2' : String(Number(activeTab) + 1)" />
                </div>
            </template>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import ToggleSwitch from 'primevue/toggleswitch';

const visible = ref(true);
const activeTab = ref('0');
const projectName = ref('');
const category = ref('Entwicklung');
const owner = ref('Max Mustmann');
const isPublic = ref(true);
const notifications = ref(false);

const categories = ref([
    { label: 'Entwicklung', value: 'Entwicklung' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Design', value: 'Design' }
]);

const owners = ref([
    { name: 'Max Mustmann', initial: 'M' },
    { name: 'Anna Schmidt', initial: 'A' },
    { name: 'Lena Weber', initial: 'L' }
]);
</script>