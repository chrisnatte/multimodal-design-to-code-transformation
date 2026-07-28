<template>
    <div class="w-full max-w-[560px] bg-white px-6 pt-7">
        <Tabs v-model:value="activeTab">
            <TabList>
                <Tab value="profile" class="gap-2">
                    <i class="pi pi-user-edit text-sm"></i>
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="gap-2">
                    <i class="pi pi-shield text-sm"></i>
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels class="p-0">
                <TabPanel value="profile" class="p-0">
                    <div class="flex flex-col pt-6 pl-4">
                        <div class="relative h-14 w-14">
                            <Avatar label="P" size="xlarge" class="h-14 w-14 !bg-slate-200 !text-slate-600" />
                            <Button
                                label="Edit"
                                size="small"
                                severity="success"
                                class="absolute -top-2 left-11 !px-2 !py-1 !text-xs"
                            />
                        </div>

                        <div class="mt-5 flex flex-col">
                            <label for="username" class="mb-2 text-sm text-slate-700">Benutzername</label>
                            <InputText
                                id="username"
                                v-model="username"
                                variant="filled"
                                placeholder="Benutzername eingeben"
                                class="w-64"
                            />
                        </div>

                        <Textarea
                            v-model="bio"
                            variant="filled"
                            placeholder="Informationen über dich...."
                            rows="4"
                            class="mt-5 h-24 w-64 resize-none"
                        />

                        <div class="mt-5 flex items-center gap-3">
                            <ToggleSwitch v-model="publicProfile" />
                            <label for="public-profile" class="text-sm text-slate-700">Öffentlich sichtbar</label>
                        </div>

                        <Button
                            label="Speichern"
                            severity="success"
                            class="mt-5 w-fit"
                        />
                    </div>
                </TabPanel>

                <TabPanel value="security" class="p-0"></TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const bio = ref('')
const publicProfile = ref(false)
</script>