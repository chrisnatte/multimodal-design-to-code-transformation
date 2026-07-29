<template>
    <main class="w-full max-w-[560px] min-h-[498px] bg-white px-6 pt-6">
        <Tabs v-model:value="activeTab">
            <TabList>
                <Tab value="profile" class="flex items-center gap-2">
                    <i class="pi pi-user text-sm"></i>
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="flex items-center gap-2">
                    <i class="pi pi-shield text-sm"></i>
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="profile" class="px-4 py-6">
                    <div class="flex flex-col items-start">
                        <div class="relative mb-5">
                            <Avatar label="P" size="xlarge" shape="square" class="bg-slate-200 text-slate-700" />
                            <Badge value="Edit" severity="success" class="absolute -right-6 -top-2" />
                        </div>

                        <div class="flex w-64 flex-col gap-2">
                            <label for="username" class="text-sm text-slate-700">Benutzername</label>
                            <InputText
                                id="username"
                                v-model="username"
                                size="small"
                                placeholder="Benutzername eingeben"
                                class="w-full"
                            />
                        </div>

                        <Textarea
                            v-model="about"
                            placeholder="Informationen über dich...."
                            class="mt-5 h-[100px] w-64 resize-none"
                        />

                        <div class="mt-5 flex items-center gap-2">
                            <ToggleSwitch v-model="publicVisible" />
                            <label for="public-visible" class="text-sm text-slate-700">Öffentlich sichtbar</label>
                        </div>

                        <Button label="Speichern" size="small" class="mt-5" />
                    </div>
                </TabPanel>

                <TabPanel value="security" class="px-4 py-6">
                    <div></div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </main>
</template>

<script setup>
import { ref } from 'vue'
import Avatar from 'primevue/avatar'
import Badge from 'primevue/badge'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Tab from 'primevue/tab'
import TabList from 'primevue/tablist'
import TabPanel from 'primevue/tabpanel'
import TabPanels from 'primevue/tabpanels'
import Tabs from 'primevue/tabs'
import Textarea from 'primevue/textarea'
import ToggleSwitch from 'primevue/toggleswitch'

const activeTab = ref('profile')
const username = ref('')
const about = ref('')
const publicVisible = ref(false)
</script>