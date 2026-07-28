<template>
    <Dialog
        v-model:visible="visible"
        modal
        header="Neues Projekt"
        :draggable="false"
        :style="{ width: '32rem' }"
        :breakpoints="{ '575px': 'calc(100vw - 2rem)' }"
        :closeButtonProps="{ severity: 'secondary', text: true, rounded: true, 'aria-label': 'Schließen' }"
    >
        <Tabs v-model:value="activeTab">
            <TabList>
                <Tab value="general">1 - Allgemein</Tab>
                <Tab value="schedule">2 - Zeitplan</Tab>
                <Tab value="settings">3 - Einstellungen</Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="general" class="!px-1 !pt-4 !pb-0">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <label for="project-name" class="text-sm text-surface-700">Projektname</label>
                            <InputText id="project-name" v-model="projectName" class="w-full !py-2" autofocus />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="category" class="text-sm text-surface-700">Kategorie</label>
                            <Select
                                id="category"
                                v-model="category"
                                :options="categories"
                                optionLabel="label"
                                class="w-full"
                                :pt="{ label: { class: '!py-2' } }"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="owner" class="text-sm text-surface-700">Verantwortlicher</label>
                            <Select
                                id="owner"
                                v-model="owner"
                                :options="owners"
                                optionLabel="name"
                                class="w-full"
                                :pt="{ label: { class: '!py-2' } }"
                            >
                                <template #value="{ value }">
                                    <div v-if="value" class="flex items-center gap-2">
                                        <Avatar :label="value.initials" shape="circle" class="!h-6 !w-6 !text-xs" />
                                        <span>{{ value.name }}</span>
                                    </div>
                                    <span v-else>Verantwortlichen auswählen</span>
                                </template>
                                <template #option="{ option }">
                                    <div class="flex items-center gap-2">
                                        <Avatar :label="option.initials" shape="circle" class="!h-6 !w-6 !text-xs" />
                                        <span>{{ option.name }}</span>
                                    </div>
                                </template>
                            </Select>
                        </div>

                        <div class="flex justify-end gap-2 pt-4">
                            <Button label="Abbrechen" severity="secondary" size="small" @click="visible = false" />
                            <Button label="Weiter" severity="success" size="small" @click="activeTab = 'schedule'" />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="schedule" class="!px-1 !pt-4 !pb-0">
                    <div class="flex justify-end gap-2 pt-48">
                        <Button label="Abbrechen" severity="secondary" size="small" @click="visible = false" />
                        <Button label="Weiter" severity="success" size="small" @click="activeTab = 'settings'" />
                    </div>
                </TabPanel>

                <TabPanel value="settings" class="!px-1 !pt-4 !pb-0">
                    <div class="flex justify-end gap-2 pt-48">
                        <Button label="Abbrechen" severity="secondary" size="small" @click="visible = false" />
                        <Button label="Fertig" severity="success" size="small" @click="visible = false" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Dialog>
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

const visible = ref(true);
const activeTab = ref('general');
const projectName = ref('');

const categories = ref([
    { label: 'Entwicklung' },
    { label: 'Design' },
    { label: 'Marketing' }
]);

const category = ref(categories.value[0]);

const owners = ref([
    { name: 'Max Mustmann', initials: 'M' },
    { name: 'Anna Schmidt', initials: 'A' },
    { name: 'Leon Weber', initials: 'L' }
]);

const owner = ref(owners.value[0]);
</script>