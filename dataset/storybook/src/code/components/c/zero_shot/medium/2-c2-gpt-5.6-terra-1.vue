<template>
    <main class="min-h-screen bg-white px-6 pt-7 text-slate-700">
        <section class="w-full max-w-lg">
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

                <TabPanels>
                    <TabPanel value="profile" class="px-4 pt-6">
                        <div class="flex flex-col items-start">
                            <div class="relative mb-5">
                                <Avatar label="P" class="!h-14 !w-14 !bg-slate-200 !text-2xl !text-slate-600" />
                                <Button
                                    label="Edit"
                                    severity="success"
                                    size="small"
                                    class="absolute -right-6 -top-3 !px-2 !py-1 !text-xs"
                                />
                            </div>

                            <div class="flex w-64 flex-col gap-2">
                                <label for="username" class="text-sm text-slate-700">Benutzername</label>
                                <InputText
                                    id="username"
                                    v-model="username"
                                    placeholder="Benutzername eingeben"
                                    class="w-full"
                                />
                            </div>

                            <Textarea
                                v-model="about"
                                placeholder="Informationen über dich...."
                                rows="4"
                                class="mt-5 h-25 w-64 resize-none"
                            />

                            <div class="mt-5 flex items-center gap-3">
                                <ToggleSwitch v-model="isPublic" class="!h-5 !w-9" />
                                <label for="visibility" class="text-sm text-slate-700">Öffentlich sichtbar</label>
                            </div>

                            <Button label="Speichern" severity="success" class="mt-5" />
                        </div>
                    </TabPanel>

                    <TabPanel value="security">
                        <div></div>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';

const activeTab = ref('profile');
const username = ref('');
const about = ref('');
const isPublic = ref(false);
</script>