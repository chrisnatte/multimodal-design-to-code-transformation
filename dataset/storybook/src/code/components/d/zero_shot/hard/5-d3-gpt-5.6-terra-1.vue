<template>
    <div class="flex min-h-screen items-center justify-center bg-black">
        <Dialog
            v-model:visible="dialogVisible"
            modal
            :draggable="false"
            :style="{ width: '32rem' }"
            :contentStyle="{ padding: '0 1.125rem 1.125rem' }"
            contentClass="p-0"
            closeIcon="pi pi-times"
        >
            <template #header>
                <span class="text-[17.5px] font-semibold text-slate-700">Neues Projekt</span>
            </template>

            <Tabs v-model:value="activeStep" class="w-full">
                <TabList>
                    <Tab value="0" class="text-sm font-bold">1 - Allgemein</Tab>
                    <Tab value="1" class="text-sm font-bold">2 - Zeitplan</Tab>
                    <Tab value="2" class="text-sm font-bold">3 - Einstellungen</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="0" class="px-1 pt-3 pb-0">
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
                                    optionLabel="label"
                                    class="w-full"
                                >
                                    <template #value="slotProps">
                                        <div v-if="slotProps.value" class="flex items-center gap-2">
                                            <Avatar :label="slotProps.value.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                            <span>{{ slotProps.value.label }}</span>
                                        </div>
                                        <span v-else>{{ slotProps.placeholder }}</span>
                                    </template>
                                    <template #option="slotProps">
                                        <div class="flex items-center gap-2">
                                            <Avatar :label="slotProps.option.initials" shape="circle" class="!h-6 !w-6 !bg-slate-200 !text-xs !text-slate-600" />
                                            <span>{{ slotProps.option.label }}</span>
                                        </div>
                                    </template>
                                </Select>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="1" class="px-1 pt-3 pb-0">
                        <div></div>
                    </TabPanel>

                    <TabPanel value="2" class="px-1 pt-3 pb-0">
                        <div class="flex flex-col gap-4">
                            <div class="flex items-center justify-between px-1">
                                <div class="flex flex-col">
                                    <span class="text-sm font-semibold text-slate-700">Öffentlich sichtbar</span>
                                    <span class="text-[10px] font-light text-slate-600">Für alle Teammitglieder</span>
                                </div>
                                <ToggleSwitch v-model="isPublic" />
                            </div>

                            <div class="flex items-center justify-between px-1">
                                <div class="flex flex-col">
                                    <span class="text-sm font-semibold text-slate-700">Benachrichtigungen</span>
                                    <span class="text-[10px] font-light text-slate-600">Bei Statusänderungen</span>
                                </div>
                                <ToggleSwitch v-model="notificationsEnabled" />
                            </div>
                        </div>
                    </TabPanel>
                </TabPanels>
            </Tabs>

            <template #footer>
                <div class="flex justify-end gap-2">
                    <Button label="Abbrechen" severity="secondary" @click="dialogVisible = false" />
                    <Button label="Weiter" class="!border-emerald-500 !bg-emerald-500 hover:!border-emerald-600 hover:!bg-emerald-600" @click="advanceStep" />
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

const dialogVisible = ref(true)
const activeStep = ref('0')
const projectName = ref('')
const categories = ref([
    { label: 'Entwicklung' }
])
const selectedCategory = ref(categories.value[0])
const owners = ref([
    { label: 'Max Mustmann', initials: 'M' }
])
const selectedOwner = ref(owners.value[0])
const isPublic = ref(true)
const notificationsEnabled = ref(false)

const advanceStep = () => {
    if (activeStep.value === '0') {
        activeStep.value = '1'
    } else if (activeStep.value === '1') {
        activeStep.value = '2'
    } else {
        dialogVisible.value = false
    }
}
</script>