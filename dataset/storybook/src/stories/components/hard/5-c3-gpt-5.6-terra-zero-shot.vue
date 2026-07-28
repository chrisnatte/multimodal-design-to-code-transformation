<template>
    <Dialog
        v-model:visible="visible"
        modal
        :draggable="false"
        class="w-[32rem]"
        contentClass="!px-6 !pt-4 !pb-4"
    >
        <template #header>
            <span class="text-lg font-semibold text-slate-700">Neues Projekt</span>
        </template>

        <Tabs v-model:value="activeTab">
            <TabList>
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

            <TabPanels class="!p-0">
                <TabPanel value="1" class="!px-1 !pt-4 !pb-0">
                    <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                            <label for="projectName" class="text-sm text-slate-700">Projektname</label>
                            <InputText id="projectName" v-model="projectName" class="w-full" />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="category" class="text-sm text-slate-700">Kategorie</label>
                            <Select
                                id="category"
                                v-model="category"
                                :options="categories"
                                optionLabel="name"
                                class="w-full"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="owner" class="text-sm text-slate-700">Verantwortlicher</label>
                            <Select
                                id="owner"
                                v-model="owner"
                                :options="owners"
                                optionLabel="name"
                                class="w-full"
                            >
                                <template #value="slotProps">
                                    <div v-if="slotProps.value" class="flex items-center gap-2">
                                        <Avatar :label="slotProps.value.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                        <span>{{ slotProps.value.name }}</span>
                                    </div>
                                    <span v-else>{{ slotProps.placeholder }}</span>
                                </template>
                                <template #option="slotProps">
                                    <div class="flex items-center gap-2">
                                        <Avatar :label="slotProps.option.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                        <span>{{ slotProps.option.name }}</span>
                                    </div>
                                </template>
                            </Select>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="2" class="!p-4">
                    <div></div>
                </TabPanel>

                <TabPanel value="3" class="!p-4">
                    <div></div>
                </TabPanel>
            </TabPanels>
        </Tabs>

        <template #footer>
            <div class="flex justify-end gap-2 pt-4">
                <Button label="Abbrechen" severity="secondary" text @click="visible = false" />
                <Button label="Weiter" @click="activeTab = '2'" />
            </div>
        </template>
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
const activeTab = ref('1')
const projectName = ref('')

const categories = ref([
    { name: 'Entwicklung' },
    { name: 'Design' },
    { name: 'Marketing' }
])
const category = ref(categories.value[0])

const owners = ref([
    { name: 'Max Mustmann', initials: 'M' },
    { name: 'Anna Schmidt', initials: 'A' },
    { name: 'Lisa Meyer', initials: 'L' }
])
const owner = ref(owners.value[0])
</script>