<template>
    <div class="flex min-h-screen items-center justify-center">
        <Dialog
            v-model:visible="visible"
            modal
            :draggable="false"
            :style="{ width: '32rem' }"
            :pt="{
                header: { class: '!px-[17.5px] !py-[17.5px]' },
                content: { class: '!px-[17.5px] !pt-0 !pb-[17.5px]' },
                footer: { class: '!px-[17.5px] !pt-0 !pb-[17.5px]' }
            }"
        >
            <template #header>
                <span class="text-[17.5px] font-semibold text-slate-700">Neues Projekt</span>
            </template>

            <Tabs v-model:value="activeTab" class="w-full">
                <TabList>
                    <Tab value="0" class="!px-4 !py-3 text-sm font-bold">1 - Allgemein</Tab>
                    <Tab value="1" class="!px-4 !py-3 text-sm font-bold">2 - Zeitplan</Tab>
                    <Tab value="2" class="!px-4 !py-3 text-sm font-bold">3 - Einstellungen</Tab>
                </TabList>

                <TabPanels class="!p-0">
                    <TabPanel value="0" class="!px-1 !pb-0 !pt-3">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-2">
                                <label for="project-name" class="text-sm text-slate-700">Projektname</label>
                                <InputText id="project-name" v-model="projectName" class="w-full" />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="category" class="text-sm text-slate-700">Kategorie</label>
                                <Select
                                    id="category"
                                    v-model="selectedCategory"
                                    :options="categories"
                                    optionLabel="label"
                                    class="w-full"
                                />
                            </div>

                            <div class="flex flex-col gap-2">
                                <label for="owner" class="text-sm text-slate-700">Verantwortlicher</label>
                                <Select
                                    id="owner"
                                    v-model="selectedOwner"
                                    :options="owners"
                                    optionLabel="name"
                                    class="w-full"
                                >
                                    <template #value="{ value }">
                                        <div v-if="value" class="flex items-center gap-2">
                                            <Avatar :label="value.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                            <span>{{ value.name }}</span>
                                        </div>
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

                    <TabPanel value="1" class="!px-1 !pb-0 !pt-3">
                        <div class="min-h-[152px]"></div>
                    </TabPanel>

                    <TabPanel value="2" class="!px-1 !pb-0 !pt-3">
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
                                <ToggleSwitch v-model="notificationsEnabled" />
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button label="Abbrechen" severity="secondary" @click="visible = false" />
                    <Button label="Weiter" severity="success" @click="activeTab = '1'" />
                </div>
            </template>
        </Dialog>
    </div>
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
import ToggleSwitch from 'primevue/toggleswitch'

const visible = ref(true)
const activeTab = ref('0')
const projectName = ref('')
const categories = ref([{ label: 'Entwicklung' }])
const selectedCategory = ref(categories.value[0])
const owners = ref([{ name: 'Max Mustmann', initials: 'M' }])
const selectedOwner = ref(owners.value[0])
const isPublic = ref(true)
const notificationsEnabled = ref(false)
</script>