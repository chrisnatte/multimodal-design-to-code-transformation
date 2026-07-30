<template>
    <Dialog
        v-model:visible="dialogVisible"
        modal
        :closable="false"
        :draggable="false"
        :style="{ width: '32rem' }"
        content-class="!p-0"
        class="overflow-hidden"
    >
        <template #header>
            <div class="flex w-full items-center justify-between">
                <div class="flex items-center gap-3">
                    <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-slate-200 !text-sm !text-slate-600" />
                    <div class="flex flex-col">
                        <span class="text-sm text-slate-700">Max Mustermann</span>
                        <span class="text-[10px] font-light text-slate-500">Manager</span>
                    </div>
                </div>

                <div class="flex items-center gap-4">
                    <Tag value="Aktiv" severity="success" class="!px-2 !py-1 !text-xs" />
                    <Button
                        icon="pi pi-times"
                        text
                        severity="secondary"
                        aria-label="Schließen"
                        class="!h-7 !w-7 !p-0"
                        @click="dialogVisible = false"
                    />
                </div>
            </div>
        </template>

        <div class="flex flex-col px-[17.5px] pb-[17.5px]">
            <Tabs v-model:value="activeTab">
                <TabList>
                    <Tab value="personal" class="!px-4 !py-3.5 !text-sm">
                        Persönliche Daten
                    </Tab>
                    <Tab value="settings" class="!px-4 !py-3.5 !text-sm">
                        Einstellungen
                    </Tab>
                </TabList>

                <TabPanels class="!px-1 !pt-3 !pb-4">
                    <TabPanel value="personal" class="!p-0">
                        <div class="flex flex-col gap-4">
                            <div class="flex flex-col gap-1.5">
                                <label for="name" class="text-sm text-slate-700">Name</label>
                                <InputText id="name" v-model="name" class="h-[33px] w-full !text-sm" />
                            </div>

                            <div class="flex flex-col gap-1.5">
                                <label for="email" class="text-sm text-slate-700">E-Mail</label>
                                <InputText id="email" v-model="email" type="email" class="h-[33px] w-full !text-sm" />
                            </div>

                            <div class="flex flex-col gap-0.5">
                                <label for="role" class="text-sm text-slate-700">Rolle</label>
                                <Select
                                    ref="roleSelect"
                                    input-id="role"
                                    v-model="role"
                                    :options="roles"
                                    class="h-[33px] w-full !text-sm"
                                    append-to="body"
                                />
                            </div>

                            <div class="flex items-center gap-2">
                                <Checkbox v-model="isActive" input-id="active" binary />
                                <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value="settings" class="!p-0">
                        <div class="min-h-[252px]"></div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>

        <template #footer>
            <div class="flex w-full justify-end gap-[7px]">
                <Button
                    label="Abbrechen"
                    severity="secondary"
                    class="!h-[33px] !bg-slate-100 !px-3 !text-sm"
                    @click="dialogVisible = false"
                />
                <Button
                    label="Speichern"
                    class="!h-[33px] !px-3 !text-sm"
                    @click="dialogVisible = false"
                />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { nextTick, onMounted, ref } from 'vue'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Checkbox from 'primevue/checkbox'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Tag from 'primevue/tag'

const dialogVisible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])
const isActive = ref(true)
const roleSelect = ref(null)

onMounted(async () => {
    await nextTick()
    roleSelect.value?.$el?.click()
})
</script>