<template>
    <div class="min-h-screen">
        <Dialog
            v-model:visible="visible"
            modal
            header="Neues Projekt"
            :draggable="false"
            :style="{ width: '32rem' }"
            :breakpoints="{ '575px': '92vw' }"
            contentClass="pt-4"
        >
            <Tabs v-model:value="activeStep">
                <TabList>
                    <Tab value="1">1 - Allgemein</Tab>
                    <Tab value="2">2 - Zeitplan</Tab>
                    <Tab value="3">3 - Einstellungen</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="1">
                        <div class="flex flex-col gap-4 pt-1">
                            <div class="flex flex-col gap-2">
                                <label for="project-name" class="text-sm text-surface-700">Projektname</label>
                                <InputText id="project-name" v-model="projectName" class="w-full" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="category" class="text-sm text-surface-700">Kategorie</label>
                                <Select
                                    id="category"
                                    v-model="category"
                                    :options="categories"
                                    optionLabel="label"
                                    class="w-full"
                                />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="owner" class="text-sm text-surface-700">Verantwortlicher</label>
                                <Select
                                    id="owner"
                                    v-model="owner"
                                    :options="owners"
                                    optionLabel="label"
                                    class="w-full"
                                >
                                    <template #value="{ value, placeholder }">
                                        <div v-if="value" class="flex items-center gap-2">
                                            <Avatar :label="value.initials" shape="circle" class="!h-6 !w-6 !bg-surface-200 !text-sm !text-surface-600" />
                                            <span>{{ value.label }}</span>
                                        </div>
                                        <span v-else>{{ placeholder }}</span>
                                    </template>
                                    <template #option="{ option }">
                                        <div class="flex items-center gap-2">
                                            <Avatar :label="option.initials" shape="circle" class="!h-6 !w-6 !bg-surface-200 !text-sm !text-surface-600" />
                                            <span>{{ option.label }}</span>
                                        </div>
                                    </template>
                                </Select>
                            </div>

                            <div class="flex justify-end gap-2 pt-4">
                                <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                                <Button label="Weiter" @click="activeStep = '2'" />
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="2">
                        <div class="flex justify-end gap-2 pt-32">
                            <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                            <Button label="Weiter" @click="activeStep = '3'" />
                        </div>
                    </TabPanel>

                    <TabPanel value="3">
                        <div class="flex justify-end gap-2 pt-32">
                            <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                            <Button label="Fertig" @click="visible = false" />
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Dialog>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import InputText from 'primevue/inputtext';
import Select from 'primevue/select';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';

const visible = ref(true);
const activeStep = ref('1');
const projectName = ref('');
const categories = ref([
    { label: 'Entwicklung' },
    { label: 'Marketing' },
    { label: 'Design' }
]);
const category = ref(categories.value[0]);
const owners = ref([
    { label: 'Max Mustmann', initials: 'M' },
    { label: 'Anna Schmidt', initials: 'A' }
]);
const owner = ref(owners.value[0]);
</script>