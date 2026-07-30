<template>
    <Dialog
        v-model:visible="visible"
        modal
        :draggable="false"
        :style="{ width: '510px' }"
        contentClass="!px-5 !pt-0 !pb-4"
        class="overflow-visible"
    >
        <template #header>
            <div class="flex w-[424px] items-center justify-between pr-2">
                <div class="flex items-center gap-3">
                    <Avatar label="M" shape="circle" class="!h-7 !w-7 !bg-slate-100 !text-xs !text-slate-600" />
                    <div class="flex flex-col leading-tight">
                        <span class="text-sm font-medium text-slate-700">Max Mustermann</span>
                        <span class="text-[10px] text-slate-500">Manager</span>
                    </div>
                </div>
                <Tag value="Aktiv" severity="success" class="!px-2 !py-1 !text-xs" />
            </div>
        </template>

        <Tabs v-model:value="activeTab">
            <TabList>
                <Tab value="personal" class="!px-4 !py-3 !text-sm">Persönliche Daten</Tab>
                <Tab value="settings" class="!px-4 !py-3 !text-sm">Einstellungen</Tab>
            </TabList>

            <TabPanels class="!p-0">
                <TabPanel value="personal" class="!p-0">
                    <div class="flex flex-col gap-4 px-1 pt-4">
                        <div class="flex flex-col gap-1.5">
                            <label for="name" class="text-sm text-slate-700">Name</label>
                            <InputText
                                id="name"
                                v-model="name"
                                class="!h-8 !w-full !text-sm"
                                autocomplete="off"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label for="email" class="text-sm text-slate-700">E-Mail</label>
                            <InputText
                                id="email"
                                v-model="email"
                                class="!h-8 !w-full !text-sm"
                                autocomplete="off"
                            />
                        </div>

                        <div class="flex flex-col gap-1.5">
                            <label for="role" class="text-sm text-slate-700">Rolle</label>
                            <Select
                                ref="roleSelect"
                                inputId="role"
                                v-model="role"
                                :options="roles"
                                class="!h-8 !w-full !text-sm"
                                appendTo="self"
                            />
                        </div>

                        <div class="flex items-center gap-2 pt-24">
                            <Checkbox v-model="isActive" inputId="active" binary />
                            <label for="active" class="text-sm text-slate-700">Ist aktiv</label>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel value="settings" class="!p-0">
                    <div class="h-[350px]"></div>
                </TabPanel>
            </TabPanels>
        </Tabs>

        <template #footer>
            <div class="flex justify-end gap-2 pt-3">
                <Button
                    label="Abbrechen"
                    severity="secondary"
                    size="small"
                    @click="visible = false"
                />
                <Button
                    label="Speichern"
                    severity="success"
                    size="small"
                    @click="visible = false"
                />
            </div>
        </template>
    </Dialog>
</template>

<script setup>
import { onMounted, ref } from 'vue'
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

const visible = ref(true)
const activeTab = ref('personal')
const name = ref('Max Mustmann')
const email = ref('max@example.com')
const role = ref('Manager')
const isActive = ref(true)
const roleSelect = ref(null)
const roles = ref(['Manager', 'Mitarbeiter', 'Kunde'])

onMounted(() => {
    window.setTimeout(() => roleSelect.value?.show(), 150)
})
</script>