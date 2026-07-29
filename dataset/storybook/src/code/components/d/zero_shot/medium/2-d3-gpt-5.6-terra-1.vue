<template>
    <div class="w-[560px] bg-white p-6 font-sans text-sm text-slate-700">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList>
                <Tab value="profile" class="flex items-center gap-2">
                    <i class="pi pi-user-edit text-sm"></i>
                    <span class="font-bold">Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="flex items-center gap-2">
                    <i class="pi pi-shield text-sm"></i>
                    <span class="font-bold">Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="profile" class="px-4 py-3">
                    <div class="flex w-64 flex-col gap-5 py-3">
                        <div class="relative h-16">
                            <Avatar label="P" size="xlarge" class="!h-14 !w-14 !bg-slate-200 !text-2xl !text-slate-600" />
                            <Button
                                label="Edit"
                                size="small"
                                class="absolute left-11 top-0 !px-2 !py-1 !text-xs"
                                @click="editingProfile = !editingProfile"
                            />
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="username">Benutzername</label>
                            <InputText
                                id="username"
                                v-model="username"
                                placeholder="Benutzername eingeben"
                                class="w-64"
                                :disabled="!editingProfile"
                            />
                        </div>

                        <Textarea
                            v-model="profileInformation"
                            placeholder="Informationen über dich...."
                            rows="4"
                            class="w-64 resize-none"
                            :disabled="!editingProfile"
                        />

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="publicProfile" />
                            <label for="public-profile">Öffentlich sichtbar</label>
                        </div>

                        <Button label="Speichern" class="w-fit" @click="saveProfile" />
                    </div>
                </TabPanel>

                <TabPanel value="security" class="px-4 py-3">
                    <div class="flex w-64 flex-col gap-5 py-3">
                        <div class="flex flex-col gap-2">
                            <label for="password">Passwort</label>
                            <Password
                                id="password"
                                v-model="password"
                                toggle-mask
                                :feedback="false"
                                class="w-64"
                                input-class="w-full"
                            />
                        </div>

                        <div class="w-64 border border-slate-200 bg-white p-3">
                            <div class="flex flex-col gap-2">
                                <div class="flex flex-col gap-3">
                                    <span class="font-semibold">Passwort wählen</span>
                                    <div class="flex h-2.5 w-full overflow-hidden rounded">
                                        <div class="w-1/3 bg-amber-500"></div>
                                        <div class="w-1/3 bg-amber-500"></div>
                                        <div class="w-1/3 bg-slate-200"></div>
                                    </div>
                                </div>
                                <span>Medium</span>
                                <Divider class="!my-1" />
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
                            <label for="two-factor">Zwei-Faktor-Authentifizierung</label>
                        </div>

                        <div class="flex flex-col gap-2">
                            <label for="session-duration">Sitzungsdauer (Minuten)</label>
                            <InputText id="session-duration" v-model="sessionDurationText" class="w-64" />
                            <Slider v-model="sessionDuration" :min="0" :max="120" class="w-64" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <span>Sicherheitsstufe</span>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="low" name="securityLevel" value="Niedrig" />
                                    <label for="low">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="medium" name="securityLevel" value="Mittel" />
                                    <label for="medium">Mittel</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="high" name="securityLevel" value="Hoch" />
                                    <label for="high">Hoch</label>
                                </div>
                            </div>
                        </div>

                        <Button label="Speichern" class="w-fit" disabled />
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
import Divider from 'primevue/divider';
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
const editingProfile = ref(true);
const username = ref('');
const profileInformation = ref('');
const publicProfile = ref(false);
const password = ref('********');
const twoFactorAuthentication = ref(false);
const sessionDuration = ref(30);
const sessionDurationText = ref('30');
const securityLevel = ref('Hoch');

const saveProfile = () => {};
</script>