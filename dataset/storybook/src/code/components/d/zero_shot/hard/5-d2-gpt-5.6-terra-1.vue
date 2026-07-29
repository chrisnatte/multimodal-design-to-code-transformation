<template>
    <main class="flex min-h-screen w-full items-center justify-center bg-white">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :draggable="false"
            header="Neues Projekt"
            :style="{ width: '32rem' }"
            :breakpoints="{ '575px': '94vw' }"
            :pt="{
                root: { class: '!rounded-xl !border-surface-200' },
                header: { class: '!px-[1.1rem] !py-[1.1rem]' },
                title: { class: '!text-[1.1rem] !font-semibold !text-slate-700' },
                content: { class: '!px-[1.1rem] !pt-0 !pb-0' },
                footer: { class: '!px-[1.1rem] !pt-4 !pb-[1.1rem]' },
                mask: { class: '!bg-black/40' }
            }"
        >
            <Tabs
                v-model:value="activeTab"
                class="w-full"
                style="--p-tabs-tab-active-color: #10b981; --p-tabs-tab-active-border-color: #10b981; --p-tabs-active-bar-background: #10b981"
            >
                <TabList>
                    <Tab value="0" class="!px-4 !py-3 !text-sm !font-bold">1 - Allgemein</Tab>
                    <Tab value="1" class="!px-4 !py-3 !text-sm !font-bold">2 - Zeitplan</Tab>
                    <Tab value="2" class="!px-4 !py-3 !text-sm !font-bold">3 - Einstellungen</Tab>
                </TabList>

                <TabPanels class="!p-0">
                    <TabPanel value="0" class="!px-1 !pt-4 !pb-0">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <label for="project-name" class="text-sm text-slate-700">Projektname</label>
                                <InputText id="project-name" v-model="projectName" class="!h-[2.1rem] !w-full" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="category" class="text-sm text-slate-700">Kategorie</label>
                                <Select
                                    id="category"
                                    v-model="selectedCategory"
                                    :options="categories"
                                    optionLabel="label"
                                    class="!h-[2.1rem] !w-full"
                                />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="owner" class="text-sm text-slate-700">Verantwortlicher</label>
                                <Select
                                    id="owner"
                                    v-model="selectedOwner"
                                    :options="owners"
                                    optionLabel="name"
                                    class="!h-[2.1rem] !w-full"
                                >
                                    <template #value="{ value, placeholder }">
                                        <div v-if="value" class="flex items-center gap-2">
                                            <Avatar :label="value.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                            <span>{{ value.name }}</span>
                                        </div>
                                        <span v-else>{{ placeholder }}</span>
                                    </template>
                                    <template #option="{ option }">
                                        <div class="flex items-center gap-2">
                                            <Avatar :label="option.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                            <span>{{ option.name }}</span>
                                        </div>
                                    </template>
                                </Select>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="1" class="!px-1 !pt-4 !pb-0">
                        <div class="min-h-[11.8rem]"></div>
                    </TabPanel>

                    <TabPanel value="2" class="!px-1 !pt-4 !pb-0">
                        <div class="flex flex-col gap-4 py-1">
                            <div class="flex items-center justify-between px-1">
                                <div class="flex flex-col">
                                    <span class="text-sm font-semibold text-slate-700">Öffentlich sichtbar</span>
                                    <span class="text-[0.625rem] font-light text-slate-500">Für alle Teammitglieder</span>
                                </div>
                                <ToggleSwitch
                                    v-model="publicVisible"
                                    style="--p-toggleswitch-checked-background: #10b981; --p-toggleswitch-checked-hover-background: #10b981"
                                />
                            </div>

                            <div class="flex items-center justify-between px-1">
                                <div class="flex flex-col">
                                    <span class="text-sm font-semibold text-slate-700">Benachrichtigungen</span>
                                    <span class="text-[0.625rem] font-light text-slate-500">Bei Statusänderungen</span>
                                </div>
                                <ToggleSwitch
                                    v-model="notifications"
                                    style="--p-toggleswitch-checked-background: #10b981; --p-toggleswitch-checked-hover-background: #10b981"
                                />
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
                    <Button
                        label="Weiter"
                        severity="success"
                        class="!border-[#10b981] !bg-[#10b981] hover:!border-[#059669] hover:!bg-[#059669]"
                        @click="advanceStep"
                    />
                </div>
            </template>
        </Dialog>
    </main>
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

const categories = [
    { label: 'Entwicklung' },
    { label: 'Design' },
    { label: 'Marketing' }
];

const owners = [
    { name: 'Max Mustmann', initials: 'M' },
    { name: 'Anna Beispiel', initials: 'A' }
];

const dialogVisible = ref(true);
const activeTab = ref('0');
const projectName = ref('');
const selectedCategory = ref(categories[0]);
const selectedOwner = ref(owners[0]);
const publicVisible = ref(true);
const notifications = ref(false);

const advanceStep = () => {
    if (activeTab.value === '0') {
        activeTab.value = '1';
    } else if (activeTab.value === '1') {
        activeTab.value = '2';
    }
};
</script>