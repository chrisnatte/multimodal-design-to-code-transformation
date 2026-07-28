<template>
    <main class="min-h-[498px] w-full bg-white pt-7">
        <section class="mx-6 max-w-[512px]">
            <Tabs v-model:value="activeTab">
                <TabList>
                    <Tab value="profile" class="gap-2">
                        <i class="pi pi-user-edit text-sm" />
                        <span>Profil &amp; Konto</span>
                    </Tab>
                    <Tab value="security" class="gap-2">
                        <i class="pi pi-shield text-sm" />
                        <span>Sicherheit &amp; Präferenzen</span>
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel value="profile" class="px-4 pt-6">
                        <div class="relative w-fit">
                            <Avatar label="P" class="!h-14 !w-14 !bg-slate-200 !text-2xl !text-slate-600" />
                            <Badge value="Edit" severity="success" class="absolute -right-6 -top-3" />
                        </div>

                        <div class="mt-5 flex w-64 flex-col gap-2">
                            <label for="username" class="text-sm text-slate-700">Benutzername</label>
                            <InputText id="username" v-model="username" placeholder="Benutzername eingeben" class="h-8 w-full text-sm" />
                        </div>

                        <Textarea
                            v-model="about"
                            placeholder="Informationen über dich...."
                            rows="4"
                            class="mt-5 h-[101px] w-64 resize-none text-sm"
                        />

                        <div class="mt-5 flex items-center gap-3">
                            <ToggleSwitch v-model="isPublic" />
                            <label for="visibility" class="text-sm text-slate-700">Öffentlich sichtbar</label>
                        </div>

                        <Button label="Speichern" severity="success" class="mt-5 h-8 px-3 text-sm" />
                    </TabPanel>

                    <TabPanel value="security" class="px-4 pt-6" />
                </TabPanels>
            </Tabs>
        </section>
    </main>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
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