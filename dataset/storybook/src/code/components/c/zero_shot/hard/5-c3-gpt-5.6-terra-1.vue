<template>
    <Dialog
        v-model:visible="visible"
        modal
        closable
        :draggable="false"
        :style="{ width: '32rem' }"
        content-class="!px-5 !pt-4 !pb-5"
        header="Neues Projekt"
    >
        <Tabs v-model:value="activeStep">
            <TabList class="!border-b !border-slate-200">
                <Tab value="1" class="!px-4 !py-3 !text-sm !font-semibold">
                    1 - Allgemein
                </Tab>
                <Tab value="2" class="!px-4 !py-3 !text-sm !font-semibold">
                    2 - Zeitplan
                </Tab>
                <Tab value="3" class="!px-4 !py-3 !text-sm !font-semibold">
                    3 - Einstellungen
                </Tab>
            </TabList>

            <TabPanels class="!bg-transparent !p-0">
                <TabPanel value="1" class="!bg-transparent !px-1 !pt-4 !pb-0">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <label for="project-name" class="text-sm text-slate-700">Projektname</label>
                            <InputText
                                id="project-name"
                                v-model="projectName"
                                class="w-full !py-2 !text-sm"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="category" class="text-sm text-slate-700">Kategorie</label>
                            <Select
                                id="category"
                                v-model="category"
                                :options="categories"
                                option-label="label"
                                class="w-full !text-sm"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="owner" class="text-sm text-slate-700">Verantwortlicher</label>
                            <Select
                                id="owner"
                                v-model="owner"
                                :options="owners"
                                option-label="name"
                                class="w-full !text-sm"
                            >
                                <template #value="{ value }">
                                    <div v-if="value" class="flex items-center gap-2">
                                        <Avatar :label="value.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                        <span>{{ value.name }}</span>
                                    </div>
                                    <span v-else>Verantwortlichen auswählen</span>
                                </template>
                                <template #option="{ option }">
                                    <div class="flex items-center gap-2">
                                        <Avatar :label="option.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                        <span>{{ option.name }}</span>
                                    </div>
                                </template>
                            </Select>
                        </div>

                        <div class="mt-4 flex justify-end gap-2">
                            <Button
                                label="Abbrechen"
                                severity="secondary"
                                text
                                @click="visible = false"
                            />
                            <Button
                                label="Weiter"
                                @click="activeStep = '2'"
                            />
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="2" class="!bg-transparent !px-1 !pt-4 !pb-0">
                    <div class="flex justify-end gap-2">
                        <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
                        <Button label="Weiter" @click="activeStep = '3'" />
                    </div>
                </TabPanel>

                <TabPanel value="3" class="!bg-transparent !px-1 !pt-4 !pb-0">
                    <div class="flex justify-end gap-2">
                        <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
                        <Button label="Weiter" @click="visible = false" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'

const visible = ref(true)
const activeStep = ref('1')
const projectName = ref('')
const categories = [
    { label: 'Entwicklung' },
    { label: 'Marketing' },
    { label: 'Design' }
]
const category = ref(categories[0])
const owners = [
    { name: 'Max Mustmann', initials: 'M' },
    { name: 'Anna Schmidt', initials: 'A' }
]
const owner = ref(owners[0])
</script>