<template>
    <div class="w-[560px] p-6">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList>
                <Tab value="profile" class="flex items-center gap-2">
                    <i class="pi pi-user-edit text-sm" />
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="flex items-center gap-2">
                    <i class="pi pi-shield text-sm" />
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="profile" class="px-4 pb-4 pt-3">
                    <div class="flex w-64 flex-col gap-5 pt-3">
                        <Avatar label="P" size="xlarge" class="bg-slate-200 text-2xl text-slate-600" />

                        <div class="flex flex-col gap-2">
                            <label for="username" class="text-sm text-slate-700">Benutzername</label>
                            <InputText
                                id="username"
                                v-model="username"
                                placeholder="Benutzername eingeben"
                                class="w-64"
                            />
                        </div>

                        <Textarea
                            v-model="profileInformation"
                            placeholder="Informationen über dich...."
                            rows="4"
                            class="w-64 resize-none"
                        />

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="isPublic" input-id="public-profile" />
                            <label for="public-profile" class="text-sm text-slate-700">Öffentlich sichtbar</label>
                        </div>

                        <Button label="Speichern" class="w-fit" @click="saveProfile" />
                    </div>
                </TabPanel>

                <TabPanel value="security" class="px-4 pb-4 pt-3">
                    <div class="flex w-[480px] flex-col gap-5 py-3">
                        <div class="flex w-54 flex-col gap-2">
                            <label for="password" class="text-sm text-slate-700">Passwort</label>
                            <Password
                                id="password"
                                v-model="password"
                                toggle-mask
                                :feedback="false"
                                class="w-54"
                                input-class="w-full"
                            />

                            <div class="border border-slate-200 bg-white p-3 text-sm text-slate-700">
                                <div class="flex flex-col gap-3">
                                    <span class="font-semibold">Passwort wählen</span>
                                    <div class="flex h-2.5 overflow-hidden rounded">
                                        <span class="w-1/3 bg-orange-400" />
                                        <span class="w-1/3 bg-orange-400" />
                                        <span class="w-1/3 bg-slate-200" />
                                    </div>
                                    <span>Medium</span>
                                </div>

                                <div class="my-3 border-t border-slate-200" />

                                <div class="flex flex-col gap-1">
                                    <span>Ein Kleinbuchstabe</span>
                                    <span>Ein Großbuchstabe</span>
                                    <span>Eine Zahl</span>
                                    <span>Acht Zeichen</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="twoFactorAuthentication" input-id="two-factor" />
                            <label for="two-factor" class="text-sm text-slate-700">Zwei-Faktor-Authentifizierung</label>
                        </div>

                        <div class="flex w-54 flex-col gap-3">
                            <div class="flex flex-col gap-2">
                                <label for="session-duration" class="text-sm text-slate-700">Sitzungsdauer (Minuten)</label>
                                <InputText id="session-duration" v-model="sessionDuration" class="w-54" />
                            </div>
                            <Slider v-model="sessionDurationSlider" :min="0" :max="120" class="w-54" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <span class="text-sm text-slate-700">Sicherheitsstufe</span>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="low" value="Niedrig" />
                                    <label for="low" class="text-sm text-slate-700">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="medium" value="Mittel" />
                                    <label for="medium" class="text-sm text-slate-700">Mittel</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="high" value="Hoch" />
                                    <label for="high" class="text-sm text-slate-700">Hoch</label>
                                </div>
                            </div>
                        </div>

                        <Button label="Speichern" disabled class="w-fit" />
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Avatar from 'primevue/avatar';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Tab from 'primevue/tab';
import TabList from 'primevue/tablist';
import TabPanel from 'primevue/tabpanel';
import TabPanels from 'primevue/tabpanels';
import Tabs from 'primevue/tabs';
import Textarea from 'primevue/textarea';
import ToggleSwitch from 'primevue/toggleswitch';

const activeTab = ref('profile');
const username = ref('');
const profileInformation = ref('');
const isPublic = ref(false);
const password = ref('********');
const twoFactorAuthentication = ref(false);
const sessionDuration = ref('30');
const sessionDurationSlider = ref(30);
const securityLevel = ref('Hoch');

const saveProfile = () => {};
</script>