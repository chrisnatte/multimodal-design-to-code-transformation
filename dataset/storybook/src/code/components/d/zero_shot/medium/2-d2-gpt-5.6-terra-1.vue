<template>
    <div class="flex min-h-[687px] w-[560px] flex-col bg-white p-6 font-sans text-[#334155]">
        <Tabs
            v-model:value="activeTab"
            class="w-full"
            :dt="{
                tab: {
                    active: { color: '#10b981', borderColor: '#10b981' },
                    color: '#64748b',
                    hover: { color: '#10b981' }
                },
                activeBar: { background: '#10b981' },
                tabpanel: { padding: '0.75rem 1rem 1rem' }
            }"
        >
            <TabList class="border-b border-[#e2e8f0]">
                <Tab value="profile" class="gap-2 px-4 py-3 text-sm font-bold">
                    <i class="pi pi-user-edit text-sm" />
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="gap-2 px-4 py-3 text-sm font-bold">
                    <i class="pi pi-shield text-sm" />
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels>
                <TabPanel value="profile">
                    <div class="flex flex-col gap-5 py-3">
                        <div class="relative h-[62px] w-[56px]">
                            <Avatar
                                label="P"
                                class="!h-14 !w-14 !bg-[#e2e8f0] !text-2xl !text-[#334155]"
                                shape="square"
                            />
                            <Button
                                label="Edit"
                                size="small"
                                class="absolute -right-6 -top-2 !h-[22px] !bg-[#10b981] !px-2 !py-0 !text-xs"
                            />
                        </div>

                        <div class="flex w-64 flex-col gap-2">
                            <label for="username" class="text-sm">Benutzername</label>
                            <InputText
                                id="username"
                                v-model="username"
                                placeholder="Benutzername eingeben"
                                class="h-[33px] w-64 !border-[#cbd5e1] !bg-[#f8fafc] !px-3 !text-sm"
                            />
                        </div>

                        <Textarea
                            v-model="bio"
                            placeholder="Informationen über dich...."
                            rows="4"
                            class="h-[101px] w-64 resize-none !border-[#cbd5e1] !bg-[#f8fafc] !px-3 !py-2 !text-sm"
                        />

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="publicProfile" />
                            <label for="public-profile" class="text-sm">Öffentlich sichtbar</label>
                        </div>

                        <Button
                            label="Speichern"
                            class="w-fit !h-[33px] !bg-[#4fd1ae] !px-3 !text-sm"
                        />
                    </div>
                </TabPanel>

                <TabPanel value="security">
                    <div class="flex flex-col gap-5 py-3">
                        <div class="flex w-[216px] flex-col gap-2">
                            <label for="password" class="text-sm">Passwort</label>
                            <Password
                                id="password"
                                v-model="password"
                                toggle-mask
                                :feedback="true"
                                placeholder="********"
                                class="w-[216px]"
                                input-class="!h-[33px] !w-[216px] !border-[#10b981] !bg-[#f8fafc] !px-3 !text-sm"
                                :pt="{
                                    meter: { class: '!h-2.5' },
                                    info: { class: '!text-sm' }
                                }"
                            >
                                <template #header>
                                    <div class="mb-3 font-semibold">Passwort wählen</div>
                                </template>
                                <template #footer>
                                    <Divider />
                                    <ul class="m-0 list-none p-0 text-sm leading-6">
                                        <li>Ein Kleinbuchstabe</li>
                                        <li>Ein Großbuchstabe</li>
                                        <li>Eine Zahl</li>
                                        <li>Acht Zeichen</li>
                                    </ul>
                                </template>
                            </Password>
                        </div>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="twoFactorAuthentication" />
                            <span class="text-sm">Zwei-Faktor-Authentifizierung</span>
                        </div>

                        <div class="flex w-[216px] flex-col gap-3">
                            <label for="session-duration" class="text-sm">Sitzungsdauer (Minuten)</label>
                            <InputText
                                id="session-duration"
                                v-model="sessionDuration"
                                class="h-[33px] w-[216px] !border-[#cbd5e1] !bg-[#f8fafc] !px-3 !text-sm"
                            />
                            <Slider v-model="sessionSlider" :min="0" :max="120" class="w-[216px]" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <span class="text-sm">Sicherheitsstufe</span>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="low" value="Niedrig" />
                                    <label for="low" class="text-sm">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="medium" value="Mittel" />
                                    <label for="medium" class="text-sm">Mittel</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" input-id="high" value="Hoch" />
                                    <label for="high" class="text-sm">Hoch</label>
                                </div>
                            </div>
                        </div>

                        <Button label="Speichern" disabled class="w-fit !h-[33px] !px-3 !text-sm" />
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
const username = ref('');
const bio = ref('');
const publicProfile = ref(false);
const password = ref('********');
const twoFactorAuthentication = ref(false);
const sessionDuration = ref('30');
const sessionSlider = ref(30);
const securityLevel = ref('Hoch');
</script>