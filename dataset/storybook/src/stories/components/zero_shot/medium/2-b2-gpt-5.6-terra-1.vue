<template>
    <div class="w-[560px] bg-white p-6">
        <Tabs v-model:value="activeTab" class="w-full">
            <TabList class="border-b border-[#e2e8f0]">
                <Tab value="profile" class="flex items-center gap-2 px-4 py-3.5 text-sm font-bold">
                    <i class="pi pi-user-edit text-sm" />
                    <span>Profil &amp; Konto</span>
                </Tab>
                <Tab value="security" class="flex items-center gap-2 px-4 py-3.5 text-sm font-bold">
                    <i class="pi pi-shield text-sm" />
                    <span>Sicherheit &amp; Präferenzen</span>
                </Tab>
            </TabList>

            <TabPanels class="bg-white px-4 pb-4 pt-3">
                <TabPanel value="profile" class="p-0">
                    <div class="flex flex-col gap-5 py-3">
                        <div class="w-[216px]">
                            <label for="password" class="mb-2 block text-sm">Passwort</label>
                            <Password
                                id="password"
                                v-model="password"
                                :feedback="false"
                                toggleMask
                                class="w-full"
                                inputClass="w-full h-[33px] border-[#10b981] bg-[#f8fafc] px-3 py-2 text-sm"
                            />
                            <div class="mt-0 w-full border border-[#e2e8f0] bg-white p-3">
                                <div class="flex flex-col gap-2">
                                    <div class="flex flex-col gap-3.5">
                                        <span class="text-sm font-semibold">Passwort wählen</span>
                                        <div class="flex h-2.5 w-full overflow-hidden rounded-md">
                                            <div class="flex-1 bg-[#f59e0b]" />
                                            <div class="flex-1 bg-[#f59e0b]" />
                                            <div class="flex-1 bg-[#e2e8f0]" />
                                        </div>
                                    </div>
                                    <span class="text-sm">Medium</span>
                                </div>

                                <div class="my-3.5 border-t border-[#e2e8f0]" />

                                <div class="flex flex-col gap-1 text-sm">
                                    <span>Ein Kleinbuchstabe</span>
                                    <span>Ein Großbuchstabe</span>
                                    <span>Eine Zahl</span>
                                    <span>Acht Zeichen</span>
                                </div>
                            </div>
                        </div>

                        <div class="flex items-center gap-3">
                            <ToggleSwitch v-model="twoFactorEnabled" />
                            <label for="two-factor" class="text-sm">Zwei-Faktor-Authentifizierung</label>
                        </div>

                        <div class="flex w-[216px] flex-col gap-3">
                            <div>
                                <label for="session-duration" class="mb-2 block text-sm">Sitzungsdauer (Minuten)</label>
                                <InputText
                                    id="session-duration"
                                    :modelValue="String(sessionDuration)"
                                    class="h-[33px] w-full border-[#cbd5e1] bg-[#f8fafc] px-3 py-2 text-sm"
                                    @update:modelValue="sessionDuration = Number($event)"
                                />
                            </div>
                            <Slider v-model="sessionDuration" :min="0" :max="120" class="w-full" />
                        </div>

                        <div class="flex flex-col gap-3">
                            <span class="text-sm">Sicherheitsstufe</span>
                            <div class="flex items-center gap-5">
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" inputId="low" name="security-level" value="low" />
                                    <label for="low" class="text-sm">Niedrig</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" inputId="medium" name="security-level" value="medium" />
                                    <label for="medium" class="text-sm">Mittel</label>
                                </div>
                                <div class="flex items-center gap-2">
                                    <RadioButton v-model="securityLevel" inputId="high" name="security-level" value="high" />
                                    <label for="high" class="text-sm">Hoch</label>
                                </div>
                            </div>
                        </div>

                        <Button label="Speichern" disabled class="h-[33px] w-[91px] text-sm" />
                    </div>
                </TabPanel>

                <TabPanel value="security" class="p-0" />
            </TabPanels>
        </Tabs>
    </div>
</template>

<script setup>
import { ref } from 'vue';
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
import ToggleSwitch from 'primevue/toggleswitch';

const activeTab = ref('profile');
const password = ref('********');
const twoFactorEnabled = ref(false);
const sessionDuration = ref(30);
const securityLevel = ref('high');
</script>